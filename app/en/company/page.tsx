"use client"
import Title from "../../ui/components/title";
import Image from "next/image";
import company1 from "../../../img/company/logo sirion.jpg";
import company2 from "../../../img/default/title-banner.jpg";
import imageUrl from "../../../img/document/photo_2023-08-20_11-52-50.jpg"
import Link from "next/link";
import Footer from "@/app/ui/dashboard-en/footer";
import Navbar from "@/app/ui/dashboard-en/navbar";

export default function Page() {

    return (
        <>
         <Navbar/>
          <Title title={"Company"} ></Title>
            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={company1} alt="Know How Image 3" width={500} height={400}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">History</h4>
                    <p className="mb-4 text-customBlack">Sirion srl, established on 01/09/2023 after the acquisition of the former Blutec through the MISE tender, is now a strategic production reality for the major players in the automotive sector.<br></br>The Core Business focuses on the design, molding, and assembly of plastic materials for the Automotive market, specifically the Lighting sector (interior and exterior).<br></br>Sirion srl is 100% owned by the parent company <Link target="_blank" href="https://www.deltats.eu">DeltAts srl</Link> based in Loranzè (TO), which has been operating in the molding sector for the automotive market for over 10 years.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={company2} alt="Know How Image 3" objectFit="cover"  height={600}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Mission</h4>
                    <p className="mb-4 text-customBlack">Sirion is committed to achieving economic success by growing its business through continuous process improvement and the use of internal resources. The customer is at the center of every activity.
Our knowledge, experience, quality, flexibility, and cost competitiveness are all parameters by which we are judged. Customer and employee satisfaction is our primary mission.
Sirion creates a healthy and respectful work environment for its employees by establishing a work culture based on trust, order, and mutual respect. Innovation and quality with an eye on sustainability are the main drivers of our success. By consciously using resources and processes efficiently, we demonstrate our commitment to preserving and respecting the environmental quality of our territory. Workplace safety is a priority, not an afterthought. Safety was, is, and will be the cornerstone principle on which every Sirion worker can rely.</p>
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
                <div className="absolute inset-0 bg-black opacity-60 bg-customBlack"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                    <h1 className="text-customWhite text-4xl font-bold text-center mb-14">Documents</h1>
                    <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center">
                        <div className="text-center md:text-left">
                            <Link target="_blank" href={'/IATF Sirion.pdf'}>
                                <p className="text-customWhite mb-4 text-2xl">&#8226; IATF</p>
                            </Link>
                            <Link target="_blank" href={'/Sirion S.r.l._ISO 9001 2015_cambio ragione sociale.pdf'}>
                                <p className="text-customWhite mb-4 text-2xl">&#8226; ISO9001</p>
                            </Link>
                            <Link target="_blank" href={'/Codice Etico Sirion.pdf'}>
                                <p className="text-customWhite mb-4 text-2xl">&#8226; Code of Ethics</p>
                            </Link>
                            <Link target="_blank" href={'/impronta-new-CO2.pdf'}>
                                <p className="text-customWhite mb-4 text-2xl">&#8226; CO2 Footprint</p>
                            </Link>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-4"></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
