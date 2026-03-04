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
      title: "MVP Build",
      description:
        "Design and engineering to launch a usable product in weeks, not months.",
      imageSrc: "/services/webapps.jpg",
    },
    {
      title: "Product Strategy",
      description:
        "Define scope, prioritize features, and set metrics that guide fast validation.",
      imageSrc: "/services/ai.jpg",
    },
    {
      title: "Design + UX",
      description:
        "Clear, modern interfaces that make the MVP feel trustworthy from day one.",
      imageSrc: "/services/uiux.jpg",
    },
    {
      title: "Engineering for Scale",
      description:
        "Clean architecture and reusable components that wont break as you grow.",
      imageSrc: "/services/cloud.jpg",
    },
    {
      title: "Launch + Iteration",
      description:
        "Ship, learn from users, and release improvements on a tight cadence.",
      imageSrc: "/services/mobileapps.jpg",
    },
    {
      title: "Infrastructure & DevOps",
      description:
        "Reliable environments, monitoring, and deployments built for real usage.",
      imageSrc: "/services/mediaprod.jpg",
    },
  ];

  return (
    <section
      className="container mx-auto px-5 md:px-16 py-12 sm:py-20"
      id="solutions"
    >
      <span className="service-name text-center">WHAT WE DO</span>
      <h2 className="title text-center mb-10">From idea to launch-ready MVP</h2>

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
