"use client"
import Title from "../../ui/components/title";
import Image from "next/image";
import imageUrl from "../../../img/default/map3.png"
import Link from "next/link";
import Footer from "@/app/ui/dashboard-en/footer";
import Navbar from "@/app/ui/dashboard-en/navbar";


export default function Page() {
  
    return (
        <>
         <Navbar/>
            <Title title={'Contacts'} />
            <div className="md:flex bg-customWhite p-12 justify-center">
                <div className="w-full md:w-1/2 flex justify-center flex-col bg-customDarkGrey3 p-12">
                    <h3 className="text-customBlack font-extrabold text-center text-3xl mb-4">Information Request</h3>
                    <p className="text-customBlack text-center mb-4">For more information, contact us on our <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://www.linkedin.com/company/sirion-srl/'}> LinkedIn</Link> page</p>
                    <p className="text-customBlack font-extrabold">Address</p>
                    <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://maps.google.de/?q=Strada+Cascina+Cauda+5%2C+14100+Asti'}> 
                        <p className="text-customBlack">Strada Cascina Cauda 5 14100 Asti (AT)</p>
                    </Link>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Contact Information</p>
                    <p className="text-customBlack">Tel. (+39) 0141445625</p>
                    <p className="text-customBlack">Tel. (+39) 0141445511</p>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Email</p>
                    <p className="text-customBlack">info@sirionsrl.com</p>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Company</p>
                    <p className="text-customBlack">P.iva / CF 01731880058</p>
                    <p className="text-customBlack">C.C.I.A.A. n. 31006</p>
                    <p className="text-customBlack">Share Capital € 1,250,000 i.v.</p>
                </div>
            </div>
            <div className="relative w-full h-[30rem] flex items-center justify-center">
                <Image
                    src={imageUrl}
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <Footer></Footer>
        </>
    );
}
