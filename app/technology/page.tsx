"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import Title from '../ui/components/title';
import Image from 'next/image';
import TechImg1 from './../../img/technology/Calibro FP.jpeg'
import TechImg2 from './../../img/technology/arzuffi.jpeg'
import TechImg3 from './../../img/technology/engel 800t.jpeg'
import TechImg4 from './../../img/technology/galileo.jpeg'
import TechImg5 from './../../img/technology/image.GUNGN2.png'
import TechImg6 from './../../img/technology/image.QCILN2.png'
import TechImg7 from './../../img/technology/image.ZO71M2.png'
import TechImg8 from './../../img/technology/lab new 1.jpeg'
import TechImg9 from './../../img/technology/lab new.jpeg'
import TechImg10 from './../../img/technology/posaggio saldatura fp.jpeg'
import TechImg11 from './../../img/technology/presse sirion.jpeg'
import TechImg12 from './../../img/technology/test acqua.jpeg'

import EndPage from '../ui/components/end-page';

export default function Page() {

    return (
        <>
            <Title title={'Tecnologia'} />


         

            <div className="flex flex-col md:flex-row items-center justify-center pb-10 pt-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        
                        <Image src={TechImg2} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'520px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Alluminatura</h4>
                        <p className="text-customWhite mb-2">Il nostro reparto di alluminatura all’avanguardia include un’alluminatrice Arzuffi con diametro di 1800 mm e altezza di 1600 mm, una Galileo con diametro di 1340 mm e altezza di 950 mm, e un’altra Galileo con diametro di 1100 mm e altezza di 950 mm.<br></br>Queste macchine ci permettono di lavorare con precisione ed efficienza, garantendo componenti metallizzati di alta qualità per il settore automotive e non solo.<br></br>Grazie alla nostra tecnologia avanzata e alla competenza del nostro team, siamo in grado di offrire soluzioni personalizzate che soddisfano le esigenze specifiche dei nostri clienti.<br></br>Scoprite come Sirion può trasformare le vostre idee in realtà, fornendo componenti in alluminati di prima classe per le vostre applicazioni di illuminazione automobilistica, sempre con un impegno costante verso l’eccellenza e l’innovazione continua.</p>


                        
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                    <Image src={TechImg3} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="p-6"  style={{height:'520px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Presse ad iniezione</h4>
                        <p className="mb-2 text-customWhite">Il nostro reparto è equipaggiato con 18 presse ad iniezione all’avanguardia, con capacità che variano dalle 125 alle 1300 tonnellate. <br></br>Questa varietà ci consente di realizzare una vasta gamma di componenti in plastica con precisione e qualità superiori, rispondendo efficacemente alle elevate esigenze del settore automobilistico.<br></br>Il nostro team di esperti lavora quotidianamente con passione e competenza per innovare e ottimizzare i nostri processi produttivi.<br></br>L’obiettivo di Sirion è fornire ai nostri clienti prodotti affidabili e di alta qualità, contribuendo al loro successo e alla soddisfazione degli utenti finali.<br></br>Esplorando il nostro reparto di stampaggio, scoprirete l’impegno e la professionalità che mettiamo in ogni fase della produzione.<br></br>Siamo orgogliosi del nostro lavoro e ci impegniamo costantemente per mantenere standard eccellenti.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg10} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className=" p-6" style={{height:'520px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Saldatrici</h4>
                        <p className="text-customWhite mb-2">Il nostro parco saldatrici dedicato è composto da 2 saldatrici CEMAS a vibrazione, 5 saldatrici Branson a vibrazione e 3 saldatrici Euromodel ad ultrasuoni.<br></br>Questi strumenti all’avanguardia ci permettono di eseguire saldature di alta precisione su una vasta gamma di componenti, garantendo robustezza e affidabilità per il settore automotive.<br></br>Grazie alla nostra esperienza e alla continua innovazione, offriamo soluzioni di saldatura su misura che soddisfano le esigenze specifiche dei nostri clienti.<br></br>Scoprite come Sirion può migliorare i vostri progetti con saldature di qualità superiore, assicurando prestazioni eccellenti e durature.<br></br>Siamo impegnati a fornire risultati impeccabili e a mantenere i più elevati standard di qualità e sicurezza nel nostro processo produttivo.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg8} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'520px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Laboratorio</h4>
                        <p className="mb-2 text-customWhite">
                        
Sirion presenta il suo nuovo laboratorio, recentemente ristrutturato e dotato di tecnologie all’avanguardia per garantire precisione e affidabilità nei test e nelle analisi dei prodotti. Tra le sue caratteristiche principali, spiccano una camera fotometrica, un banco di prova corrosione, un banco di resistenza alla pioggia e alla polvere, una cella umido statica, un banco vibrante e una cella climatica. Il nostro impegno per la qualità si riflette nel rigoroso processo di test, che assicura la massima performance e durata dei componenti nel tempo. Scopri di più sulle nostre capacità di test e analisi e su come possiamo contribuire al successo dei tuoi progetti nel settore automobilistico.</p>
                    </div>
                </div>
            </div>

            <EndPage></EndPage>
        </>
      );
}