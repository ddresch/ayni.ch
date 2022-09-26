const tpl = ({ name, mail, phone, request, message }) => {
    return {
        to: process.env.contact_recipient_mail,
        from: process.env.contact_mail_sender,
        subject: 'ayni.ch - Kontaktanfrage',
        text: `Folgende Anfrage ist via Deiner Webseite angekommen!\n\n
            Name: ${name}\n\n
            Mail: ${mail}\n\n
            Telefon: ${phone}\n\n
            Anfrage: ${request}\n\n
            Nachricht: ${message}\n\n
        `,
        html: `<strong>Folgende Anfrage ist via Deiner Webseite angekommen!</strong><br />                
            <p>
                <strong>Kunde:</strong><br />
                Name: ${name}<br />
                Mail: ${mail}<br />
                Telefon: ${phone}<br />
                Anfrage: ${request}<br />
                Nachricht: ${message}<br />
            </p>
        `,
    }
}

export default tpl