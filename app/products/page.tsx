"use client"
import Image from "next/image";
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";
import pTop1 from "../../img/products/top/F.A. 24.jpeg"
import pTop2 from "../../img/products/top/FN 188 Y 2.jpeg"
import pTop3 from "../../img/products/top/Fp Daily 3.jpeg"
import pTop4 from "../../img/products/top/R60 2.jpeg"
import pTop5 from "../../img/products/top/Tappo24.jpeg"
import pC1 from "../../img/products/central/Catad. 2024.jpeg"
import pC2 from "../../img/products/central/EVO 1.jpeg"
import pC3 from "../../img/products/central/F.A 2019 2.jpeg"
import pC4 from "../../img/products/central/FN 188 Y 1.jpeg"
import pC5 from "../../img/products/central/Roof Light.jpeg"
import pB1 from "../../img/products/bottom/3STOP 2021.jpeg"
import pB2 from "../../img/products/bottom/E84 BMW.jpeg"
import pB3 from "../../img/products/bottom/Tyco 1.jpeg"
import pB4 from "../../img/products/bottom/Tyco 2.jpeg"
import Link from "next/link";
import Button from "../ui/components/button";


export default function Page() {
    return (
        <div style={{backgroundColor:'white', paddingBottom:'100px'}}>
            <Title title={'Prodotti'} />
            <Description 
                text={"Da SIRION SRL  siamo fieri di presentare una vasta gamma di componenti in plastica di alta qualità progettati appositamente per il settore automobilistico commerciale."} 
                text2={"I nostri prodotti includono una vasta selezione di fanali anteriori e posteriori, indicatori di direzione, fendinebbia, luci di ingombro, ambient light, blind spot, terzi stop e catadiottri, tutti rigorosamente progettati e realizzati per garantire prestazioni affidabili e durature."}
            />
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Numero di slide visibili contemporaneamente
            centeredSlides={true} // Centra le slide attive
            navigation={true} // Abilita la navigazione
           style={{background:'white',height:'30vh'}}
            >
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pTop1}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pTop2}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pTop3}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pTop4}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pTop5}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Description text={"Siamo impegnati a soddisfare le esigenze specifiche dei nostri clienti, offrendo soluzioni su misura che rispecchiano la nostra costante ricerca di innovazione e qualità. Grazie alla nostra esperienza nel settore e alla nostra attenzione ai dettagli, ci assicuriamo che ogni prodotto che lascia le nostre strutture sia all'altezza degli standard più elevati."} />
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Numero di slide visibili contemporaneamente
            centeredSlides={true} // Centra le slide attive
            navigation={true} // Abilita la navigazione
            
            style={{background:'white',height:'30vh'}}
            >
                
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pC1}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pC2}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pC3}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pC4}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pC5}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Description button={true} text={"Scoprite come i nostri prodotti possono migliorare le prestazioni e l'aspetto dei vostri veicoli commerciali. Siamo qui per offrire soluzioni affidabili e di qualità che contribuiscano al successo della vostra attività"} />
           
            
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Numero di slide visibili contemporaneamente
            centeredSlides={true} // Centra le slide attive
            navigation={true} // Abilita la navigazione
           style={{background:'white',height:'30vh'}}
            >
                
                
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pB1}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pB2}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pB3}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={pB4}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
      );
}