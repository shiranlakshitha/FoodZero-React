

const PortfolioCard = ({ item }: { item: { name: string; meal: string; type: string; image: string } }) => {
  return (
    <div className="w-full max-h-[600px] h-full overflow-hidden relative">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={item.image} alt="" />
      </div>
      <div className="absolute bottom-5 w-full px-[25px] flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <h3>{item.name}</h3>
          <div>
            <p>{item.meal}</p>
            <p>{item.type}</p>
          </div>
        </div>
        <div>arrow</div>
      </div>
    </div>
  )
}

export default PortfolioCard