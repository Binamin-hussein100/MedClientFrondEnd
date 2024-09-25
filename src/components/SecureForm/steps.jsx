import  { useEffect, useState } from "react";

const Step = ({ number, title, active, userId }) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (active) setBg("bg-[#ffffff]");
    else setBg("");

  }, [active]);

  return (
    <div className="flex items-center gap-6  text-dark">
      <div
        className={`font-bold border p-4 ${bg} flex items-center justify-center w-10 h-10 rounded-full`}
      >
        {number}
      </div>
      <div className="hidden md:block md:w-full">
        <div className="font-regular text-[#40406b] text-[14px]">
          Step {number}
        </div>
        <div className="font-bold text-[15px]">{title}</div>
      </div>
    </div>
  );
};

export default Step;