import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const Navbar = () => {
  const LinksRef = useRef();
  const LinkUl = useRef();
  const btnMenu = useRef();

  const HandlingNavMenu = () => {
    // <ul> element
    LinkUl.current.classList.toggle("flex-col");
    LinkUl.current.classList.toggle("space-x-10");
    LinkUl.current.classList.toggle("space-y-5"); //
    btnMenu.current.classList.toggle("rotate-90");
    // parrent of <ul> element
    LinksRef.current.classList.toggle("hidden");
    LinksRef.current.classList.toggle("mt-10");
    // the parrent of <ul> element parrent
    LinksRef.current.parentElement.classList.toggle("flex-col"); 
 
 };

  return (
    <>
      <div className=" z-10 top-0 fixed flex justify-between sm:px-24 px-5 py-4 items-center align-middle text-texts  sm:flex-flow  bg-nav/70 w-full ">
        <div className="flex justify-between sm:w-2/4 w-full  ">
          <div className=""> <Image src="/logo.png" width={90} height={28}  alt='logo' /> </div>
          <button
          ref={btnMenu}
            onClick={HandlingNavMenu}
            className=" sm:hidden cursor-pointer  transition-all"
          >
            <Image alt="img-navbar" src={"/Ham.png"} width="20" height={"14"} />
          </button>
        </div>
        <div
          ref={LinksRef}
          className=" hidden sm:flex justify-center items-center "
        >
          <ul
            ref={LinkUl}
            className=" space-x-10 flex justify-center items-center text-lg font-normal "
          >
            <li className="hover:text-white/70" >
              <Link href="#home">Home </Link>
            </li>
            <li  className="hover:text-white/70" >
              <Link href="#work">work </Link>
            </li>
            <li className="hover:text-white/70">
              <Link href="#contact">contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
