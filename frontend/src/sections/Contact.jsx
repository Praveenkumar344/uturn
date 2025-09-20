import { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);
    const onSubmit = (e) => {
      e.preventDefault();
      setSent(true);
    };

  return (
    <section
      id="contact"
      className="relative bg-[url('/assets/contact_bg.jpg')] bg-cover bg-center py-16 md:py-45 "
    >
      <div className="absolute inset-0 bg-primary/90" />
      <div className="relative mx-auto max-w-6xl px-4 text-white">
        <div className="text-center">
          <p className="uppercase">Contact Us</p>
          <h2 className="font-display text-4xl">Let’s Start Your Recovery</h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="rounded-xl bg-white/10 backdrop-blur flex flex-col justify-center items-center py-3"
          >
            <div className="grid gap-2 md:gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your Name"
                className="rounded-md border border-white/70 bg-transparent p-3 placeholder-white/70 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="rounded-md border border-white/70 bg-transparent p-3 placeholder-white/70 outline-none"
              />
              <input
                placeholder="Subject"
                className="sm:col-span-2 rounded-md border border-white/70 bg-transparent p-3 placeholder-white/70 outline-none"
              />
              <textarea
                rows="4"
                placeholder=" Write Your Query here ..."
                className="sm:col-span-2 rounded-md border border-white/70 bg-transparent p-3 placeholder-white/70 outline-none"
              />
            </div>
            <button className="mt-4 cursor-pointer rounded-full text-white bg-[#eb8b1d] px-6 py-3 font-semibold text-primary">
              Send Message
            </button>
            {sent && <p className="mt-3 text-md text-center text-white">Thanks! We’ll be in touch.</p>}
          </form>
          <div className="space-y-4">
            <div className="rounded-xl bg-white/10 p-6">
              <h4 className="mb-2 text-xl font-semibold">Call</h4>
              <p>+01 234 567 890</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <h4 className="mb-2 text-xl font-semibold">Email</h4>
              <p>hello@terapia.example</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6 items-center" >
              <h4 className="mb-2 text-xl font-semibold">Visit</h4>
              <p >Find a location near you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
