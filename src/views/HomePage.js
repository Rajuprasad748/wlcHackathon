import React from "react";
import Navbar from "../component/Navbar";
import { GiCow } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { ImBullhorn } from "react-icons/im";
import { GrUserWorker } from "react-icons/gr";
import collage from '../membersImg/collage.png'

const HomePage = () => {
  return (
    <div className="flex overflow-hidden w-screen h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <section className="text-black w-[81vw] bg-slate-300 body-font overflow-scroll h-screen p-16 flex flex-col gap-12 mb-10 scroll-smooth-no-scrollbar">
          <div className="w-full flex items-center justify-center flex-col gap-4 relative">
          <h1 className="text-5xl font-bold">WLC</h1>
            <h2 className="text-7xl font-bold flex items-center justify-center">
              <span>
                <GiCow className="text-7xl mx-2 text-gray-800" />
              </span>
              World of{" "}
              
              living critters{" "}
              <span>
              <GiCow className="text-7xl mx-2 text-gray-800" />
              </span>
            </h2>
          </div>
          <div className="font-normal text-lg">
            <p>
              At WLC, we are dedicated to creating a thriving ecosystem for
              animal owners, from cherished pets to essential livestock. Our
              platform is your one-stop solution for comprehensive animal care,
              offering expert advice from verified veterinarians with over 25
              years of experience. We bridge the gap between you and top-notch
              veterinary care, ensuring that even in the most remote areas, your
              animals receive the attention they deserve. Whether you're seeking
              the latest updates on emerging animal health concerns, nutritious
              food options, or a direct connection to medical professionals, WLC
              has you covered. Our three core offerings—Treatment, Awareness,
              and Buy/Sell—empower you to make informed decisions that keep your
              animals happy, healthy, and safe. Together, let's make the world a
              better place for all living creatures.
            </p>
          </div>
          <div>
            <img src={collage} alt="" className="" />
          </div>
          <div className="font-normal">
            <h2 className="text-5xl font-medium my-4 border-l-4 border-solid border-black px-4 inline-flex">
              What we do <span className="mx-4"> <GrUserWorker /></span>
            </h2>
            <p className="my-4 font-normal text-lg">
              At WLC, our mission is to provide comprehensive support to animal
              owners, ensuring that their beloved creatures receive the best
              possible care, no matter where they are. We've developed a
              platform that connects you with experienced veterinarians, keeps
              you informed about important developments in animal welfare, and
              makes it easy to access the products you need to keep your animals
              healthy. Here's how we do it:
            </p>
          </div>
          <div className="font-normal">
            <h2 className="text-5xl font-medium my-4 border-l-4 border-solid border-black px-4 inline-flex">
              Treatment <span className="mx-4"> <MdLocalHospital /></span>
            </h2>
            <p className="my-4 font-normal text-lg">
              Our Treatment section is designed to make veterinary care
              accessible and efficient. Users can upload a picture of their
              animal's ailment, and our team of verified doctors with over 25
              years of experience will provide a tailored prescription. To
              ensure accuracy, users will also complete a detailed
              questionnaire, available in both Hindi and English, which covers
              all possible symptoms and conditions. This process allows for a
              more accurate diagnosis and a better treatment plan, catering to
              the needs of a diverse audience, including those in rural areas
              who may have limited access to veterinary services.
            </p>
          </div>
          <div className="font-normal">
            <h2 className="text-5xl font-medium my-4 border-l-4 border-solid border-black px-4 inline-flex">
              Awareness <span className="mx-4"> <ImBullhorn /></span>
            </h2>
            <p className="my-4 font-normal text-lg">
              Staying informed is key to effective animal care, and our
              Awareness section is here to help. When users sign up for WLC,
              they'll receive timely notifications about the latest government
              schemes and programs aimed at animal and livestock welfare. From
              vaccination drives to new welfare initiatives, our social media
              channels and in-app notifications ensure you never miss an update.
              Just like popular e-commerce platforms, we keep you informed and
              engaged, so you can take proactive steps to protect and care for
              your animals.
            </p>
          </div>
          <div className="font-normal">
            <h2 className="text-5xl font-medium my-4 border-l-4 border-solid border-black px-4 inline-flex">
              Buy/sell <span className="mx-4"> <HiShoppingBag /></span>
            </h2>
            <p className="my-4 font-normal text-lg">
              Access to essential products is often a challenge in rural areas,
              where medical shops and pet supply stores may be scarce. Our
              Buy/Sell section is designed to bridge this gap by offering a
              curated selection of medicines, as prescribed by our doctors, and
              other necessary pet supplies. Whether you need specialized
              treatments or everyday pet care products, our platform ensures you
              can find what you need quickly and easily. By connecting you with
              trusted suppliers, we make sure that your animals receive the care
              they deserve, no matter where you are.
            </p>
          </div>
          <div className="flex flex-col p-4 bg-slate-200 text-left rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact a Doctor</h2>
      <div className="flex flex-col space-y-2">
        <p className="text-lg font-medium">Doctor's Name:</p>
        <p className="text-gray-700">Dr. John Doe</p>
        <p className="text-lg font-medium">Contact Number:</p>
        <p className="text-gray-700">+91 12345 67890</p>
        <p className="text-lg font-medium">Availability:</p>
        <p className="text-gray-700">Monday - Friday, 9 AM - 5 PM</p>
      </div>
    </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
