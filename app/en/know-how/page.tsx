"use client"
import Description from "../../ui/components/description";
import Title from "../../ui/components/title";
import Image from "next/image";
import EndPage from "../../ui/components/end-page";
import { Swiper, SwiperSlide } from "swiper/react";
import know1 from "../../../img/know-how/Picture 2.jpg";
import know2 from "../../../img/know-how/Mostrina e Q8.jpeg";
import know3 from "../../../img/know-how/Panda.jpeg";
import know4 from "../../../img/know-how/Picture 7.jpg";
import know5 from "../../../img/know-how/Q8.jpeg";
import know6 from "../../../img/know-how/Tyco 2.jpeg";
import know7 from "../../../img/know-how/Picture 5.jpg";
import know8 from "../../../img/know-how/montaggio 1.jpeg";
import know9 from "../../../img/know-how/montaggio fa24.jpeg";
import know10 from "../../../img/know-how/Picture 4.jpg";

import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";
import Footer from "@/app/ui/dashboard-en/footer";
import Navbar from "@/app/ui/dashboard-en/navbar";

export default function Page() {
    return (
        <>
        <Navbar/>
          <Title title={"Know How"}  description={"Discover Sirion's decade-long know-how in the lighting sector for the automotive market. Our flexibility and experience make us a reliable partner for both Italian and foreign auto component manufacturers."} />
          <Description text={"It is the skills and dedication of our team that allow us to excel in the automotive sector, offering a high-quality product while meeting all the demands of our customers."}></Description>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Swiper
                        spaceBetween={20}
                        modules={[Navigation]}
                      
                        slidesPerView={1} // Number of slides visible at once
                        centeredSlides={true} // Center the active slides
                        navigation={true} // Enable navigation
                       
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
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Design</h4>
                    <p className="mb-4 text-customBlack">At SIRION SRL, we strive to meet our clients' needs by offering customized solutions for plastic components, including rear and front lights, as well as external and internal lighting for commercial and other vehicles. <br></br>Our mission is to turn your ideas into reality, from the conception phase to the final project implementation. <br></br>With our extensive experience in the field and the cutting-edge technologies at our disposal, we can guide you through every step of the design process, ensuring results that exceed your expectations.</p>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Molding</h4>
                    <p className="mb-4 text-customBlack">We stand out for our state-of-the-art machinery, constantly evolving and equipped with 4.0 and 5.0 technologies. <br></br>With a total of 18 presses ranging from 125 to 1250 tons, we can handle a wide range of projects and guarantee impeccable results. <br></br>Our experience, combined with our technological infrastructure, allows us to meet the most complex needs of our clients, providing plastic components that meet the highest standards of quality and precision. <br></br>Discover how our injection molding capabilities can contribute to the success of your automotive projects.</p>
                    
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Swiper
                        spaceBetween={20}
                        modules={[Navigation]}
                      
                        slidesPerView={1} // Number of slides visible at once
                        centeredSlides={true} // Center the active slides
                        navigation={true} // Enable navigation
                       
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
                      
                        slidesPerView={1} // Number of slides visible at once
                        centeredSlides={true} // Center the active slides
                        navigation={true} // Enable navigation
                       
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
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Assembly</h4>
                    <p className="mb-4 text-customBlack">We firmly believe in our human resources and are proud to present our team of over 90 highly qualified employees.<br></br>Each member of our team contributes with their experience and passion to guarantee results that meet our clients' specific needs.<br></br>At our facilities, we adopt efficient working methodologies and optimized processes to ensure precise and reliable assembly. <br></br>We are committed to exceeding our clients' expectations, providing customized assembly solutions that reflect our dedication to excellence.<br></br>We are ready to collaborate with you to turn your ideas into reality.</p>
                    
                </div>
            </div>

         
            
<EndPage text1={"Research and Innovation"} text2={"Discover how Sirion is committed to continuous research to innovate and meet the needs of customers in the automotive sector."} text3={"Contact Us"} href={"/en/contact"}></EndPage>
<Footer></Footer>
        </>
    );
}
