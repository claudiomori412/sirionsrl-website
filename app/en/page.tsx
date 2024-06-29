"use client";
import Image from "next/image";
import news1 from "../../img/news/news_1.png";
import news2 from "../../img/news/news_2.png";
import news3 from "../../img/news/news_3.png";
import Head from "next/head";

import pB2 from "../../img/products/bottom/E84 BMW.jpeg";
import pB4 from "../../img/products/bottom/Tyco 2.jpeg";

import Button from "../ui/components/button";
import EndPage from "../ui/components/end-page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useEffect, useState } from "react";
import Link from "next/link";
import TitleHome from "../ui/components/title-home";
import Description from "../ui/components/description";
import Footer from "../ui/dashboard-en/footer";
import Navbar from "../ui/dashboard-en/navbar";

export default function Home() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const finalCount1 = 18000;
    const finalCount2 = 36000;
    const finalCount3 = 95;
    const finalCount4 = 1300;
    const duration = 3000; // Duration in milliseconds
  
    useEffect(() => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(1, elapsedTime / duration);
        const newCount1 = Math.floor(progress * finalCount1);
        setCount1(newCount1);
        const newCount2 = Math.floor(progress * finalCount2);
        setCount2(newCount2);
        const newCount3 = Math.floor(progress * finalCount3);
        setCount3(newCount3);
        const newCount4 = Math.floor(progress * finalCount4);
        setCount4(newCount4);
  
        if (progress === 1) {
          clearInterval(interval);
        }
      }, 2); // Counter update interval (10 milliseconds)
  
      return () => clearInterval(interval);
    }, []);


  return (
    <>
    <Navbar/>
    <Head>
        {/* Add meta tags for keywords */}
        <meta name="keywords" content="lighting, plastic molding, plastic injection, automotive, design, quality, reliability" />
        {/* Add the canonical tag */}
        <link rel="canonical" href="https://www.sirion.com/" />
        {/* Add robots directives */}
        <meta name="robots" content="index, follow" />
        {/* Other meta tags already present */}
        <title>Sirion Srl - Home</title>
        <meta name="description" content="Sirion Srl is a leading company in the lighting sector for the automotive market, specializing in plastic injection molding. We offer a complete service, from design to the final component, ensuring quality and reliability at every stage of the process." />
    </Head>
    <TitleHome description={"Quality in"} description2={"every light"} description3={"Thanks to our experience, we offer a 360° service from plastic material molding to the finishing of lighting components for the automotive market."}/>
    <Description text={"Sirion Srl is a leading company in the lighting sector for the automotive market, specializing in plastic injection molding."} text2={"We offer a complete service, from design to the final component, ensuring quality and reliability at every stage of the process."}></Description>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center bg-customWhite p-10 justify-items-start">
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium">{count1}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">sqm of covered structure</h3>
            </div>
        </div>
    </div>
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium">{count2}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">sqm of total structure</h3>
            </div>
        </div>
    </div>
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium">{count3}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">people in the team</h3>
            </div>
        </div>
    </div>
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium"> {count4}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">maximum press tonnage</h3>
            </div>
        </div>
    </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
        <Image src={pB2} alt="Know How Image 1" />
    </div>
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
        <h4 className="mb-4 text-customBlack text-3xl font-medium">Know How</h4>
        <p className="mb-4 text-customBlack">Discover Sirion’s decades of know-how in the automotive lighting sector. Our flexibility and experience make us a reliable partner for Italian and foreign auto component manufacturers.</p>
        <Link href="/en/know-how"> 
            <Button text={"Discover"}></Button>
        </Link>
    </div>
</div>
<div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-last flex items-center justify-center">
        <Image src={pB4} alt="Product Image 1" />
    </div>
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-first">
        <h4 className="mb-4 text-customBlack text-3xl font-medium">Products</h4>
        <p className="mb-4 text-customBlack">Thanks to our technology and flexibility, we are able to meet all customer needs and produce various products for the automotive lighting sector, such as: front headlights, rear lights, turn signals, fog lights, clearance lights, ambient light, blind spot, third brake light, and reflectors.</p>
        <Link href="/en/products"> 
            <Button text={"Discover"}></Button>
        </Link>
    </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-last bg-customDarkGrey2 p-3">
        <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Number of slides visible at the same time
            centeredSlides={true} // Center active slides
            navigation={true} // Enable navigation
        >
            <SwiperSlide>
                <video width="600" controls>
                    <source src="/news.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </SwiperSlide>

            <SwiperSlide>
                <Image src={news1} alt="techImage" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={news2} alt="techImage" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={news3} alt="techImage" />
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-first">
        <h4 className="mb-4 text-customBlack text-3xl font-medium">Media Reviews</h4>
        <p className="mb-4 text-customBlack">We are proud to have been the focus of media attention. Newspaper reviews reflect our commitment and dedication in the sector. From respected journalists to industry magazines, our initiatives have captured everyone’s interest. Discover what the media say about us and why we are a trusted choice in the market.</p>
    </div>
</div>

<EndPage text1={"Research and Innovation"} text2={"Discover how Sirion is committed to continuous research to innovate and meet the needs of customers in the automotive sector."} text3={"Contact Us"} href={"/en/contact"}></EndPage>
<Footer></Footer>
</>
  );
}
