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
                <p>Design, molding, and assembly of Lighting components for the Automotive sector</p>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/en" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Home</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/en/sustainability" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Sustainability</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/en/contact" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Contacts</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/en/whistleblowing" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Whistleblowing</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Activities</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/en/technology" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Technology</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/en/know-how" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Know-How</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <Link href="/en/products" className="hover:text-customWhite" style={{marginLeft: '3px'}}>Our products</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Contacts</h2>
              <p className="space-y-2">
                <strong>Address</strong><br></br>
                Strada Cascina Cauda 5 14100 Asti (AT)<br></br>
                <strong>Phone:</strong> (+39) 0141445625 <br></br>
                <strong>Phone:</strong> (+39) 0141445511 <br></br>
                <strong>Email:</strong> info@sirionsrl.com
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between py-7">
          <div className="mb-4 md:mb-0">
            <p>Sirion Srl - VAT / Tax Code 01731880058 </p>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row">
              <li className="mb-2 md:mb-0 md:mr-4">
                <Link target="_blank" href={'Privacy Sirion.pdf'}>Privacy Policy</Link>
              </li>
              <li className="md:mr-4">
                <Link target="_blank" href={'Codice Etico Sirion.pdf'}>Ethical Code</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
