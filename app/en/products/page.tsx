"use client"
import Image from "next/image";
import Description from "../../ui/components/description";
import Title from "../../ui/components/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";
import pTop1 from "../../../img/products/top/F.A. 24.jpeg"
import pTop2 from "../../../img/products/top/FN 188 Y 2.jpeg"
import pTop3 from "../../../img/products/top/top-3.jpeg"
import pTop4 from "../../../img/products/top/R60 2.jpeg"
import pTop5 from "../../../img/products/top/Tappo24.jpeg"
import pC1 from "../../../img/products/central/Catad. 2024.jpeg"
import pC2 from "../../../img/products/central/EVO 1.jpeg"
import pC3 from "../../../img/products/central/F.A 2019 2.jpeg"
import pC4 from "../../../img/products/central/FN 188 Y 1.jpeg"
import pC5 from "../../../img/products/central/Roof Light.jpeg"
import pB1 from "../../../img/products/bottom/3STOP 2021.jpeg"
import pB2 from "../../../img/products/bottom/E84 BMW.jpeg"
import pB3 from "../../../img/products/bottom/Tyco 1.jpeg"
import pB4 from "../../../img/products/bottom/Tyco 2.jpeg"
import Footer from "@/app/ui/dashboard-en/footer";
import Navbar from "@/app/ui/dashboard-en/navbar";


export default function Page() {
    return (
        <>
        <Navbar/>
        <div style={{backgroundColor:'white', paddingBottom:'100px'}}>
            <Title title={'Products'} />
            <Description 
                text={"At SIRION SRL, we are proud to present a wide range of high-quality plastic components specifically designed for the commercial automotive sector."} 
                text2={"Our products include a wide selection of front and rear lights, turn signals, fog lights, clearance lights, ambient lights, blind spots, third brake lights, and reflectors, all rigorously designed and manufactured to ensure reliable and long-lasting performance."}
            />
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Number of slides visible at once
            centeredSlides={true} // Center the active slides
            navigation={true} // Enable navigation
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
            <Description text={"We are committed to meeting the specific needs of our clients by offering customized solutions that reflect our constant pursuit of innovation and quality. Thanks to our experience in the field and our attention to detail, we ensure that every product leaving our facilities meets the highest standards."} />
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Number of slides visible at once
            centeredSlides={true} // Center the active slides
            navigation={true} // Enable navigation
            
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
            <Description button={true} text4={"Contact us"} text={"Discover how our products can enhance the performance and appearance of your commercial vehicles. We are here to offer reliable and quality solutions that contribute to the success of your business."} />
           
            
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Number of slides visible at once
            centeredSlides={true} // Center the active slides
            navigation={true} // Enable navigation
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
        <Footer></Footer>
        </>
      );
}