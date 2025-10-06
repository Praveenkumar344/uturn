import React, { useState } from "react";
import GoogleMapEmbed from "../components/GoogleMapEmbed.jsx";
export default function Appointment() {
  const [sent, setSent] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="relative flex items-center justify-center bg-[url('/assets/hero_contact.jpg')] bg-cover relative h-[80vh] md:h-[90vh] overflow-hidden  text-white py-50  mb-4">
        <div className="relative z-10 max-w-7xl  flex-col items-center text-center">
          <h1 className="font-plus-jakarta mb-5 tracking-widest text-amber-500 items-center">
            CONTACT US
          </h1>
          <p className="font-castoro text-4xl md:text-6xl  mb-7">
            Question & <span className="italic">Feedback</span>
          </p>
          <p className="mx-3 md:max-w-3xl text-center">
            Take a look at our FAQ for some quick answers. If you still need
            assistance, please fill out the form below and we’d be happy to
            help!
          </p>
        </div>

        <img
          className="absolute bottom-0 z-10 "
          src="/assets/white_bottom.png"
        />
      </section>
      <section className=" flex items-center justify-center my-10">
        <form
          onSubmit={onSubmit}
          className="bg-[#4FA2B8] items-center p-5 rounded-xl max-w-2xl w-full mx-3"
        >
          <div className="flex flex-col md:flex-row ">
            <div className="mb-4 w-full ">
              <label className="block font-medium px-2 text-black">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="mt-2 block p-3 rounded-full h-10 w-[90%] bg-white  shadow-sm  "
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block  font-medium px-2 text-black">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="mt-2 block p-3 rounded-full h-10 w-[90%] bg-white  shadow-sm "
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block  font-medium px-2 text-black">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="mt-2 block p-3 w-[90%] rounded-full h-10 md:w-[45%] bg-white  shadow-sm "
            />
          </div>

          <div className="flex flex-col md:flex-row ">
            <div className="mb-4 w-full ">
              <label className="block font-medium px-2 text-black">
                Preferred day
              </label>
              <input
                type="date"
                name="date"
                className="mt-2 block p-3 rounded-full h-10 w-[90%] bg-white  shadow-sm "
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block  font-medium px-2 text-black">
                Preferred time
              </label>
              <input
                type="time"
                name="time"
                defaultValue="00:00"
                className="mt-2 block p-3 rounded-full h-10 w-[90%] bg-white  shadow-sm "
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block  font-medium px-2 text-black">
              Service
            </label>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full border bg-white rounded-full border-gray-300  px-3 py-2 text-gray-800 shadow-sm  focus:ring-2">
              <option value="">-- Select --</option>
              <option value="apple">Individual Therapy</option>
              <option value="banana">Couples Therapy</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block  font-medium px-1 text-black">
              Additional info
            </label>
            <textarea
              className="border-none mt-3 p-2 block w-full rounded-lg bg-white shadow-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              rows="7"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-full  rounded-full max-w-max p-7  bg-[#F7931E] py-2 text-black hover:bg-amber-600"
            >
              Send
            </button>
          </div>
          {sent && (
            <p className="mt-3 text-md text-center">
              Thanks! We’ll be in touch.
            </p>
          )}
        </form>
      </section>
      <section className="my-5 w-full">
        <img
          src="/assets/white_top.png"
          alt="Background "
          className="bg-[#f1f1f1]"
        />
        <p className="text-center  w-full bg-[#f1f1f1] text-[#F7931E] font-stretch-90% text-2xl tracking-widest">
          CONTACT INFO
        </p>
        <div className="bg-[#f1f1f1] text-black p-10 flex flex-col md:flex-row items-center justify-center">
          <div className="mr-10">
            <GoogleMapEmbed />
          </div>
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5 pb-5 border-b-2 border-gray-400">
            <div className="max-w-[250px]">
              <h3 className="text-sm   tracking-widest text-[#F7931E]">
                FIND US AT
              </h3>
              <h2 className="text-2xl tracking-wide font-serif ">
                Office Address
              </h2>
              <p>11940 Carolina Place Pkwy, Suite 200 Pineville, NC 28134</p>
            </div>
            
            <div className="max-w-[250px]">
              <h3 className="text-sm   tracking-widest text-[#F7931E]">
                BOOK US ON
              </h3>
              <h2 className="text-2xl tracking-wide font-serif ">
                Working Hours
              </h2>
              <p>
                Monday-Friday: 9AM - 7PM <br />
                Saturday: 9AM - 4PM 
              </p>
            </div>
            <div className="max-w-[250px]">
              <h3 className="text-sm   tracking-widest text-[#F7931E]">
                WRITE US AN
              </h3>
              <h2 className="text-2xl tracking-wide font-serif "> E-mail</h2>
              <p>abc@gmail.com</p>
            </div>
            <div className="max-w-[250px]">
              <h3 className="text-sm   tracking-widest text-[#F7931E]">
              CALL US ON
              </h3>
              <h2 className="text-2xl tracking-wide font-serif ">
                Phone
              </h2>
              <p>703 123 4854</p>
            </div>
          </div>
        </div>
        <img
          src="/assets/white_bottom.png"
          alt="Background "
          className="bg-[#f1f1f1]"
        />
      </section>
    </div>
  );
}
