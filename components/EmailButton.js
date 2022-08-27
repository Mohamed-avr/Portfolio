import Image from "next/image";
import Link from "next/link";

const ButtonEmail = () => {
  return (
    <>
      <button className="py-3 px-10 mt-8  rounded-sm text-white  bg-buttons space-x-2 ">
        <Image
          alt="image-email"
          width={18}
          height={15}
          src="/email.png"
          className="inline"
        />
         <h4 className="inline"> <Link href="mailto:mouh4945@gmail.com">email me </Link> </h4>
      </button>
    </>
  );
};

export default ButtonEmail;
