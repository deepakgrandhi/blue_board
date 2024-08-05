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
        What Sets Us Apart
      </span>
      <h2 className="title text-center text-3xl font-bold mb-8">
        Explore the Benefits Designed for You
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        <FeatureProduct
          imgSrc="/features/dashboard.jpg"
          title="Instant Onboarding"
          desc="Get started quickly with our streamlined onboarding process designed for effortless setup and rapid deployment."
        />
        <FeatureProduct
          imgSrc="/features/analytics.jpg"
          title="Advanced Analytics"
          desc="Leverage powerful analytics tools to uncover trends and patterns, and make data-driven decisions with ease."
        />
        <FeatureProduct
          imgSrc="/features/uiUx.jpg"
          title="Rich UI"
          desc="Enhance user experience with our beautifully crafted UI designs that are intuitive, responsive, and aligned with your brand identity."
        />
        <FeatureProduct
          imgSrc="/features/cloudIn.jpg"
          title="Scalable Infrastructure"
          desc="Scale your operations effortlessly with our cloud-based solutions that adapt to your growing needs and ensure high availability."
        />
      </div>
    </section>
  );
};

export default FeaturesComponent;
