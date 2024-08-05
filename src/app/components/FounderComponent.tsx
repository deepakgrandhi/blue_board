"use client";

import Image from "next/image";
import React from "react";

const FounderComponent: React.FC = () => {
  return (
    <section className="w-full  mx-auto py-12 sm:py-20" id="founder">
      <div className="flex flex-col md:flex-row items-center rounded-lg p-6 md:p-12">
        <div className="relative w-full md:w-1/3 mb-6 md:mb-0 flex items-center justify-center">
          <div className="w-72 h-72 overflow-hidden rounded-full">
            <Image
              src="/founder.jpg"
              width={300}
              height={300}
              alt="Founder"
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A Note from Our Founder
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hi, I’m Deepak Grandhi, the founder of Quant Sync. From the
            beginning, my goal has been to push the boundaries of innovation and
            deliver solutions that not only meet but exceed our clients’
            expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Quant Sync, we believe in blending advanced technology with a
            deep understanding of our clients&apos; needs. This approach ensures
            that we provide solutions that drive real, impactful results. Our
            commitment is to continuously explore new possibilities and deliver
            excellence in every project.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m excited about the future and the opportunities it holds. Thank
            you for joining us on this journey, and I look forward to achieving
            great things together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderComponent;
