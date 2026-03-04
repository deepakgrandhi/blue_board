import Image from "next/image";

interface WorkCardProps {
  num: string;
  title: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ num, title, description }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

const WorkComponent: React.FC = () => {
  return (
    <section
      id="works"
      className="w-full bg-purple-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center"
    >
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-rose-200">
            OUR APPROACH
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center">
            A focused path from idea to MVP
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard
              num="01"
              title="Define the critical path"
              description="We align on the core problem, success metrics, and the smallest version worth shipping."
            />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="Design for validation"
              description="We prototype flows, prioritize features, and plan the fastest route to user feedback."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            <WorkCard
              num="03"
              title="Build, ship, learn"
              description="We build the MVP with weekly demos, then iterate quickly using real user data."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <div className="relative">
            <WorkCard
              num="04"
              title="Scale-ready handoff"
              description="You get clean code, solid infrastructure, and a roadmap for the next stage of growth."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;
