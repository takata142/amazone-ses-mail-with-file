import AWS from 'aws-sdk'
import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'

const main = async () => {
  dotenv.config()

  const transporter = nodemailer.createTransport({
    SES: new AWS.SES({ apiVersion: '2010-12-01', region: 'us-west-2' }),
  })

  const result = await transporter.sendMail({
    from: '送信元メールアドレス',
    to: '送信先メールアドレス',
    subject: 'test',
    text: 'テストメール',
    attachments: [
      {
        filename: 'text.txt',
        path: './text.txt',
      },
    ],
  })
  console.log(result.messageId)
}

main()
