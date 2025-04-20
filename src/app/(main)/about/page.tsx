import React from "react";
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      {/* Container */}
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight font-poppins">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed font-medium">
            The Yemeni Students Union in Karabuk is a student entity established
            on <span className="font-semibold text-red-600">February 28, 2016</span>, aiming to represent Yemeni students in Karabuk City,
            promote their interests, and defend their rights. 
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed font-medium">
            This union is a vital platform for communication and cooperation among
            Yemeni students in Karabuk. It strengthens cultural and social ties,
            while also offering valuable support across various fields.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center animate-fade-in">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuDy-D5cNhsGCdI_faWWXQ7Qpt8SxAhmehQ&s"
            alt="About Us"
            width={40}
            height={40}
            className="w-full max-w-md rounded-3xl shadow-xl border-4 border-white"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-20 max-w-4xl mx-auto px-4 animate-fade-in-up">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 to-black-700 text-white text-center p-6">
            <h3 className="text-3xl font-bold">Watch Our Story</h3>
          </div>
          {/* Video Embed */}
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-b-3xl"
              src="https://www.youtube.com/embed/PYm_yP-85u0"
              title="About Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Footer */}
          <div className="p-5 bg-gray-50 text-center">
            <p className="text-md text-gray-600">
              Discover our journey and how we are building a strong student community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
