"use client";
import React, { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi"; // Importing Hamburger Icon
import Tabs from '@mui/material/Tabs';
import { CiShop } from "react-icons/ci";

import Tab from '@mui/material/Tab';
import { CiHeadphones } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [value, setValue] = useState();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-24 flex items-center justify-center sticky top-0 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } z-50`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2 lg:justify-start justify-center w-full lg:w-auto">
          <div className="absolute left-6 lg:hidden">

            <Sheet >
              <SheetTrigger asChild >
                <button className="text-black">
                  <GiHamburgerMenu size={16} />
                </button>
              </SheetTrigger>
              {/* <nav className="flex flex-col space-y-4 text-sm font-medium text-black">
                <a href="#" className="text-black">HOME</a>
                <a href="#" className="text-black">SHOP</a>
                <a href="#" className="text-black">BLOG</a>
                <a href="#" className="text-black">PAGES</a>
                <a href="#" className="text-black">ELEMENTS</a>
                <a href="#" className="text-black">BUY</a>
              </nav> */}
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <span className="text-2xl font-bold text-black">woodmart.</span>
        </div>
        <nav className="hidden lg:flex space-x-6 text-sm font-medium text-black">
          <a href="#" className="text-black">HOME</a>
          <a href="#" className="text-black">SHOP</a>
          <a href="#" className="text-black">BLOG</a>
          <a href="#" className="text-black">PAGES</a>
          <a href="#" className="text-black">ELEMENTS</a>
          <a href="#" className="text-black">BUY</a>
        </nav>
        <div className=" items-center flex space-x-6">
          <button className="text-black hidden lg:flex ">
            <IoSearch size={19} />
          </button>
          <button className="text-black relative hidden lg:flex">
            <MdOutlineCompareArrows size={21} />
          </button>
          <button className="text-black relative">
            <IoBagHandleOutline size={21} />
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 text-sm font-bold w-full h-20 lg:hidden bg-white">
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
          <Tab icon={<CiShop size={20} />} label="SHOP"  className="text-black font-bold text-base "  />
          <Tab icon={<CiHeart size={20} />} label="Wishlist" className="text-black font-bold text-base"/>
          <Tab icon={<CiUser size={20} />} label="Account" className="text-black font-bold text-base" />
          <Tab icon={<MdOutlineCompareArrows size={21} />} label="Compare" className="text-black font-bold text-base" />
        </Tabs>
      </div>
    </header>
  );
};

export default Header;
