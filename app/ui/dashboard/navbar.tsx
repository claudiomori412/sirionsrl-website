"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArrowDownIcon from '../icon/arrow-down';
import Image from 'next/image';
import Logo from "./../../../img/default/sirion.png"
import IconHamburgerMenu from '../icon/hamburger';
import IconClose from '../icon/close';
import { useRouter } from 'next/navigation';
import Flag  from "./../../../img/flag/en.png"

const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenKH, setIsOpenKH] = useState(false);
  const [isOpenProd, setIsOpenProd] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuKH = () => {
    setIsOpenKH(!isOpenKH);
  };

  const toggleMenuProd = () => {
    setIsOpenProd(!isOpenProd);
  };

  const toggleMenuContact = () => {
    setIsOpenContact(!isOpenContact);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Aggiungi un listener per lo scroll
    window.addEventListener('scroll', handleScroll);

    // Pulisci il listener quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const changeLanguage = (url:string, newLang:string) => {
    const urlParts = url.split('/');
    const currentLang = urlParts[3]; // Assuming the language code is always the second part of the URL
    if (urlParts[3] && urlParts[3].length === 2) { // Check if the part is a language code
      urlParts[3] = newLang; // Replace the current language code with the new language code
    } else {
      urlParts.splice(3, 0, newLang); // If no language code, add new language code
    }
    return urlParts.join('/');
  };

  const router = useRouter();
  
  const handleChangeLanguage = (newLang:string) => {
    console.warn("click",newLang)
    const currentUrl = window.location.href;
    const newUrl = changeLanguage(currentUrl, newLang);
    router.push(newUrl);
  };

  const navbarClass = scrollY > 0 ? 'bg-customBlueRgb' : '';
    return (
      <>
<nav className={`fixed top-0 w-full z-10 transition-colors duration-300 bg-customLightGrey ${navbarClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            {/* Your logo */}
            <Link href={'/'}>
            
                <Image src={Logo}  className="h-7 w-auto" alt="LOGO" data-no-retina="" ></Image>
          
            </Link>
          </div>
          {/* Navbar links */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative" onMouseEnter={toggleMenuProd} onMouseLeave={toggleMenuProd}>
                <button className="text-customBlack hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
                  Home
                  <ArrowDownIcon />
                </button>
                {isOpenProd && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100  shadow-lg">
                    <Link href="/" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Intro</Link>
                    <Link href="/company"  className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Azienda</Link>
                  </div>
                )}
              </div>
             
              <div className="relative" onMouseEnter={toggleMenuKH} onMouseLeave={toggleMenuKH}>
                <button className="text-customBlack  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
                  Prodotti
                  <ArrowDownIcon />
                </button>
                {isOpenKH && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100  shadow-lg">
                    <Link href="/know-how" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Know-How</Link>
                    <Link href="/products"  className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">I nostri prodotti</Link>
                  </div>
                )}
              </div>
              
              <Link href="/technology" className="text-customBlack  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Tecnologia</Link>
              
             
              <Link href="/sustainability" className="text-customBlack  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Sostenibilità</Link>
            

              <Link href="/contact" className="text-customBlack  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contatti</Link>

              <div  onClick={(e) => { e.preventDefault(); handleChangeLanguage('en'); }} className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer">
                  EN <Image
                     src={Flag}
                   alt="EN" data-no-retina="" className="ml-1 w-7 h-auto" />
                </div>
              
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-customBlack px-3 py-2 rounded-md text-3xl font-medium focus:outline-none">
              <IconHamburgerMenu></IconHamburgerMenu>
            </button>
          </div>
         
        </div>
      </div>
     
        
      
    </nav>
    {
      isOpen &&  <div className="fixed top-0 left-0 w-full h-full bg-customBlue z-50" onClick={toggleMenu}>
       <div className="flex justify-between items-center px-4 py-2 bg-customBlue">
        <button onClick={toggleMenu} className="text-customWhite hover:text-gray-300 focus:outline-none text-3xl">
          <IconClose />
        </button>
        <div onClick={(e) => { e.preventDefault(); handleChangeLanguage('en'); }} className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer">
          <Image 
             src={Flag} alt="EN" data-no-retina="" className="ml-1 w-7 h-auto" />
        </div>
      </div>

       
          {/* Navbar links al centro orizzontalmente */}
          <div className="flex flex-col items-center justify-evenly flex-grow h-full">
              <Link href="/" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Home</Link>
              <Link href="/company" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Azienda</Link>
              <Link href="/know-how" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Know-How</Link>
              <Link href="/products" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">I nostri prodotti</Link>
              <Link href="/technology" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Tecnologia</Link>
              <Link href="/sustainability" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Sostenibilità</Link>
              <Link href="/contact" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Contatti</Link>
              <div></div>
          </div>
      </div>
    }
   
    </>
  );
};

export default Navbar;


