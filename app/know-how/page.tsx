"use client"
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import Image from "next/image";
import EndPage from "../ui/components/end-page";
import { Swiper, SwiperSlide } from "swiper/react";
import know1 from "../../img/know-how/Picture 2.jpg";
import know2 from "../../img/know-how/Mostrina e Q8.jpeg";
import know3 from "../../img/know-how/Panda.jpeg";
import know4 from "../../img/know-how/Picture 7.jpg";
import know5 from "../../img/know-how/Q8.jpeg";
import know6 from "../../img/know-how/Tyco 2.jpeg";
import know7 from "../../img/know-how/Picture 5.jpg";
import know8 from "../../img/know-how/montaggio 1.jpeg";
import know9 from "../../img/know-how/montaggio fa24.jpeg";
import know10 from "../../img/know-how/Picture 4.jpg";

import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";

export default function Page() {
    return (
        <>
          <Title title={"Know How"}  description={"Scopri il know-how decennale di Sirion nel settore dell’illuminazione per il mercato automotive. La nostra flessibilità e esperienza ci rendono un partner affidabile per i produttori di componenti auto italiani ed esteri."} />
          <Description text={"Sono le competenze e la dedizione del nostro team che ci consentono di eccellere nel settore automobilistico, offrendo un prodotto di alta qualità rispettando tutte le richieste dei nostri clienti"}></Description>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Swiper
                        spaceBetween={20}
                        modules={[Navigation]}
                      
                        slidesPerView={1} // Numero di slide visibili contemporaneamente
                        centeredSlides={true} // Centra le slide attive
                        navigation={true} // Abilita la navigazione
                       
                        >
                            <SwiperSlide>
                                <Image src={know4} alt="techImage" ></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={know1} alt="techImage" ></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={know7} alt="techImage" ></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={know10} alt="techImage" ></Image>
                            </SwiperSlide>
                        </Swiper>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Progettazione</h4>
                    <p className="mb-4 text-customBlack">Da SIRION SRL ci impegniamo a soddisfare al meglio le esigenze dei nostri clienti offrendo soluzioni su misura per componenti in plastica, compresi fanali posteriori e anteriori, nonché illuminazione esterna ed interna per veicoli commerciali e non solo; <br></br>La nostra missione è trasformare le vostre idee in realtà, dalla fase di concezione all’implementazione del progetto finale. <br></br>Grazie alla nostra vasta esperienza nel settore e alle tecnologie all’avanguardia a nostra disposizione, siamo in grado di guidarvi attraverso ogni passo del processo di progettazione, garantendo risultati che superano le vostre aspettative</p>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Stampaggio</h4>
                    <p className="mb-4 text-customBlack">Ci distinguiamo per il nostro parco macchine all’avanguardia, in continua evoluzione e dotato di tecnologie 4.0 e 5.0. <br></br>Con un totale di n°18 presse da 125 a 1250 tonnellate, siamo in grado di gestire una vasta gamma di progetti e garantire risultati impeccabili. <br></br>La nostra esperienza combinata con la nostra infrastruttura tecnologica ci consente di soddisfare le esigenze più complesse dei nostri clienti, fornendo componenti in plastica che rispettano gli standard più elevati di qualità e precisione. <br></br>Scoprite come la nostra capacità di stampaggio ad iniezione può contribuire al successo dei vostri progetti automobilistici.</p>
                    
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Swiper
                        spaceBetween={20}
                        modules={[Navigation]}
                      
                        slidesPerView={1} // Numero di slide visibili contemporaneamente
                        centeredSlides={true} // Centra le slide attive
                        navigation={true} // Abilita la navigazione
                       
                        >

                        <SwiperSlide>
                                <Image src={know2} alt="techImage"></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={know3} alt="techImage"></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={know6} alt="techImage"></Image>
                            </SwiperSlide>
                        </Swiper>
                </div>
               
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Swiper
                        spaceBetween={20}
                        modules={[Navigation]}
                      
                        slidesPerView={1} // Numero di slide visibili contemporaneamente
                        centeredSlides={true} // Centra le slide attive
                        navigation={true} // Abilita la navigazione
                       
                        >

                            <SwiperSlide>
                                <Image src={know8} alt="techImage"></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={know9} alt="techImage"></Image>
                            </SwiperSlide>
                        </Swiper>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Montaggio</h4>
                    <p className="mb-4 text-customBlack">Crediamo fermamente nelle nostre risorse umane e siamo orgogliosi di presentare il nostro team di oltre 90 dipendenti altamente qualificati.<br></br>Ogni membro del nostro team contribuisce con la propria esperienza e passione per garantire risultati che soddisfano le esigenze specifiche dei nostri clienti.<br></br>Presso le nostre strutture, adottiamo metodologie di lavoro efficienti e processi ottimizzati per garantire un montaggio preciso e affidabile. <br></br>Siamo impegnati a superare le aspettative dei nostri clienti, fornendo soluzioni di montaggio su misura che riflettono la nostra dedizione all’eccellenza.<br></br>Siamo pronti a collaborare con voi per trasformare le vostre idee in realtà</p>
                    
                </div>
            </div>

         
            <EndPage></EndPage>
        </>
    );
}
