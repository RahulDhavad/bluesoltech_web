import React from "react";

const About = () => {
  return (
    <>
      <div className="flex justify-center align-center">
        <div className="w-4/5">
          <div className="flex max-md:max-w-full h-60 margin-auto justify-center items-center">
            <h1 className="text-wrap font-bold text-8xl">About Us</h1>
          </div>
          <div className="flex max-md:max-w-full h-20 margin-auto justify-around items-center flex-col">
            <h3 className="text-wrap font-bold text-4xl">About Us</h3>
            <p className="text-base text-gray-600 tracking-widest">
              Change the way the best IT Solution
            </p>
          </div>
          <div className="grid grid-rows-1 grid-cols-2 gap-2 my-20">
            <div>
              <img
                src="../../public/Assets/About.jpg"
                alt=""
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div className="mx-8 flex items-center justify-center flex-col">
              <p className="text-base my-2.5">
                Once a new technology rolls over you, if you're not part of the
                steamroller, you're part of the road.
              </p>
              <p className="text-base my-2.5">
                With a team of highly skilled engineers adept in the latest
                software standards, we leverage our extensive knowledge to
                provide tailored solutions that meet client needs, expectations,
                and budgets. By prioritizing client satisfaction, we are proud
                to maintain support for our first business client. Our
                commitment to excellence and attention to detail ensures we
                exceed expectations, while our adaptability and expertise drive
                success for both new and longstanding clients.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-20 my-60 lg:w-full">
            <div className="flex flex-col w-3/4">
              <h3 className="text-center font-bold text-4xl mb-6">
                Why Choose Us?
              </h3>
              <ul className="list-disc">
                <li className="text-sm my-1.5">
                  In the dynamic and ever-evolving landscape of the IT sector,
                  choosing the right agent is paramount to success, and here's
                  why you should choose us. Our commitment to innovation sets us
                  apart, as we continuously embrace cutting-edge technologies to
                  ensure your business stays ahead of the curve.
                </li>
                <li className="text-sm my-1.5">
                  With a team of highly skilled professionals, we bring a wealth
                  of expertise and experience to the table, capable of
                  delivering customized solutions tailored to meet your specific
                  needs. We pride ourselves on our agility, adapting swiftly to
                  market changes and client requirements, ensuring seamless
                  integration and scalability for your IT infrastructure.
                </li>
                <li className="text-sm my-1.5">
                  Our dedication to security is unwavering, employing robust
                  measures to safeguard your data and intellectual property.
                  Client satisfaction is at the core of our values, and we
                  prioritize clear communication, transparency, and
                  collaboration throughout every project.
                </li>
                <li className="text-sm my-1.5">
                  Choosing us means choosing a partner vested in your success,
                  committed to driving innovation, and dedicated to providing
                  unparalleled service in the dynamic realm of IT.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-28">
            <div className="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-16">
              <div className="rounded-lg p-5 bg-gray-300 relative">
                <h5 className="m-0.5 font-bold">Award Winning</h5>
                <p className="">
                  In a remarkable display of innovation and excellence, Blue
                  Soltech LLP in the IT industry has secured a prestigious award
                  for its outstanding performance.
                </p>
              </div>
              <div className="rounded-lg p-5 bg-gray-300">
                <h5 className="m-0.5 font-bold">Professional Staff</h5>
                <p className="">
                  The professional staff in our company exemplifies a
                  commendable blend of expertise, adaptability, and dedication.
                </p>
              </div>
              <div className="rounded-lg p-5 bg-gray-300">
                <h5 className="m-0.5 font-bold">Web Developing</h5>
                <p className="">
                  Our team of skilled developers leverages the latest industry
                  trends and technologies to craft bespoke websites tailored to
                  meet the unique needs of our clients.
                </p>
              </div>
              <div className="rounded-lg p-5 bg-gray-300">
                <h5 className="m-0.5 font-bold">24*7 Support</h5>
                <p className="">
                  Trust our company to be your constant support, ensuring your
                  IT operations remain resilient and responsive, day or night.
                </p>
              </div>
            </div>
          </div>
          {/* ========================== Goal =============================== */}
          <div>
            <div className="grid grid-rows-1 grid-cols-2 gap-2">
              <img
                src="../../public/Assets/Mission.png"
                alt=""
                className="w-full h-auto rounded-3xl border-5"
              />
              <div className="mx-8 flex justify-center items-start flex-col">
                <h3 className="text-wrap font-bold text-4xl my-2">
                  Our Mission
                </h3>
                <h3 className="text-big font-normal text-3xl">
                  We take pride in preserving the highly valued services.
                </h3>
                <p className="text-base my-2">
                  At Blue Soltech, we always strive to build a better business
                  atmosphere through giving out excellent deliveries. The sole
                  of our mission lies in creating amazing, powerful and premium
                  quality products to serve you better.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 gap-2 my-24">
              <div className="mx-8 flex justify-center items-start flex-col">
                <h3 className="text-wrap font-bold text-4xl my-2">
                  Our Vision
                </h3>
                <h3 className="text-big font-normal text-3xl">
                  Pioneering Technological Frontiers
                </h3>
                <p className="text-base my-2">
                  We see ourselves at the forefront of technological
                  advancements, leading the charge in developing solutions that
                  not only meet the needs of today but anticipate the challenges
                  and opportunities of tomorrow. Our relentless pursuit of
                  innovation ensures that we remain the go-to partner for
                  cutting-edge solutions.
                </p>
              </div>
              <img
                src="../../public/Assets/Vision.jpg"
                alt=""
                className="w-full h-auto rounded-3xl border-5"
              />
            </div>
            <div className="grid grid-rows-1 grid-cols-2 gap-2 my-24">
              <img
                src="../../public/Assets/History.jpg"
                alt=""
                className="w-full h-auto rounded-3xl border-5"
              />
              <div className="mx-8 flex justify-center items-start flex-col">
                <h3 className="text-wrap font-bold text-4xl my-2">
                  Our History
                </h3>
                <h3 className="text-big font-normal text-3xl">
                  Building Tomorrow: The Legacy of Blue Soltech
                </h3>
                <p className="text-base my-2">
                  We see ourselves at the forefront of technological
                  advancements, leading the charge in developing solutions that
                  not only meet the needs of today but anticipate the challenges
                  and opportunities of tomorrow. Our relentless pursuit of
                  innovation ensures that we remain the go-to partner for
                  cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 gap-2 my-24">
              <div className="mx-8 my-1 flex justify-center items-start flex-col">
                <h3 className="text-wrap font-bold text-4xl my-2">Our Goal</h3>
                <h3 className="text-big font-normal text-3xl">
                  Empowering Progress: Unveiling Our Strategic Goals as a Leader
                </h3>
                <p className="text-base my-2">
                  In the dynamic realm of the IT sector, our overarching goal is
                  to redefine excellence through a strategic and visionary
                  approach. At the core of our mission lies a commitment to
                  innovation, anticipating and adapting to the evolving
                  technological landscape. We aim to position ourselves as
                  pioneers, driving progress and setting new standards in the
                  industry.
                </p>
              </div>
              <img
                src="../../public/Assets/Goal.jpg"
                alt=""
                className="w-full h-auto rounded-3xl border-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
