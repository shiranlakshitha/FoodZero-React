import { FaArrowRight } from "react-icons/fa6";
import type { foodType } from "../pages/Home";

const TypesCard = ({img, type}: foodType) => {
  return (
    <div className="max-w-[350px] w-full relative group">
        <img src={img} className="w-full h-auto object-center group-hover:cursor-pointer transition duration-150 group-hover:shadow-sm group-hover:scale-105 group-hover:brightness-90" alt={type} />
        <div className="w-full flex flex-row items-center justify-between px-3 absolute top-3">
            <p className="font-rufina font-semibold text-3xl">{type}</p>
            <FaArrowRight />
        </div>
    </div>
  )
}

export default TypesCard