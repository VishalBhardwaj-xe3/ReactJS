import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-shadow-2xs text-xl leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            possimus expedita veritatis quos iusto ipsam!
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full    ">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full">
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent