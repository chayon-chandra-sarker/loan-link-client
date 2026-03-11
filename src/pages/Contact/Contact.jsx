import React from "react";

const Contact = () => {
  return (
    <div>
      <div className=" min-h-screen">
        {/* Header */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl font-normal max-w-2xl mx-auto">
              Have questions or need help? We're here to support you anytime.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className=" p-6 rounded-xl shadow text-center border hover:border-red-500 hover:bg-red-50 hover:text-black  hover:shadow-xl hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-xl font-normal">chayon438.com</p>
            </div>

            <div className=" p-6 rounded-xl shadow text-center border hover:border-red-500 hover:bg-red-50 hover:text-black  hover:shadow-xl hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-xl font-normal">01779-188207</p>
            </div>

            <div className=" p-6 rounded-xl shadow text-center border hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105 hover:text-black  transition transform">
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-xl font-normal">Dhaka, Bangladesh</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className=" rounded-xl shadow p-8">
              <h2 className="text-4xl font-bold mb-6 text-center">
                Send Us a Message
              </h2>

              <form className="grid gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
