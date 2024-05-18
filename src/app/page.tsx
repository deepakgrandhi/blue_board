import LandingPageComponent from "./components/LandingPageComponent";
import FeaturesComponent from "./components/Features";
import ServicesComponent from "./components/Services";
import QualityFeaturesComponent from "./components/QualityFeatures";
import CoreFeatures from "./components/CoreFeatures";
import WorkComponent from "./components/Work";

export default function Home() {
  return (
    <>
      <LandingPageComponent />
      <FeaturesComponent />
      <ServicesComponent />
      <QualityFeaturesComponent />
      <CoreFeatures />
      <WorkComponent />
    </>
  );
}
