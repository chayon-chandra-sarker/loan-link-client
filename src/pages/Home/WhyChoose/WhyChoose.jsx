import React from "react";

const WhyChoose = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl font-normal">
            Trusted loan service designed for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className=" p-6 rounded-2xl shadow text-center border border-transparent
                hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105 
                transition transform hover:text-black"
          >
            <h3 className="font-semibold text-lg">Fast Approval</h3>
            <p className="mt-2 text-sm ">
              Get loan approval within 24 hours.
            </p>
          </div>

          <div
            className=" p-6 rounded-2xl shadow text-center border border-transparent
                hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105
                transition transform hover:text-black"
          >
            <h3 className="font-semibold text-lg">Secure Process</h3>
            <p className="mt-2 text-sm ">
              Your data is fully protected & encrypted.
            </p>
          </div>

          <div
            className=" p-6 rounded-2xl shadow text-center border border-transparent
                hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105
                transition transform hover:text-black"
          >
            <h3 className="font-semibold text-lg">Low Interest</h3>
            <p className="mt-2 text-sm">
              Affordable interest rates for everyone.
            </p>
          </div>

          <div
            className=" p-6 rounded-2xl shadow text-center border border-transparent
                hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105
                transition transform hover:text-black"
          >
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="mt-2 text-sm ">
              Friendly support whenever you need help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
