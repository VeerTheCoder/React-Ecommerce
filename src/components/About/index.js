import React from "react";
import aecom from "../../assets/aboutecom.png";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="About Us"
            className="object-contain object-center h-full w-full"
            src={aecom}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-indigo-500 text-3xl title-font mb-10 font-mono font-bold">
                Welcome to E-Cart!
              </h2>
              <p className="leading-relaxed text-base font-serif">
                At E-Cart, we are passionate about bringing you the best
                shopping experience online. Our mission is to provide a wide
                selection of high-quality products at affordable prices, all
                while delivering exceptional customer service.
              </p>

              <h2 className="text-indigo-500 text-3xl title-font mt-10 mb-10 font-mono font-bold">
                Who We Are:
              </h2>

              <p className="leading-relaxed text-base font-serif">
                We are a dedicated team of online retail enthusiasts who
                understand the needs and desires of modern shoppers. Our team
                has a diverse background, combining expertise in technology,
                logistics, and customer support to create a seamless and
                enjoyable shopping journey for you.
              </p>

              <h2 className="text-indigo-500 text-3xl title-font mt-10 mb-10 font-mono font-bold ">
                Fast and Reliable Shipping:
              </h2>

              <p className="leading-relaxed text-base font-serif">
                We understand that waiting for your order can be tough, so we
                partner with reliable shipping companies to ensure your package
                reaches you swiftly and in perfect condition. We also offer
                tracking services so you can keep an eye on your delivery's
                progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
