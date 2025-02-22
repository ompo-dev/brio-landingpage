import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email é obrigatório" },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: "Nova Inscrição na Lista de Espera - Brio",
      html: `
        <h2>Nova Inscrição na Lista de Espera</h2>
        <p>Email do inscrito: <strong>${email}</strong></p>
        <p>Data da inscrição: ${new Date().toLocaleString('pt-BR')}</p>
      `,
    })

    return NextResponse.json(
      { message: "Inscrição realizada com sucesso" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao processar inscrição:", error)
    return NextResponse.json(
      { error: "Erro ao processar inscrição" },
      { status: 500 }
    )
  }
}

