"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import { useState } from 'react';
import Title from '../ui/components/title';
import Image from 'next/image';
import TechImg1 from './../../img/sustainability/image.XUX8M2.png'
import TechImg5 from './../../img/sustainability/Sostenibilita.png'
import EndPage from '../ui/components/end-page';
import Description from '../ui/components/description';
import Link from 'next/link';
import Button from '../ui/components/button';

export default function Page() {
    const [showRobot, setShowRobot] = useState(true)
    const [showLine, setShowLine] = useState(false)
    const [showIsland, setShowIsland] = useState(false)

    const openTab = (title: any) => {
        switch (title) {
            case 'Robot':
                setShowLine(false);
                setShowIsland(false);
                setShowRobot(true);
                break;
            case 'Linee':
                setShowRobot(false);
                setShowIsland(false);
                setShowLine(true);
                break;
            case 'Isole':
                setShowRobot(false);
                setShowLine(false);
                setShowIsland(true);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Title title={'Sostenibilità'} />
            <Description 
                text={"In SIRION SRL siamo impegnati non solo a fornire prodotti di alta qualità, ma anche a farlo in modo sostenibile e responsabile nei confronti dell'ambiente. Riconosciamo l'importanza di ridurre l'impatto ambientale delle nostre operazioni e stiamo adottando misure concrete per raggiungere questo obiettivo. Abbiamo avviato un processo di calcolo delle emissioni di CO2 generate dalle nostre attività e ci impegniamo a compensarle attraverso certificazioni carbon footprint, garantendo così un'impronta ecologica sempre più ridotta."} 
                text2={"Inoltre, siamo entusiasti di annunciare che nel corso dell'anno installeremo la prima fase di un ampio progetto dedicato all'energia rinnovabile. Questo progetto prevede l'installazione di pannelli fotovoltaici per la produzione di energia pulita e sostenibile, riducendo ulteriormente il nostro impatto ambientale e contribuendo alla transizione verso un futuro più verde e sostenibile."}
                text3={"Continuate a seguire i nostri progressi nella nostra missione per un ambiente più pulito e sostenibile. Insieme, possiamo fare la differenza."}
            />

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                    <Image src={TechImg5} alt='techImage' width={500} height={300}></Image>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">CO2 Carbon footprint compensation</h4>
                    <p className="mb-4 text-customBlack">Sirion lavora sempre con un occhio alla sostenibilità e con l’aiuto della società @Upgreene è già stato emesso il primo report del CALCOLO DELL’ IMPRONTA DI CARBONIO CFP DI ORGANIZZAZIONE  con lo scopo di calcolare l’impronta emissiva di organizzazione di Sirion srl e quindi di quantificare l’impatto sul cambiamento climatico delle singole azioni riconducibili alle attività della sede.
                        Il totale delle emissioni di CO2 calcolate sarà interamente compensato da UpGreene ,consentendo a Sirion di intraprendere un percorso verso la neutralità climatica.</p>
                        <Link target="_blank" href={'/CALCOLO_DELL’_IMPRONTA_DI_CARBONIO_CFPDI_ORGANIZZAZIONE_Sirion_Srl.pdf'}>
                            <Button text="IMPRONTA C02" />
                        </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-last flex items-center justify-center">
                    <Image src={TechImg1} alt='techImage' width={500} height={300}></Image>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-first">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Pannelli Fotovoltaici</h4>
                    <p className="mb-4 text-customBlack">L’obiettivo di Sirion srl è quello di crescere anche dal punto dell’ecosostenibilità, a tal punto Sirion è già al lavoro con un progetto pluriennale che permetterà entro la fine del 2026 di autoprodurre energia dai pannelli fotovoltaici per coprire fino al 75% del fabbisogno, questo mediante anche impianti elettrici di ultima generazione</p>
                </div>
            </div>
            <EndPage></EndPage>
        </>
      );
}