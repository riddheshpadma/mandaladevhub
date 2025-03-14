import Image from "next/image";

const ProcessSteps = () => {
  const steps = [
    {
      imgSrc: "/assets/illustrations/illustration1.svg",
      title: "Initiation & Planning",
      description: "Start strong with strategic planning for success.",
      step: 1,
    },
    {
      imgSrc: "/assets/illustrations/illustration2.svg",
      title: "Execution & Development",
      description: "Turning plans into impactful digital solutions.",
      step: 2,
    },
    {
      imgSrc: "/assets/illustrations/illustration3.svg",
      title: "Testing & Maintenance",
      description:
        "Ensuring quality with thorough testing and ongoing support.",
      step: 3,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-20">
      {steps.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <div className="relative w-full h-[200px]">
            <Image
              src={item.imgSrc}
              alt={`Illustration ${item.step}`}
              fill
              className="object-contain"
            />
          </div>
          <div className="relative flex items-center justify-center border-2 border-dashed border-black w-full mt-10">
            <div className="absolute py-4 px-6 rounded-full bg-[#cacf82]">
              {item.step}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 mt-6 text-center">
            <h1 className="text-xl md:text-xl font-bold text-[#181813]">
              {item.title}
            </h1>
            <p className=" text-gray-400 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
