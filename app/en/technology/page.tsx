"use client"
import Title from '../../ui/components/title';
import Image from 'next/image';
import TechImg2 from './../../../img/technology/arzuffi.jpeg'
import TechImg3 from './../../../img/technology/engel 800t.jpeg'
import TechImg8 from './../../../img/technology/lab new 1.jpeg'
import TechImg10 from './../../../img/technology/posaggio saldatura fp.jpeg'
import EndPage from '../../ui/components/end-page';
import Footer from '@/app/ui/dashboard-en/footer';
import Navbar from '@/app/ui/dashboard-en/navbar';

export default function Page() {

    return (
        <>
            <Navbar/>
            <Title title={'Technology'} />

            <div className="flex flex-col md:flex-row items-center justify-center pb-10 pt-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg2} alt="Safety Valves Image" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'520px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Aluminizing</h4>
                        <p className="text-customWhite mb-2">
                        Our state-of-the-art aluminizing department includes an Arzuffi aluminizer with a diameter of 1800 mm and a height of 1600 mm, a Galileo with a diameter of 1340 mm and a height of 950 mm, and another Galileo with a diameter of 1100 mm and a height of 950 mm.<br />
                        These machines allow us to work with precision and efficiency, ensuring high-quality metallized components for the automotive sector and beyond.<br />
                        Thanks to our advanced technology and the expertise of our team, we are able to offer customized solutions that meet the specific needs of our customers.<br />
                        Discover how Sirion can turn your ideas into reality, providing first-class aluminized components for your automotive lighting applications, always with a constant commitment to excellence and continuous innovation.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg3} alt="Safety Valves Image" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="p-6"  style={{height:'520px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Injection Molding Machines</h4>
                        <p className="mb-2 text-customWhite">
                        Our department is equipped with 18 state-of-the-art injection molding machines, with capacities ranging from 125 to 1300 tons.<br />
                        This variety allows us to produce a wide range of plastic components with superior precision and quality, effectively meeting the high demands of the automotive sector.<br />
                        Our team of experts works daily with passion and expertise to innovate and optimize our production processes.<br />
                        Sirion’s goal is to provide our customers with reliable, high-quality products, contributing to their success and the satisfaction of end-users.<br />
                        Exploring our molding department, you will discover the commitment and professionalism we put into every stage of production.<br />
                        We are proud of our work and constantly strive to maintain excellent standards.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg10} alt="Safety Valves Image" layout="fill" objectFit="cover"/>
                    </div>
                    <div className=" p-6" style={{height:'520px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Welding Machines</h4>
                        <p className="text-customWhite mb-2">
                        Our dedicated welding machine park consists of 2 CEMAS vibration welders, 5 Branson vibration welders, and 3 Euromodel ultrasonic welders.<br />
                        These cutting-edge tools allow us to perform high-precision welds on a wide range of components, ensuring robustness and reliability for the automotive sector.<br />
                        Thanks to our experience and continuous innovation, we offer customized welding solutions that meet the specific needs of our customers.<br />
                        Discover how Sirion can enhance your projects with superior quality welds, ensuring excellent and durable performance.<br />
                        We are committed to delivering impeccable results and maintaining the highest standards of quality and safety in our production process.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg8} alt="Safety Valves Image" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'520px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Laboratory</h4>
                        <p className="mb-2 text-customWhite">
                        Sirion presents its new laboratory, recently renovated and equipped with cutting-edge technologies to ensure precision and reliability in product testing and analysis. Among its main features are a photometric chamber, a corrosion test bench, a rain and dust resistance test bench, a static humidity cell, a vibrating bench, and a climatic cell. Our commitment to quality is reflected in the rigorous testing process, which ensures maximum performance and durability of components over time. Learn more about our testing and analysis capabilities and how we can contribute to the success of your projects in the automotive sector.</p>
                    </div>
                </div>
            </div>

            <EndPage text1={"Research and Innovation"} text2={"Discover how Sirion is committed to continuous research to innovate and meet the needs of customers in the automotive sector."} text3={"Contact Us"} href={"/en/contact"}></EndPage>
            <Footer></Footer>
        </>
    );
}
