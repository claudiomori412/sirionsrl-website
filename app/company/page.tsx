"use client"
import Title from "../ui/components/title";
import Image from "next/image";
import company1 from "../../img/company/logo sirion.jpg";
import company2 from "../../img/default/title-banner.jpg";
import Documents from "../ui/components/documents";
import Link from "next/link";

export default function Page() {

   
  

    return (
        <>
          <Title title={"Azienda"} ></Title>
            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={company1} alt="Immagine Know How 3" width={500} height={400}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Storia</h4>
                    <p className="mb-4 text-customBlack">Sirion srl , nata l’ 01/09/2023 dopo l’acquisizione al bando del MISE dell’ormai Ex Blutec, è ora una realtà produttiva strategica per i maggiori player del settore Automotive.<br></br>Il Core Business si concentra sulla progettazione, stampaggio e assemblaggio di materie plastiche per il mercato dell’Automotive, nello specifico il settore Lighting (interior ed exterior).<br></br>Sirion srl è detenuta al 100% dalla capogruppo <Link target="_blank" href="https://www.deltats.eu">DeltAts srl</Link> con sede a Loranzè (TO) che da più di 10 anni opera nel settore dello stampaggio per il mercato automotive.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={company2} alt="Immagine Know How 3" objectFit="cover"  height={600}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Mission</h4>
                    <p className="mb-4 text-customBlack">Sirion si impegna a raggiungere il successo economico, impegnandosi a far crescere la propria attività attraverso il miglioramento continuo dei processi e l’utilizzo delle risorse interne. Il cliente è al centro di ogni attività. 
La nostra conoscenza, l’esperienza, la qualità, la flessibilità e la competitività dei costi sono tutti parametri in base ai quali veniamo giudicati. La soddisfazione del cliente e dei nostri dipendenti sono la nostra missione principale.
Sirion crea un ambiente di lavoro sano e rispettoso per i propri dipendenti instaurando una cultura del lavoro basata sulla fiducia, l’ordine ed il rispetto reciproco. Innovazione e qualità con un occhio alla sostenibilità  sono i principali motori del nostro successo. Utilizzando consapevolmente risorse e processi in modo efficiente, testimoniamo il nostro impegno a preservare e rispettare la qualità ambientale del nostro territorio. La sicurezza sul posto di lavoro è una priorità e non un ripensamento, la sicurezza era, è e sarà il principio cardine su cui ogni lavoratore di Sirion potrà basarsi.</p>
                </div>
            </div>
          

            

            <Documents id="documents"></Documents>
        </>
    );
}
