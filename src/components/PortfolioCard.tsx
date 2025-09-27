import assets from "../assets/assets"


const PortfolioCard = () => {
  return (
    <div>
      <div>
        <img src={assets.portfolio1} alt="" />
      </div>
      <div>
        <div>
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