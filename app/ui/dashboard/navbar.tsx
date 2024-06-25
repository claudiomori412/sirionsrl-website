"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArrowDownIcon from '../icon/arrow-down';
import Image from 'next/image';
import Logo from "./../../../img/default/sirion.png"
import IconHamburgerMenu from '../icon/hamburger';
import IconClose from '../icon/close';

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
const navbarClass = scrollY > 0 ? 'bg-customBlueRgb' : '';
    return (
      <>
<nav className={`fixed top-0 w-full z-10 transition-colors duration-300 bg-customLightGrey`}>
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
        <button onClick={toggleMenu} className="absolute top-4 left-4 text-customWhite hover:text-gray-300 focus:outline-none text-3xl">
            <IconClose></IconClose>
          </button>
          {/* Navbar links al centro orizzontalmente */}
          <div className="flex flex-col items-center justify-evenly flex-grow h-full">
              <Link href="/" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Home</Link>
              <Link href="/company" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Azienda</Link>
              <Link href="/know-how" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Know-How</Link>
              <Link href="/products" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">I nostri prodotti</Link>
              <Link href="/technology" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Tecnologia</Link>
              <Link href="/sustainability" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Sostenibilità</Link>
              <Link href="/contact" className="text-customWhite hover:text-gray-300 px-3 py-2 rounded-md text-xl font-medium">Contatti</Link>
          </div>
      </div>
    }
   
    </>
  );
};

export default Navbar;


