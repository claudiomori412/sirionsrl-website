"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowDownIcon from "../ui/icon/arrow-down";

export default function Page() {
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Qualità</h1>
                </div>
            </div>
            
            <div className="md:flex bg-customWhite p-12">
                <div className=" w-[100%] md:w-[50%] flex flex-col">
                    <p className="text-customBlack text-xl text-left" style={{marginTop:"20px"}}>Il reparto metrologico di DeltAts è dotato di macchine ad alta precisione e di software di ultima generazione, che garantisce il livello qualitativo dei pezzi prodotti nonché ci fornisce le informazioni che vengono utilizzate per il continuo miglioramento della qualità.</p>
                    <p className="text-customBlack text-left text-sm" style={{marginTop:"20px"}}>Il nostro sistema di qualità garantisce una precisione al micron dei prodotti realizzati.</p>
                    <p className="text-customBlack text-left text-sm" style={{marginTop:"20px"}}>Il coordinamento tra il reparto metrologico, l’ufficio tecnico, lo stampaggio ed il reparto attrezzeria è di fondamentale importanza per raggiungere gli obbiettivi di qualità che ci siamo imposti.</p>
                    <h1 className="text-customBlack text-xl text-left font-extrabold"  style={{marginTop:"30px"}}>Certificazioni</h1>
                    <p className="text-customBlack text-left text-sm" style={{marginTop:"20px"}}>Siamo certificati secondo il sistema integrato di qualità UNI EN ISO 9001:2015 e abbiamo ha ottenuto la certificazione IATF 16949:2016 nell’ottobre 2018.</p>
                    <div className="flex" style={{marginTop: "30px"}}>
                        <div className="w-[50%] flex flex-col">
                            <div className="flex items-center">
                                <ArrowDownIcon size="30px" color="#004f92"></ArrowDownIcon>
                                <a className="text-customBlack text-left text-sm" style={{marginLeft:"15px"}}>ISO 9001 2015 IT</a>
                            </div> 
                            <div className="flex items-center">
                                <ArrowDownIcon size="30px" color="#004f92"></ArrowDownIcon>
                                <a className="text-customBlack text-left text-sm" style={{marginLeft:"15px"}}>IATF 16949 2016</a>
                            </div> 
                        </div>
                        <div className=" w-[50%] flex justify-end">
                            <div className="flex">
                                {/* <img src="https://www.deltats.eu/wp-content/uploads/2021/06/loghi-nuovi-dnv150.jpg" alt="" /> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className=" w-[100%] md:w-[50%] flex justify-center" >
                    {/* <img  src="https://www.deltats.eu/wp-content/uploads/2019/05/qualita.jpg"/> */}
                </div>
            </div>
           
            <div className="w-100 h-[25rem] flex items-center justify-center p-10" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-qualita.jpg?id=8744) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="w-[100%] flex flex-col">
                    <h1 className="text-4xl text-left font-extrabold" style={{marginBottom: "20px"}}>Sistema di qualità</h1>
                    <p className=" text-left">Pensiamo che la qualità sia indispensabile per un’azienda. Per questo abbiamo implementato il nostro sistema di qualità, ed ogni giorno cerchiamo di migliorare per far si che i nostri prodotti rispettino i requisiti e le specifiche richieste dei nostri clienti.</p>
                </div>
            </div>
        </>
      );
}