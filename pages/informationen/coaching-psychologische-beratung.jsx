import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import Link from 'next/link'
import * as React from 'react'
import { ContentContainer } from '../../components/ContentContainer'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import { Quote } from '../../components/Quote'

export default function Page(props) {
  return (
    <Layout>
        <div className='main-container'>
            <div className='spacer-top'></div>
            <Headline line1="coaching und beratung" line2="die eigenen ressource aktivieren" />
            <p>Der integrale Coaching Ansatz vereinheitlicht eine ganzheitliche Sichtweise der Prozessbegleitung und Perspektiverweiterung. Der Klient wird zu seinem Ziel hin begleitet. Dabei wird das Erkennen, Verstehen, Verändern und Integrieren mit dem Potenzial sämtlicher Ebenen des menschlichen Seins sowie die Beziehungen zur Umwelt verbunden:</p>
            <ul>
                <li>Körper – Embodiment</li>
                <li>Geist – Denken</li>
                <li>Selbst/Seele – Intuition</li>
                <li>Emotionen – Gefühle</li>
            </ul>
            <p>Ich arbeite nicht mit Problemen, sondern mit Lösungen! Die Arbeitsmethodik bedient sich eines Ziel-, Lösungs- und ressourcenorientiertem Ansatz. Die Grundhaltung beim Coaching ist positiv, wertschätzend und auf die Lösung ausgerichtet. Ausserdem wird auf die Gegenwart und Zukunft gerichtet – Hinzu anstatt auf den Hinweg zu fokussieren – und Lösungen und Annahmen konstruiert.</p>
            <Quote text={"Ich arbeite nicht mit Problemen, sondern mit Lösungen."} />
            <p>Die psychologische Beratung in Verbindung mit der ayurvedischen Philosophie ergibt eine moderne und zeitgemässe Methode. Durch ihre spirituelle Ausrichtung trägt sie dem heutigen wachsenden Bewusstsein in der Gesellschaft um mehr Sinnhaftigkeit im Leben, Rechnung.</p>
            <p>Sie basiert auf dem Ansatz eines unveränderlichen und unverletzlichen Selbst, aus der man auch in schwierigsten Lebenssituationen Kraft schöpfen kann.</p>
            <p>Die Methodik basiert demnach auf einem integralen und ressourcenorientierten Ansatz, sie ist auf die Gegenwart gerichtet und unterstützt bei Lösungsansätzen für die Zukunft.</p>
        </div>
        <div className='spacer-top'></div>
    </Layout>
  )
}