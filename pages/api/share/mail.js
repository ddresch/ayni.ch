import sgMail from '@sendgrid/mail'
import ContactRequest from '../../../components/mails/ContactRequest.js'

sgMail.setApiKey(process.env.sendgrid_api_key)

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ 
            message: 'Only POST requests allowed' 
        })
        return
    }

    return new Promise(resolve => {

        const { name, mail, phone, request, message } = req.body

        const mails = [
            ContactRequest({ name, mail, phone, request, message }),
        ]

        sgMail.send(mails)
            .then(() => {
                res.status(200).json({result: 'Emails sent'})
                return resolve()
            })
            .catch((error) => {
                res.status(500).json({result: error})
                return resolve()
            })
    })
}