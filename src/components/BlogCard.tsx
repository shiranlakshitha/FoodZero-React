import type { Blog } from "../assets/details"
import { FaArrowRight } from "react-icons/fa";
const BlogCard = ({title, description, img, userImg, userName, date, time, comments}: Blog) => {
  return (
    <div className="flex flex-col max-w-[500px] relative">
        <div className="max-w-[500px] w-full">
            <img src={img} className="w-full h-auto object-cover" alt={title} />
        </div>
        <div className="flex flex-col mt-[15px] px-[15px]">
            <div className="font-lato flex flex-row gap-3 items-center">
                <img src={userImg} className="w-[35px] rounded-full" alt={userName} />
                <p>&#8226;{userName}</p>
                <p>&#8226;{date}</p>
                <p>&#8226;{time}</p>
                <p>&#8226;{comments}</p>
            </div>
            <h3 className="font-rufina text-2xl mt-[15px] border-b-1 border-dotted">{title}</h3>
            <p className="font-lato mt-[10px]">{description}</p>
            <div className="font-lato flex flex-row gap-5 items-center mt-[15px]">
                <button>Read More</button>
                <FaArrowRight />
            </div>
        </div>
        <div className="absolute bg-[#5E6600] px-7 py-2.5 top-5 right-5">
            <p className="text-white font-semibold font-lato">Foods</p>
        </div>
    </div>
  )
}

export default BlogCard