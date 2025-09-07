import assets from "../assets/assets"
import Navbar from "../components/Navbar"


const Menu = () => {
  return (
    <>
      <div className="relative w-full  h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10">
          <img className="w-full h-full object-cover" src={assets.menucover} alt="" />
        </div>
        <div className="absolute inset-0 z-20 bg-black/50 "></div>
        <div className="px-[100px]  relative flex flex-col h-full items-start justify-center z-50">
          <h1 className="text-8xl max-w-[400px] text-white font-rufina">View our new menu</h1>
          <p className="mt-[15px] text-2xl text-white font-lato">The freshest ingredients for you every day</p>
        </div>
      </div>
      {/*first section*/}
      <div className="px-[50px]">
        
      </div>
    </>
  )
}

export default Menu