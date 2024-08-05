"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const EfficiencyCalculator = () => {
  const data = {
    labels: ["Our Cost", "Competitor A", "Competitor B"],
    datasets: [
      {
        label: "Monthly Cost (in Lakhs)",
        data: [8, 16, 13, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="perks" className="container mx-auto px-8 py-16">
      <h2 className="service-name text-center">Why Choose Us?</h2>
      <p className="title text-center">
        Discover why our solutions are the most cost-effective options.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 p-6">
          <div style={{ height: "300px" }}>
            <Chart
              type="bar"
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    enabled: false,
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    ticks: {
                      callback: function (value) {
                        return value + " Lakhs";
                      },
                    },
                  },
                },
              }}
            />
            <p className="text-center text-sm mt-2 text-gray-600">
              (This is a sample graph with average project costs)
            </p>
          </div>
        </div>

        <div className="flex-1 py-1 text-center">
          <h3 className="text-rose-600 title">What Sets Us Unique?</h3>
          <p className="text-lg">
            Our solutions significantly reduces costs while enhancing
            operational efficiency. With advanced features tailored to your
            needs, our solutions offers unparalleled value and performance.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="/demo"
          className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default EfficiencyCalculator;
