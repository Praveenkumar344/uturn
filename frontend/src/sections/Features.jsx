import useOnScreen from "../hooks/useOnScreen";

export default function Features() {
  const [ref, visible] = useOnScreen();
  return (
    <>
      <img className=" h-30 w-[100%] " src="/assets/bg-brush-grey-up.png" />
      <section id="features" ref={ref} className="w-[100%] bg-[#f1f1f1] py-16 md:py-4">
        <div className="mx-auto max-w-7xl ">
          <div className={`reveal ${visible ? "show" : ""}`}>
            <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 justify-around ">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <h6 className="font-extrabold text-5xl tracking-widest">
                    We Help
                  </h6>
                  <h6 className="font-extrabold text-5xl tracking-widest">
                    We Care
                  </h6>
                  <h6 className="italic font-serif text-4xl tracking-widest">
                    Because you matter.
                  </h6>
                </div>
                <img
                  className="rounded-full h-75 w-75 md:h-100 md:w-100 object-cover shadow-xl shadow-black/25 p-3 bg-white m-10"
                  src="assets/happy_women.jpg"
                />
                <div className=" mr-3 mb-4">
                  <p className=" font-castoro mb-2">"The greatest weapon against stress is our ability to choose one thought over another."<br /></p>
                      <p className="font-castoro italic text-right right-0 font-semibold text-md pr-5">— William James (Psychologist, philosopher)</p>
                </div>
               </div>
              <div className="bg-[#f4b46c] flex-col justify-center rounded-4xl">
                <p className="font-serif text-4xl text-bold mb-4 text-center mt-5">
                  WHY US
                </p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-3  ">
                  <div className="flex flex-col items-center justify-center bg-white m-2.5 p-5 py-7 mt-12 h-max rounded-2xl">
                    <img
                      className="h-30 w-30"
                      src="assets/icons/professionals.png"
                    />
                    <h3 className="font-weight: 600; font-serif text-2xl py-3">
                      It's Professional
                    </h3>
                    <p className="text-center text-sm">
                      All therapists are licensed, accredited professionals. All
                      you share is confidential.
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white m-2.5 p-5 py-7 h-max rounded-2xl">
                    <img
                      className="h-30 w-30"
                      src="assets/icons/professionals.png"
                    />
                    <h3 className="font-weight: 600; font-serif text-2xl py-3">
                      It's Affordable
                    </h3>
                    <p className="text-center">
                      Starting from €45, we have introduced a new 30 minute
                      Covid19 mental health check.
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white m-2.5 p-5 py-7 rounded-2xl mt-12">
                    <img
                      className="h-30 w-30"
                      src="assets/icons/professionals.png"
                    />
                    <h3 className="font-weight: 600; font-serif text-2xl py-3">
                      It's Effective
                    </h3>
                    <p className="text-center">
                      People found online therapy to as effective or more
                      effective than traditional therapy.
                    </p>
                  </div>
                  <div className="h-auto max-h-max upDown flex flex-col items-center justify-center bg-[#4FA2B8] m-2.5 p-5 py-9 rounded-2xl">
                    <h3 className="font-weight: 600; font-serif text-2xl  py-3 text-white">
                      Need More Info?
                    </h3>
                    <p className="text-center  text-white">
                      Talk to our Coordinator
                      <br />
                      Mon – Fri: 5am – 7pm
                      <br />
                      Saturday: 8am – 5pm
                      <br />
                    </p>
                    <button className="w-[80%] rounded-3xl my-4 bg-white p-2 relative overflow-hidden px-6 py-2 font-semibold hover:text-white text-[#4FA2B8] group">
                       <span className="relative z-10">Call Us</span>
                      <span className="absolute left-0 top-0 h-full w-0 bg-[#F7931E] transition-all duration-500 ease-out group-hover:w-full"></span>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className=" h-30 w-[100%] " src="/assets/bg-brush-grey-down.png" />
    </>
  );
}
