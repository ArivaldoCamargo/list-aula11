import { useState } from "react";
import menu_icon from "../../assets/icons/menu-bar.png";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    const handleMouseLeave = () => {
        setIsOpen(false);
      };

    return (

        <nav className=" bg-primary h-[60px] text-white flex justify-between items-center">

            <h1 className="px-3">DigiWallet</h1>

            <ul className=" hidden gap-5 sm:flex pr-4">
                <li>Home</li>
                <li>Sobre</li>
            </ul>
           
            <img 
            onClick={() => setIsOpen(!isOpen)} 
            className=" pr-1 Flex sm:hidden" 
            src={menu_icon} 
            width={30} 
            height={30} />

           
            <ul className={`${isOpen ? "flex" : "hidden"
                    } "px-3 flex-col gap-2 absolute bg-primary w-full top-14 sidebar sm:hidden md:hidden lg:flex"`}
                    onMouseLeave={handleMouseLeave}
            >
                <li>Home</li> 
                <li>Sobre</li>
            </ul>

        </nav>

    );
};