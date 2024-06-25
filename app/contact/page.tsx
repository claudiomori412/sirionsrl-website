"use client"
import { MutableRefObject, useRef } from "react";
import Button from "../ui/components/button";
import Title from "../ui/components/title";
import Image from "next/image";
import imageUrl from "../../img/default/map3.png"
import Link from "next/link";


export default function Page() {
    const inputNameRef = useRef<any>(null);
    const inputSurnameRef = useRef<any>(null)
    const inputBusinessRef = useRef<any>(null);
    const inputEmailRef = useRef<any>(null);
    const inputMessageRef = useRef<any>(null);
    const checkboxRef = useRef<any>(null);

    const handleSubmit = async () => {
     
        if (checkboxRef.current) {
           
              const formData = {
                  name: inputNameRef.current.value,
                  email: inputEmailRef.current.value,
                  message: inputMessageRef.current.value,
                  surname: inputSurnameRef.current.value,
                  business: inputBusinessRef.current.value
              };
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };

            try {
                const response = await fetch('/api/first-route', requestOptions);
                const result = await response.json();

                if (response.ok) {
                    alert("Email inviata con successo!");
                } else {
                    throw new Error(result.error || "Qualcosa è andato storto nell'invio dell'email");
                }
            } catch (error) {
                console.warn(error);
            }
        } else {
            alert("Compilare acconsento al trattamento dei dati personali");
        }
    };

    return (
        <>
            <Title title={'Contatti'} />
            <div className="md:flex bg-customWhite p-12 justify-center">
               
                <div className="w-full md:w-1/2 flex justify-centerl flex-col bg-customDarkGrey3 p-12">
                    <h3 className="text-customBlack font-extrabold text-center text-3xl mb-4">Richiesta informazioni</h3>
                    <p className="text-customBlack text-center mb-4">Per ricevere ulteriori informazioni contattaci sulla nostra pagina <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://www.linkedin.com/company/sirion-srl/'}> LinkedIn</Link></p>
                    <p className="text-customBlack font-extrabold">Indirizzo</p>
                    <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://maps.google.de/?q=Strada+Cascina+Cauda+5%2C+14100+Asti'}> 
                    <p className="text-customBlack">Strada Cascina Cauda 5 14100 Asti (AT)</p>
                    </Link>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Recapiti</p>
                    <p className="text-customBlack">Tel. (+39) 0141445625</p>
                    <p className="text-customBlack">Tel. (+39) 0141445511</p>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Email</p>
                    <p className="text-customBlack">info@sirionsrl.com</p>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Società</p>
                    <p className="text-customBlack">P.iva / CF 01731880058</p>
                    <p className="text-customBlack">C.C.I.A.A. n. 31006</p>
                    <p className="text-customBlack">Trib. Asti</p>
                    <p className="text-customBlack">Capitale Sociale € 1.250.000 i.v.</p>
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
        </>
    );
}
