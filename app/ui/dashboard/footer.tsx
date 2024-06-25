import Link from "next/link";
import ArrowRightIcon from "../icon/arrow-right";

const Footer = () => {
    return (
      <footer className="bg-customBlue text-customWhite p-20">
        <div className="container mx-auto py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Sirion</h2>
              <div className="space-y-2">
                <p>Progettazione, stampaggio e assemblaggio di componenti Lighting per il settore Automotive</p>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Società</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Home</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/sustainability" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Sostenibilità</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/contact" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Contatti</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/whistleblowing" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Whistleblowing</Link>
                </li>

                
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Attività</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/technology" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Tecnologia</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/know-how" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Know-How</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/products" className="hover:text-customWhite" style={{marginLeft: '3px'}}>I nostri prodotti</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1" >
              <h2 className="text-lg font-semibold mb-4">Contatti</h2>
                <p className="space-y-2">
                  <strong>Indirizzo</strong><br></br>
                  Strada Cascina Cauda 5 14100 Asti (AT)<br></br>
                  <strong>Telefono:</strong> (+39) 0141445625 <br></br>
                  <strong>Telefono:</strong> (+39) 0141445511 <br></br>
                  <strong>Email:</strong> info@sirionsrl.com
                </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-between py-7">
          <div>
            <div>
              <p>Sirion Srl - P.iva / C.F. 01731880058 </p>
            </div>
          </div>
          <div>
            <div>
              <ul className="container mx-auto flex">
                <li ><Link target="_blank" className="mr-4" href={'Sirion-informativa-privacy.pdf'}>Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;