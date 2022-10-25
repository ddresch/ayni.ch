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
        <Headline line1="Ayurveda Massagen" line2="übersicht behandlungen" />
        <h2>Allgemeine Informationen</h2>
        <p>Die Ayurveda-Massagen werden mit speziellen Kräuter-Ölen durchgeführt, die in den meisten Fällen auch nach der Behandlung auf der Haut verbleiben können. Bitte ältere, gut waschbare und bequeme Kleidung mitbringen oder anziehen. Bei einigen Behandlungen werden auch die Haare eingeölt, bitte eine Kopfbedeckung wie Mütze oder einen Schal mitbringen, um den Kopf vor Wind und Kälte zu schützen.</p>
        <p>Einige Ayurveda-Massagen sind während der Schwangerschaft oder bei den Mens kontraindiziert. In diesem Fall den Termin bitte bis 48 Stunden vorher verschieben oder ich passe die Art der Massage / Behandlung an.</p>
        <div className='spacer-md'></div>
        <h2>Ayurveda Massagen</h2>
        <h3>Teilkörpermassagen</h3>
        <ul>
            <li><b>Padabhyanga</b><br/>eine kühlende, entspannende und vitalisierende Fussmassage mit Ghee</li>
            <li><b>Pristabhyanga</b><br/>eine lösende und entspannende Rückenmassage für geschmeidigere Bewegung</li>
            <li><b>Mukabhyanga</b><br/>diese Kopf- und Gesichtsmassage ist ein himmlisch entspannendes Erlebnis, welche den Geist beruhigt </li>
            <li><b>Shiroabhyanga</b><br/>eine Kopf, Nacken, Schulter Massage um etwaige Verspannungen in diesem Bereich zu lösen</li>
        </ul>
        <h3>Ganzkörpermassagen</h3>
        <ul>
            <li><b>Abhyanga</b><br/>die Einölung mit den liebenden Händen Ganzkörper-Ölmassage sorgt für Verjüngung und Beruhigung von Körper und Geist</li>
            <li><b>Udvartana</b><br/>die Pulvermassage aktiviert den Stoffwechsel, das Lymphsystem und macht die Haut durch den Peeling effekt weich und zart</li>
            <li><b>Gharshana</b><br/>die trockene Seidenhandschuh-Massage hilft der Aktivierung des Lymphsystems und der Sinne</li>
            <li><b>Kalari</b><br/>ürsprünglich aus der Südindischen Kampfkunst entsanden öffnet diese Massagen Blockaden, verbessert die Beweglichkeit, reinigt, kräftigt und harmoinisiert den Organismus</li>
            <li><b>7-Stellungsmassage</b><br/>die Ganzkörpereinölung in 7 Stellungen wirkt ausgleichend und vitalisierend</li>
        </ul>
        <h3>Spezialbehandlungen</h3>
        <ul>
            <li><b>Basti</b><br/>die lokalen Ölanwendung auf Gelenken und Rücken sorgen für Nährung und Entspannung</li>
            <li><b>Upanasveda</b><br/>diese Tiefengewebe-Marmamassage auf dem Rücken wirkt besonders lösend durch spezifische Öle, Kräuter und Wärme Anwendung</li>
        </ul>
        <div className='spacer-md'></div>
        <Link href='/kontakt'>
          <a className=''>Massage Buchen</a>
        </Link>
      </div>
      <div className='spacer-top'></div>
    </Layout>
  )
}