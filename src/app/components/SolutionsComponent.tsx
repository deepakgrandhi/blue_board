"use client";

import Image from "next/image";
import React from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
      <div className="relative w-32 h-32 mb-4">
        <Image src={imageSrc} alt={title} layout="fill" />
      </div>
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const SolutionsComponent: React.FC = () => {
  const solutions = [
    {
      title: "AI/ML Solutions",
      description:
        "Transform data into actionable insights and applications with our AI/ML expertise.",
      imageSrc: "/services/ai.jpg",
    },
    {
      title: "Web Apps",
      description:
        "Custom web solutions to enhance your online presence and streamline operations.",
      imageSrc: "/services/webapps.jpg",
    },
    {
      title: "Mobile Apps",
      description:
        "Build native and cross-platform apps for iOS and Android, including utility and enterprise solutions.",
      imageSrc: "/services/mobileapps.jpg",
    },
    {
      title: "Cloud Services",
      description:
        "Secure cloud hosting, storage, and computing services to boost efficiency and scalability.",
      imageSrc: "/services/cloud.jpg",
    },
    {
      title: "Media Production",
      description:
        "Comprehensive media services including photography, videography, and editing.",
      imageSrc: "/services/mediaprod.jpg",
    },
    {
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user interfaces with our tailored UI/UX design services.",
      imageSrc: "/services/uiux.jpg",
    },
  ];

  return (
    <section
      className="container mx-auto px-5 md:px-16 py-12 sm:py-20"
      id="solutions"
    >
      <span className="service-name text-center">OUR SOLUTIONS</span>
      <h2 className="title text-center mb-10">Explore Our Services</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:gap-5 text-center mt-10 md:mt-10">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            title={solution.title}
            description={solution.description}
            imageSrc={solution.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default SolutionsComponent;
