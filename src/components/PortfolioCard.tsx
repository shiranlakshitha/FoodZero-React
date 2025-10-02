import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ item }: { item: { name: string; meal: string; type: string; image: string } }) => {
  return (
    <div className="w-full text-white max-h-[600px] h-full overflow-hidden relative">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={item.image} alt="" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

      <div className="z-10 absolute bottom-[30px] w-full px-[25px] flex flex-row justify-between gap-5 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="font-rufina text-xl md:text-3xl">{item.name}</h3>
          <div className="flex flex-row gap-5 font-lato md:text-xl text-[12px]">
            <p>{item.meal}</p>
            <p className="cursor-pointer">&#x2022;{item.type}</p>
          </div>
        </div>
        <div><FaArrowRight /></div>
      </div>
    </div>
  )
}

export default PortfolioCard