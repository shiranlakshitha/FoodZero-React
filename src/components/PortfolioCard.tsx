import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ item }: { item: { name: string; meal: string; type: string; image: string } }) => {
  return (
    <div className="w-full max-h-[600px] h-full overflow-hidden relative">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={item.image} alt="" />
      </div>
      <div className="absolute bottom-5 w-full px-[25px] flex flex-row justify-between gap-5 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="font-rufina text-xl">{item.name}</h3>
          <div className="flex flex-row gap-5 font-lato text-[12px]">
            <p>{item.meal}</p>
            <p>&#x2022;{item.type}</p>
          </div>
        </div>
        <div><FaArrowRight /></div>
      </div>
    </div>
  )
}

export default PortfolioCard