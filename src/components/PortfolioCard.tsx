import assets from "../assets/assets"


const PortfolioCard = () => {
  return (
    <div className="w-full max-h-[600px] h-full overflow-hidden relative">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={assets.portfolio1} alt="" />
      </div>
      <div className="absolute bottom-5 w-full px-[25px] flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <h3>name</h3>
          <div>
            <p>lunch</p>
            <p>lunch</p>
          </div>
        </div>
        <div>arrow</div>
      </div>
    </div>
  )
}

export default PortfolioCard