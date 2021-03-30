import AWS from 'aws-sdk'
import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'

const main = async () => {
  dotenv.config()

  const transporter = nodemailer.createTransport({
    SES: new AWS.SES({ apiVersion: '2010-12-01', region: 'ap-northeast-1' }),
  })

  const result = await transporter.sendMail({
    from: 'yoshikawa.daio@classmethod.jp',
    to: 'yoshikawa.daio@classmethod.jp',
    subject: 'タイトル',
    text: '本文',
    attachments: [
      {
        filename: 'sample.png',
        path: './sample.png',
      },
    ],
  })

  console.log(result.messageId)
}

main()
