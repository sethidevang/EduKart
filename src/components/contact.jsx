import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Contact() {
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-purple-200 min-h-screen">
        <div className="flex-1 max-w-md">
          <img
            src="https://placehold.co/500x300"
            alt="Illustration of a person working"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="flex-1 max-w-md mt-10 md:mt-0">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            CONTACT US
          </h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-zinc-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-zinc-300 rounded-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full p-2 border border-zinc-300 rounded-md h-24"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white p-3 rounded-md hover:bg-purple-800 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
