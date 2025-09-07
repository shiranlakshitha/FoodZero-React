import assets from "../assets/assets"
import Navbar from "../components/Navbar"


const Menu = () => {
  return (
    <>
      <div className="relative w-full  h-screen">
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10">
          <img className="w-full h-full object-cover" src={assets.menucover} alt="" />
        </div>
        <div className="absolute inset-0 z-20 bg-black/50 "></div>
      </div>
      {/*first section*/}
      <div className="px-[50px]">
        
      </div>
    </>
  )
}

export default Menu