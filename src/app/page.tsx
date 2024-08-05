import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import FeaturesComponent from "./components/Features";
import EfficiencyCalculator from "./components/EfficiencyCalculator";
import QualityFeaturesComponent from "./components/QualityFeatures";
import CoreFeatures from "./components/CoreFeatures";
import WorkComponent from "./components/Work";
import LetsTalkComponent from "./components/LetsTalkComponent";
import SolutionsComponent from "./components/SolutionsComponent";
import FounderComponent from "./components/FounderComponent";

export default function Home() {
  return (
    <>
      <LandingPageComponent />
      <FeaturesComponent />
      <WorkComponent />
      <SolutionsComponent />
      <EfficiencyCalculator />
      {/* <QualityFeaturesComponent /> */}
      {/* <CoreFeatures /> */}
      <LetsTalkComponent />
      <FounderComponent />
    </>
  );
}
