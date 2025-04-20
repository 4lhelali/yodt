import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-white dark:from-gray-900 dark:via-black-800 dark:to-black-900 py-16 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4 font-poppins">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium max-w-2xl mx-auto">
           We'd&apos; love to hear from you! Reach out through any of our platforms below. 
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side (Cards) */}
        <div className="space-y-8">
          {/* Instagram Card */}
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Instagram</h3>
            </div>
            <p className="text-md text-gray-700 dark:text-gray-300 font-medium">
              Follow&apos; <span className="font-semibold">KarabukYodt</span> for event updates and more!
            </p>
            <a
              href="https://www.instagram.com/yod_karabuk/reels/"
              target="_blank"
              className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Visit Instagram Profile →
            </a>
          </div>

          {/* YouTube Card */}
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-red-600 p-3 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-semibold text-red-600">YouTube</h3>
            </div>
            <p className="text-md text-gray-700 dark:text-gray-300 font-medium">
              Subscribe&apos; to <span className="font-semibold">KarabukYodt</span> and stay connected!
            </p>
            <a
              href="https://www.youtube.com/@%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8%D8%A7%D9%84%D9%8A%D9%85%D9%86%D9%8A%D9%8A%D9%86%D9%83%D8%A7%D8%B1%D8%A7%D8%A8%D9%88%D9%83"
              target="_blank"
              className="mt-3 inline-block text-red-600 hover:underline font-medium"
            >
              Visit YouTube Channel →
            </a>
          </div>
        </div>

        {/* Right Side (Contact Info) */}
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02] space-y-6 text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h3>

          <div>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Email</h4>
            <a
              href="mailto:info@karabukyodt.com"
              className="text-lg text-gray-800 dark:text-gray-200 hover:underline font-medium"
            >
              info@karabukyodt.com
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Phone</h4>
            <a
              href="tel:+905555555554"
              className="text-lg text-gray-800 dark:text-gray-200 hover:underline font-medium"
            >
              +90 555 555 555 54
            </a>
          </div>

          <div className="pt-6">
            <p className="text-gray-600 dark:text-gray-400 font-medium">
                 We&apos;re available 7 days a week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
