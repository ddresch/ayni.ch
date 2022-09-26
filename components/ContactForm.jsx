import React from 'react'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
    const { reset, register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onChange',
    })
    const [formSent, setFormSent] = React.useState(false)

    const onSubmit = async data => {
        setFormSent(false)
        // build data object
        const formData = {
            name: data.name,
            mail: data.mail,
            phone: data.phone,
            request: data.request,
            message: data.message,
        }
        // call API to add photo to contest
        const res = await fetch(`/api/share/mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const resJson = await res.json()
        setFormSent(true)
        reset()
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type={'text'} placeholder={'Name'} {...register("name", {required: true, maxLength: 80})} />
            <label>Telefon</label>
            <input type={'text'} placeholder={'Telefon'} {...register("phone", {required: true, maxLength: 80})} />            
            <label>Email</label>
            <input type={'text'} placeholder={'E-Mail'} {...register("mail", {required: true, pattern: /^\S+@\S+$/i})}  />
            <label>Anliegen</label>
            <select {...register("request", {required: true})} >
                <option value="">Bitte ausw&auml;hlen</option>
                <option value="Ayurveda Ernaehrungsberatung">Ayurveda Ern&auml;hrungsberatung</option>
                <option value="Ayurveda Massage">Ayurveda Massage</option>
                <option value="Psychologische Beratung">Psychologische Beratung</option>
                <option value="Coaching">Coaching</option>
            </select>
            <label>Nachricht</label>
            <textarea rows="4" cols="50" {...register("message", {required: false})} ></textarea>                

            {isValid && 
                <input className='form-submit'
                    type='submit'
                    value='absenden'
                />
            }

            {isSubmitting &&
                <div>
                    <p><strong>Anfrage wird gesendet bitte warten ...</strong></p>
                </div>
            }

            {formSent &&
                <div>
                    <p><strong>Vielen Dank f&uuml;r Deine Anfrage!</strong></p>
                </div>
            }
        </form>    
    )
}