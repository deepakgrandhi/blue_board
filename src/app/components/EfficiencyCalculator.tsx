"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const EfficiencyCalculator = () => {
  const data = {
    labels: ["Our MVP Build", "Typical Agency", "In-house Hire", "Big Studio"],
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
      <h2 className="service-name text-center">Why Founders Choose Us</h2>
      <p className="title text-center">
        Lower burn, faster validation, and a codebase that can scale.
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
          <h3 className="text-rose-600 title">Built for speed without shortcuts</h3>
          <p className="text-lg">
            We keep scope tight and execution fast, while planning the
            architecture for growth. That means you can validate early without
            paying twice for a rewrite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EfficiencyCalculator;
