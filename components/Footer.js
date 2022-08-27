import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="border-t-2 border-nav mt-14 py-6 text-texts  flex  justify-center sm:justify-between sm:px-20 items-center  flex-wrap">
        <h4 className=" sm:order-1 order-2 text-texts/30 sm:text-lg text-sm sm:mt-0  mt-10">
          made by
          <span className=" text-texts px-1 "> MOHAMED BOUKHANOUF </span> -
          Copyright 2022
        </h4>
        <div className="sm:order-2 order-1 sm:mt-0 mt-5 ">
          <ul className="flex justify-center flex-row items-center space-x-7  ">
            <li className="  cursor-pointer ">
              <Link href={"https://www.linkedin.com/in/mohamed-boukhanouf"}>
                <Image
                  src="/icons/Vector.png"
                  alt="image-featured"
                  width="24"
                  height="24"
                  className=" opacity-80 "
                />
              </Link>
            </li>{" "}
            <li className="  cursor-pointer ">
              <Link href={"behance.net/mohmdvrtl"}>
                <Image
                  src="/icons/Vector-1.png"
                  alt="image-featured"
                  width="30"
                  height="22"
                />
              </Link>
            </li>
            <li className="  cursor-pointer ">
              <Link href='tel:0673090142'>
                <Image
                  src="/icons/Group.png"
                  alt="image-featured"
                  width="24"
                  height="24"
                />
              </Link>
            </li>
            <li className="  cursor-pointer ">
              <Link href={"https://twitter.com/MohamedBoukhan5"}>
                <Image
                  src="/icons/Group-2.png"
                  alt="image-featured"
                  width="24"
                  height="20"
                />
              </Link>
            </li>
            <li className="  cursor-pointer ">
              <Link href={"https://github.com/Mohamed-avr"}>
                <Image
                  src="/icons/Group-0.png"
                  alt="image-featured"
                  width="33"
                  height="33"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
