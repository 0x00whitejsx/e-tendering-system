import React from "react";
import "./About.css";
import ConsIMG from "../assets/map.svg";
import ConsIMG2 from "../assets/float-together.svg";
import ConsIMG3 from "../assets/him.png";
import ConsIMG4 from "../assets/header-graphic.png";
import { TypeAnimation } from "react-type-animation";
import Navigation from "./navigation";

function Home() {
  return (
    <div className="w-full   ">
      <div className="w-full bg-blue-700 pb-10">
        <Navigation />
        <div className="flex md:flex-row flex-col justify-center items-center mt-10">
          <div className="w-1/2 flex flex-col justify-center items-center  align-middle p-5">
            <p className="text-white text-4xl mb-10">
              Adamawa State Beruie of of Public procurement E-tendering System{" "}
            </p>
            <p>e-tendering System</p>
            <p className="text-white w-5/6 items-center mt-5 mb-10">
              E-Tendering System, a revolutionary platform designed to redefine
              the landscape of procurement. More than just a digital solution,
              our system is a beacon of innovation and integrity, paving the way
              for a transparent, decentralized, and fair e-bidding process.
            </p>
            <div>
              <TypeAnimation
                sequence={[
                  "Transperency", // Types 'One'
                  800, // Waits 1s
                  "Security", // Deletes 'One' and types 'Two'
                  900, // Waits 2s
                  "Effiecency", // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "4em", display: "inline-block" }}
                className="text-green-700 font-mono"
              />
            </div>
            <div className="m-auto flex-col justify-around align-middle items-center mt-10 ">
              {/* <p className='w-5/6 text-gray-400 text-center m-5 mt-10 p-5'> 🔥</p> */}
              {/* <a
                className="p-5 text-sm  text-green-700 hover:text-green-900 border-2 border-green-200 mt-10 m-4"
                href="../assets/whitejsx.pdf "
              >
                {" "}
                [ Connect your wallet smart wallet ]
              </a> */}
              <a
                className="p-5 text-sm  text-green-700 hover:text-green-900 border-2 border-green-200 mt-10 m-4"
                href="#more"
              >
                {" "}
                [ Learn more ]
              </a>
            </div>
          </div>
          <div className="w-1/2 m-7 p-2">
            <img src={ConsIMG} className="hover:invert   mt-5 " />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center ml-10 mr-10 h-[80vh] "
        id="more"
      >
        <div className="w-1/2 m-7 p-2">
          <img src={ConsIMG2} className="h-[60%] w-[60%]   invert  mt-5" />
        </div>
        <div className="flex gap-4 justify-around align-middle items-center w-3/6">
          <div className="bg-black w-2 h-[40vh] backpattern m-5 rounded-lg">
            {" "}
          </div>
          <div className="flex flex-col ">
            <p className="text-4xl text-green-700">
              Decentralization: Empowering Every Participant
            </p>
            <p className="mt-10 justify-center align-middle tracking-wider leading-loose">
              Our E-Tendering System champions decentralization, ensuring that
              power is distributed across all participants. By leveraging
              advanced blockchain technology, we eliminate the need for a
              central authority, promoting a level playing field for all
              stakeholders. This decentralization fosters trust, accountability,
              and inclusivity, creating an ecosystem where every participant can
              actively engage and contribute.
            </p>
            <a
              className="p-5 w-2/6 text-sm bg-green-50 hover:bg-green-700 hover:text-white  text-green-800 border-2 border-green-400 rounded-lg mt-10 m-4"
              href="#more"
            >
              {" "}
              [ Journey with us ]
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex h-[25vh] backpattern bg-black justify-center pb-5">
        <div>
          <div className=" p-2 flex justify-between items-center text-green-200 ">
            <div>
              <h2 className="text-4xl align-center">
                Contract Award Announcement:
                <br /> Celebrating Partnership and Excellence
              </h2>
            </div>
            <img src={ConsIMG3} className="h-[30%] w-[30%]     mt-5" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center m-50 h-[80vh] ml-20"
        id="more"
      >
        <div className="flex gap-4 justify-around align-middle items-center w-3/6">
          <div className="flex flex-col ">
            <p className="text-4xl text-green-700">
              Fair E-Bidding: A Commitment to Integrity
            </p>
            <p className="mt-10 justify-center align-middle tracking-wider leading-loose">
              At the heart of our system lies an unwavering commitment to fair
              e-bidding. Gone are the days of opaque processes and biased
              decision-making. Through robust algorithms and stringent
              validation mechanisms, we guarantee a fair and impartial bidding
              environment. Our platform meticulously monitors and enforces
              adherence to ethical standards, creating an atmosphere where
              meritocracy prevails.
            </p>
            <a
              className="p-5 w-2/6 text-sm bg-green-50 hover:bg-green-700 hover:text-white  text-green-800 border-2 border-green-400 rounded-lg mt-10 m-4"
              href="#more"
            >
              {" "}
              [ Journey with us ]
            </a>
          </div>
          <div className="bg-black w-2 h-[40vh] backpattern m-5 rounded-lg">
            {" "}
          </div>
        </div>
        <div className="w-1/2 m-7 p-2">
          <img src={ConsIMG4} className="h-[60%] w-[60%] " />
        </div>
      </div>
    </div>
  );
}

export default Home;
