import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ButtonEmail from "../components/EmailButton";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="" id="home" >
      <Head>
        <title>Home </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --------------  Banner ---------------   */}
      <section className=" sm:py-5 sm:px-0 px-5  ">
        <div className="flex justify-between items-center sm:flex-row flex-col  sm:mt-3 sm:pt-30 pt-20 ">
          {/*  left*/}
          <div className=" sm:w-2/3 w-full sm:text-left  text-center  sm:order-1 order-2  ">
            <h2 className="text-texts sm:text-[50px] text-[30px]   sm:w-[30rem] w-full font-medium  ">
              {/* Hi, I am Mohamed A UIUX Designer based in Algeria. */}
              Hi, I am Mohamed A UIUX Designer And Frontede Dev
            </h2>
            <p className="text-lg text-pars sm:w-[24rem] w-full   mt-2 ">
              I help businesses and companies reach thier goals by designing
              user-centric digital products interactive & experiences
            </p>
            <Resume/>
          </div>
          {/* right */}
          <div className="sm:w-[15rem] w-[13rem]  overflow-hidden sm:h-[15rem] h-[13rem]  sm:mb-0 mb-6  border-0 sm:order-2 order-1 bg-slate-300 rounded-full ">
            <Image
              src="/me.jpg"
              width="300"
              height="450"
              alt="me"
              className="  grayscale  "
            />
          </div>
        </div>
      </section>
      {/* -------------- end of Banner ---------------   */}

      {/* -------------- Section one ---------------   */}
      <section id="work" className="mt-20 sm:py-5 sm:px-0 px-5 ">
        {/*  the button */}
        <div className="">
          <button className=" uppercase flex  text-pars ">
            {" "}
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAASElEQVRIiWNgGEzgPxSQooeJVo4ZtWDUglELRi0YtWDUApIs+P//fzl6TfYfAeqp4gpkS6huOA5LqGs4kiUN////b6CJ4eQCACw6S78AA1PbAAAAAElFTkSuQmCC"
              alt="image-featured"
              width="18"
              height="25"
            />{" "}
            <h3 className="uppercase ml-2 "> Featured work </h3>{" "}
          </button>
        </div>

        <article className="flex justify-between sm:flex-row flex-col mt-5  flex-wrap ">
          <div className=" overflow-hidden relative cursor-pointer my-2 sm:bg-none">
            <Image
              src="/one.jpg"
              className="bg-purple-400  bg-contain mb-0 py-0 "
              alt="image-featured"
              width="620"
              height="650"
            />
            <div className="bg-black/30  w-full text-texts/0  hover:text-texts sm:h-[650px]  h-[98.6%] absolute top-0 left-0 py-0 hover:bg-black/70  flex justify-center items-center text-4xl ">
              <h2 className="uppercase  hover:text-white ">
                <Link href="https://www.behance.net/gallery/127154533/foodly">
                  visit now
                </Link>
              </h2>
            </div>
          </div>

          <div className=" overflow-hidden relative cursor-pointer sm:mt-40 my-2  ">
            <Image
              src="/tow.jpg"
              className="bg-purple-400  bg-contain "
              alt="image-featured"
              width="610"
              height="650"
            />
            <div className="bg-black/30  w-full text-texts/0  hover:text-texts sm:h-[650px]  h-[98.6%] absolute top-0 left-0 py-0 hover:bg-black/70  flex justify-center items-center text-4xl ">
              <h2 className="uppercase  hover:text-white ">
                <Link href="https://www.behance.net/gallery/124569181/Agency-Landing-Page">
                  visit now
                </Link>
              </h2>
            </div>
          </div>
          <div className=" overflow-hidden relative cursor-pointer sm:-mt-36  my-2  ">
            <Image
              src="/three.jpg"
              className="bg-purple-400  bg-contain "
              alt="image-featured"
              width="610"
              height="650"
            />
            <div className="bg-black/30  w-full text-texts/0  hover:text-texts sm:h-[650px]  h-[98.6%] absolute top-0 left-0 py-0 hover:bg-black/70  flex justify-center items-center text-4xl ">
              <h2 className="uppercase  hover:text-white ">
                <Link href="https://www.behance.net/gallery/128595921/_">
                  visit now
                </Link>
              </h2>
            </div>
          </div>
          <div className=" overflow-hidden relative cursor-pointer sm:mt-2 my-2 h-auto p-0  ">
            <Image
              src="/four.jpg"
              className="bg-purple-400  bg-contain "
              alt="image-featured"
              width="610"
              height="650"
            />{" "}
            <div className="bg-black/30  w-full text-texts/0  hover:text-texts sm:h-[650px]  h-[98.6%] absolute top-0 left-0 py-0 hover:bg-black/70  flex justify-center items-center text-4xl ">
              <h2 className="uppercase  hover:text-white ">
                {" "}
                <Link href="https://www.behance.net/gallery/126187935/Agency-Hiring-people">
                  visit now
                </Link>
              </h2>
            </div>
          </div>
        </article>
      </section>
      {/* -------------- end of Section One ---------------   */}

      {/* -------------- Section Tow ---------------   */}
      <section className="mt-20 " >
        <div>
          <h2 className="text-2xl text-texts uppercase font-bold text-center ">
            skills
          </h2>
        </div>

        <div className="flex justify-center items-center flex-row flex-wrap mt-8  text-texts/75  uppercase ">
          <article className=" w-80 h-80 bg-nav text-center items-center justify-center flex text-3xl  hover:text-white m-2 hover:bg-body/60 hover:border-nav/50 hover:border-2  ">
            JS
          </article>
          <article className=" w-80 h-80 bg-nav text-center items-center justify-center flex text-3xl  hover:text-white m-2 hover:bg-body/60 hover:border-nav/50 hover:border-2  ">
            React js
          </article>
          <article className=" w-80 h-80 bg-nav text-center items-center justify-center flex text-3xl  hover:text-white m-2 hover:bg-body/60 hover:border-nav/50 hover:border-2  ">
            Next js
          </article>
          <article className=" w-80 h-80 bg-nav text-center items-center justify-center flex text-3xl  hover:text-white m-2 hover:bg-body/60 hover:border-nav/50 hover:border-2  ">
            Tailwind css
          </article>
          <article className=" w-80 h-80 bg-nav text-center items-center justify-center flex text-3xl  hover:text-white m-2 hover:bg-body/60 hover:border-nav/50 hover:border-2  ">
            uiux design
          </article>
          <article className=" w-80 h-80 bg-nav text-center items-center justify-center flex text-3xl  hover:text-white m-2 hover:bg-body/60 hover:border-nav/50 hover:border-2  ">
            github
          </article>
        </div>
      </section>
      {/* -------------- end of section tow ---------------   */}

      {/*  section three */}
      <section className="mt-20 " id="contact"  >
        <div className="flex justify-center flex-col items-center ">
          <h2 className="text-2xl text-texts uppercase  text-center font-bold ">
            contact me
          </h2>
          <p className="text-pars text-center font-medium text-lg sm:w-[400px] mt-4 px-4 ">
            if you are looking to hire a product designer , i am currently
            available for freelance work
          </p>

      <ButtonEmail/>
        </div>
      </section>
      {/*  end od section three */}
    </div>
  );
}
