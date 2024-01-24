import React from "react";

const Hero = () => {
  return (
    <>
      <span className="flex w-full flex-col mt-80 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-black text-9xl font-bold max-w-[1399px] self-center max-md:max-w-full max-md:text-4xl">
          Lorem Ipsum is simply <br /> dummy text of the
          <br /> printing{" "}
        </div>
        <div className="bg-emerald-600 self-stretch mt-96 pb-12 px-12 rounded-[30px] max-md:max-w-80 max-md:mt-10 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
              <div className="z-[1] flex flex-col items-stretch mt-6 max-md:max-w-full max-md:mt-10">
                <span className="flex flex-col pl-5 items-start max-md:max-w-full">
                  <span className="flex items-center gap-2.5">
                    <div className="bg-amber-400 flex w-4 shrink-0 h-[47px] flex-col my-auto rounded-[30px]" />
                    <div className="text-black text-center text-5xl font-semibold self-stretch grow whitespace-nowrap max-md:text-4xl">
                      About US
                    </div>
                  </span>
                  <div className="text-white text-7xl font-extrabold self-stretch mt-28 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                    Lorem Ipsum is simply <br />
                    dummytextof the printing
                    <br /> and typesetting
                  </div>
                </span>
                <div className="bg-blue-600 flex w-[326px] shrink-0 max-w-full h-[91px] flex-col mt-48 rounded-[30px] self-start max-md:mt-10" />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col overflow-hidden relative flex min-h-[889px] mt-0 pr-16 pt-12 items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c672643a05bdcefc8c68b56cf7f09a7c9eb3176acdb155df76fb884e768efb4d?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e55f0e5ec94ca0cb1d66a3020167aff0f7a884cc9fe1ac25e66b27540cb1e6c?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                  className="aspect-[0.63] object-contain object-center w-full shadow-md overflow-hidden z-[1] mb-0 mt-48 max-md:max-w-full max-md:mt-10 max-md:mb-2.5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
          <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-10/12 max-md:w-full max-md:ml-0">
              <span className="bg-pink-950 flex grow flex-col w-full pl-12 py-12 rounded-[30px] items-end max-md:max-w-full max-md:mt-10 max-md:pl-5">
                <div className="text-white text-6xl font-extrabold mt-24 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
                  Web Development
                </div>
                <div className="text-white font-bold mt-24 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
                  Web development is the process of creating websites and web
                  applications for the internet. It encompasses a diverse set of
                  tasks, including front-end development that focuses on the
                  user interface and experience using HTML, CSS, and JavaScript,
                  back-end development involving server-side logic and database
                  management with languages like Node.js, Python, or PHP, and
                  full-stack development combining both aspects. Databases like
                  MySQL and MongoDB store and retrieve data, while servers and
                  web hosting services ensure accessibility.
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d700d404633e9ad6d1d9ae0172705475d7e3c54352916193c3edc96963266b3f?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                  className="aspect-[1.02] object-contain object-center w-[517px] overflow-hidden max-w-full mb-1.5"
                />
              </span>
            </div>
            <div className="flex flex-col items-stretch w-1/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="bg-violet-900 flex grow flex-col w-full pl-16 pr-20 py-12 rounded-[30px] items-start max-md:max-w-full max-md:mt-10 max-md:px-5  text-overflow: clip">
                <div className="text-white text-6xl font-extrabold mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                  App Development
                </div>
                <div className="text-white font-bold max-w-[526px] mt-28 mb-80 max-md:max-w-full max-md:text-4xl max-md:my-10">
                  Mobile apps are typically developed for specific operating
                  systems, such as iOS (Apple) and Android. Developers often use
                  languages like Swift or Objective-C for iOS and Java or Kotlin
                  for Android.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-1/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="bg-violet-900 flex grow flex-col w-full pl-16 pr-20 py-12 rounded-[30px] items-start max-md:max-w-full max-md:mt-10 max-md:px-5 text-overflow: clip">
                <div className="text-white text-6xl font-extrabold mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                  Graphic Design
                </div>
                <div className="text-white font-bold max-w-[526px] mt-28 mb-80 max-md:max-w-full max-md:text-4xl max-md:my-10 text-wrap">
                  Graphic designers work with visual elements such as images,
                  illustrations, icons, colors, and shapes to create a visually
                  cohesive and aesthetically pleasing design.
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[752px] mt-16 px-20 py-12 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4303de1043a771b6f9305a27f1ec9454333fc55c6cb17ed2071fdbb7997f929?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative text-white text-6xl font-extrabold ml-4 mt-12 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Lorem Ipsum
          </div>
          <div className="relative text-white text-5xl font-extrabold max-w-[528px] ml-4 mt-28 mb-40 max-md:max-w-full max-md:text-4xl max-md:my-10">
            Lorem Ipsum is simply <br />
            dummytextof the printing
            <br /> and typesetting
          </div>
        </div>
        <div className="text-black text-4xl font-bold self-stretch mt-80 max-md:max-w-full max-md:mt-10">
          Our Services
        </div>
        <div className="text-amber-400 text-8xl font-bold self-stretch mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          <span className="text-blue-600">Custom IT</span>{" "}
          <span className="text-cyan-900">Solutions for </span>
          <br />
          <span className="text-cyan-900">Your</span>
          <span className="text-amber-400"> Successful Business</span>
        </div>
        <div className="self-center flex w-full max-w-[1294px] items-stretch justify-between gap-5 mt-60 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex shrink-0 h-[81px] flex-col flex-1 rounded-[50%]" />
          <div className="flex shrink-0 h-[81px] flex-col flex-1 rounded-[50%]" />
          <div className="flex shrink-0 h-[81px] flex-col flex-1 rounded-[50%]" />
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-16 pr-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
          <span className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-black text-4xl font-extrabold">
              Lorem Ipsum
            </div>
            <div className="text-black text-opacity-50 text-2xl mt-11 max-md:mt-10">
              Lorem Ipsum is simply <br />
              dummytextof the printing
              <br /> and typesetting industry.
              <br />
              Lorem Ipsum has been <br />
              the industry's standard dummy
            </div>
          </span>{" "}
          <span className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-black text-4xl font-extrabold">
              Lorem Ipsum
            </div>{" "}
            <div className="text-black text-opacity-50 text-2xl mt-11 max-md:mt-10">
              Lorem Ipsum is simply <br />
              dummytextof the printing
              <br /> and typesetting industry.
              <br />
              Lorem Ipsum has been <br />
              the industry's standard dummy
            </div>
          </span>
          <span className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-black text-4xl font-extrabold">
              Lorem Ipsum
            </div>
            <div className="text-black text-opacity-50 text-2xl mt-11 max-md:mt-10">
              Lorem Ipsum is simply <br />
              dummytextof the printing
              <br /> and typesetting industry.
              <br />
              Lorem Ipsum has been <br />
              the industry's standard dummy
            </div>
          </span>
        </div>{" "}
        <span className="text-white text-xl font-extrabold whitespace-nowrap bg-blue-600 self-center w-[253px] max-w-full justify-center items-center mt-20 px-16 py-7 rounded-[30px] max-md:mt-10 max-md:px-5">
          MORE
        </span>
      </span>{" "}
      <div className="flex-col shadow-sm overflow-hidden relative flex min-h-[1005px] w-full justify-center items-center mt-48 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab989176492aa13a11a2e846f97b81ad87bddca5a312d4a27d1971b7efdd8?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />{" "}
        <span className="relative flex w-full max-w-[1400px] flex-col items-stretch mt-20 mb-10 max-md:max-w-full max-md:mt-10">
          <div className="text-white text-9xl font-bold max-md:max-w-full max-md:text-4xl">
            Lorem Ipsum is simply <br /> dummy text of the
            <br /> printing{" "}
          </div>{" "}
          <div className="text-white text-3xl font-bold self-center max-w-[638px] mt-32 max-md:max-w-full max-md:mt-10">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry.
          </div>{" "}
          <span className="text-white text-xl whitespace-nowrap bg-blue-600 self-center justify-center items-stretch ml-20 mt-20 pl-14 pr-16 py-7 rounded-[30px] max-md:mt-10 max-md:px-5">
            GET STARTED
          </span>
        </span>
      </div>{" "}
    </>
  );
};

export default Hero;
