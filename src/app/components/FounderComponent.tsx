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
            Founder Experience
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Im Deepak Grandhi, founder of Quant Sync. I spent 6+ years
            freelancing and shipping products for clients across industries,
            often under tight timelines and budgets.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            That experience taught me what founders need most: speed, clarity,
            and a product that wont collapse when it grows. Thats why we
            build MVPs fast with scalable architecture from day one.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If youre serious about validating your idea in the market, were
            built to help you ship the right MVP and move quickly from feedback
            to traction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderComponent;
