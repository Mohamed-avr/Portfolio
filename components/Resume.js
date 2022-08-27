import Image from "next/image";
import Link from 'next/link'

const Resume = () => {
    return (<>
            <button className="py-3 px-10 mt-8  rounded-sm text-white  bg-buttons space-x-2 ">
         <h4 className="inline"> <a href='/resume.pdf' download='resume.pdf' > my resume</a> </h4>
      </button>
    </>  );
}
 
export default Resume;