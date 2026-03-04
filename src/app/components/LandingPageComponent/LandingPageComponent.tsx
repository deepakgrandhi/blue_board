"use client";
import { useState, useEffect } from "react";
import Button from "../Button";
import AnimatedText from "./AnimatedText";
import styles from "./LandingPageComponent.module.css";

const testimonials = [
  {
    quote:
      "We shipped a real MVP in weeks and started onboarding beta users immediately.",
    author: "Beta user",
    role: "Marketplace founder",
  },
  {
    quote:
      "The build was fast, but the architecture still feels clean and scalable.",
    author: "Beta user",
    role: "B2B SaaS founder",
  },
  {
    quote:
      "Tight scope, clear decisions, and a product we could test right away.",
    author: "Beta user",
    role: "Consumer app founder",
  },
];

const LandingPageComponent = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className={`relative flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-16 bg-white ${styles.landingPageContainer}`}
    >
      {/* Meaningful Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Concentric Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`${styles.concentricLine} ${styles.lineAnimation} absolute inset-0 border-opacity-30`}
          ></div>
          <div
            className={`${styles.concentricLine} ${styles.lineAnimation} absolute inset-0 w-3/4 h-3/4 border-opacity-20`}
          ></div>
          <div
            className={`${styles.concentricLine} ${styles.lineAnimation} absolute inset-0 w-1/2 h-1/2 border-opacity-10`}
          ></div>
        </div>
      </div>

      {/* Central Section */}
      <div className="relative flex flex-col items-center text-center space-y-6 z-10">
        <span className="text-sm md:text-base uppercase tracking-widest text-blue-600 font-semibold">
          MVP studio for early-stage founders
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight drop-shadow-xl">
          Build your <AnimatedText text="MVP" /> fast and ready to scale
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 lg:max-w-lg">
          We turn ideas into real products in weeks. Lean scope, rapid
          iteration, and modern architecture so you can validate with users now
          and scale later.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-8 space-x-4 relative">
          <div className="w-4 border-t border-gray-300"></div>{" "}
          <div className="w-3 h-3 m-2 bg-gray-300 rounded-full flex items-center justify-center shadow-md"></div>
          <div className="w-3 h-3 m-2 bg-gray-300 rounded-full flex items-center justify-center shadow-md"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg md:text-xl">🤝</span>{" "}
            </div>
            <div className="w-8 border-t border-gray-300 md:w-10"></div>{" "}
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg md:text-xl">💡</span>
            </div>
            <div className="w-8 border-t border-gray-300 md:w-10"></div>{" "}
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg md:text-xl">🔧</span>
            </div>
            <div className="w-8 border-t border-gray-300 md:w-10"></div>{" "}
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg md:text-xl">🚀</span>
            </div>
          </div>
          <div className="w-3 h-3 m-2 bg-gray-300 rounded-full flex items-center justify-center shadow-md"></div>
          <div className="w-3 h-3 m-2 bg-gray-300 rounded-full flex items-center justify-center shadow-md"></div>
          <div className="w-4 border-t border-gray-300"></div>{" "}
        </div>

        <Button type="button" title="Start your MVP" variant="btn_custom_blue" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 mt-12 z-10">
        {/* Product Proof Card */}
        <div className="w-full md:w-1/3 p-4 md:p-6 bg-transparent rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">
            Product Proof
          </h3>
          <p className="text-gray-600 text-center">
            Two products are fully built and ready to launch. Active beta users
            are already using them and shaping the roadmap.
          </p>
        </div>

        {/* Client Testimonials Card */}
        <div className="w-full md:w-1/3 p-4 md:p-6 bg-transparent rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 relative flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">
            Beta User Feedback
          </h3>
          <div className="relative w-full h-32 md:h-40 overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out ${
                    currentTestimonial === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-gray-700 italic mb-2 text-sm md:text-base">
                    {testimonial.quote}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    — {testimonial.author}, {testimonial.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Deliver Card */}
        <div className="w-full md:w-1/3 p-4 md:p-6 bg-transparent rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">
            What We Deliver
          </h3>
          <p className="text-gray-600 text-center">
            Fast MVP builds, clear product decisions, and scalable codebases
            that wont need a rewrite when you grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPageComponent;
