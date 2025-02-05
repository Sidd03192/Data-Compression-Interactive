import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { Alert, Tooltip } from '@nextui-org/react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

import LogoCard from './logoCard';
import { useEffect, useState } from 'react';
export default function Nav(props) {


  const [isNotAtTop, setIsNotAtTop] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      setIsNotAtTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
 // remove after dismt
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className=" nav absolute top-0 left-0 w-full z-0" style={{ height: "4vh" }}></div>
      
      <Navbar isBordered={isNotAtTop}
        maxWidth='full'
        className=""
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: props.showAlert ? 'rgba(255, 0, 0, 0.03)' : 'transparent', // Apply light red highlight
          transition: 'background 0.3s ease-in-out', // Add transition for smooth background change
        }}
      >
        {/* Brand/logo on the left */}
        <NavbarBrand className="z-11">
          <Link className='w-full h-full' to="/">           <LogoCard />

          </Link>
        </NavbarBrand>
        
        

        {/* Navbar content aligned to the right */}
        <NavbarContent justify="flex-end" className="ml-auto">
          <NavbarItem>
            
            <Tooltip content="Compression Interactive">
              <Link to="/compressionInteractive"> <p style={{fontWeight: "bold"}}>Compression</p></Link>
            </Tooltip> 

          </NavbarItem>
          <NavbarItem>

            <Tooltip content="Home Page">
              <Link to="/"><p style={{fontWeight: "bold"}}>Home</p></Link>
            </Tooltip>

          </NavbarItem>
          <NavbarItem>
          <Button
            isIconOnly
            aria-label="Toggle Theme"
            color="warning"
              variant="faded"
              className='p-0'
              onPress={props.updateTheme}
            >
              {(props.theme) ? <FaMoon /> : <MdSunny />}
              
          </Button>

        </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
