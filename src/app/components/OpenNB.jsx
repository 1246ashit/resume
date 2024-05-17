import { FaAngleDoubleDown } from "react-icons/fa";

export default function OpenNB({showCard}) {
  return (
    <div
          className={`text-white font-medium absolute z-10 top-3/4 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 w-44 h-15 pt-2 pb-2 bg-black rounded-lg flex flex-col items-center justify-center 
        transition-opacity duration-1000 ${
          !showCard ? "opacity-60" : "opacity-0"
        }`}
        >
          <h2 className="text-lg font-semibold">滾動打開電腦...</h2>
          <FaAngleDoubleDown size={30} className="animate-bounceSmall " />
        </div>
  )
}
