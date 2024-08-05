import Image from "next/image";
import Button from "../Button";
import AnimatedText from "./AnimatedText";
import styles from "./LandingPageComponent.module.css";

const LandingPageComponent = () => {
  return (
    <section
      className={`max-container padding-container flex flex-col gap-20 py-10 pb-10 md:gap-10 lg:py-20 xl:flex-row ${styles.animatedSection}`}
    >
      <div className="hero-map" />

      <div
        className={`relative z-20 flex flex-1 flex-col xl:w-1/2 ${styles.animatedContent}`}
      >
        <Image
          src="/rocket.svg"
          alt="camp"
          width={50}
          height={50}
          className={`absolute top-[-40px] w-10 lg:w-[30px] ${styles.animatedImage}`}
        />
        <h1 className="bold-52 lg:bold-80">
          Bringing <AnimatedText text="Visions" /> to Reality
        </h1>
        <p className="regular-20 mt-4 text-gray-30 xl:max-w-[520px]">
          Unleash the full potential of your brand with our custom UI designs.
          At <b>Quant Sync</b>, we turn your ideas into visually captivating and
          user-friendly digital experiences.
        </p>

        <div className="my-10 flex flex-wrap items-center gap-5">
          <Image src="/graph.svg" alt="Grow with us" width={30} height={30} />

          <p>
            <span className="regular-16 lg:bold-20 ml-1">
              Elevate Your Brand to Success
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Get in touch"
            variant="btn_custom_blue"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/briefcase.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPageComponent;
