import Image from "next/image";
import React from "react";

interface FeatureProductProps {
  imgSrc: string;
  title: string;
  desc: string;
}

const FeatureProduct: React.FC<FeatureProductProps> = ({
  imgSrc,
  title,
  desc,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <div className="w-48 h-48 relative mb-4">
        <Image src={imgSrc} layout="fill" objectFit="cover" alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{desc}</p>
    </div>
  );
};

const FeaturesComponent: React.FC = () => {
  return (
    <section className="container mx-auto px-8 md:px-16 md:py-10" id="features">
      <span className="service-name text-center block mb-2 text-gray-500">
        About Us
      </span>
      <h2 className="title text-center text-3xl font-bold mb-8">
        A product studio built for speed and scale
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        <FeatureProduct
          imgSrc="/features/dashboard.jpg"
          title="MVPs in weeks"
          desc="We focus on the critical path so you can validate fast without bloated scope."
        />
        <FeatureProduct
          imgSrc="/features/analytics.jpg"
          title="Cost-efficient builds"
          desc="Lean teams, smart decisions, and fast iterations keep your burn under control."
        />
        <FeatureProduct
          imgSrc="/features/uiUx.jpg"
          title="Founder collaboration"
          desc="You stay close to the build with weekly demos, shared priorities, and rapid feedback loops."
        />
        <FeatureProduct
          imgSrc="/features/cloudIn.jpg"
          title="Scalable foundations"
          desc="Modern architecture and clean code so your MVP can grow into a full product."
        />
      </div>
    </section>
  );
};

export default FeaturesComponent;
