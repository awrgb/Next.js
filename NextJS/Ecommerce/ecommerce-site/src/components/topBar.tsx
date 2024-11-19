import { FaFacebookF, FaInstagram, FaWhatsappSquare, FaRegEnvelope } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";


export const TopBar = () => {
  return (
    <>
      <div className="px-5 sm:px-8 lg:px-16 flex  justify-center items-center text-xs sm:text-sm lg:text-base h-10 sm:h-12">
           <span className="text-center text-base">Welcome to our store</span>
      </div>
      <hr className="border-gray-200"/>
    </>
  );
};
