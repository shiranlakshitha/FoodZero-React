
import assets from '../assets/assets'
import Navbar from '../components/Navbar'

const Portfolio = () => {
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
        <div className="md:px-[100px] px-[25px]  relative flex flex-col h-full items-start justify-center z-50">
          <h1 className="md:text-8xl text-7xl w-full md:max-w-[400px] text-white font-rufina">View our new menu</h1>
          <p className="mt-[15px] text-2xl text-white font-lato">The freshest ingredients for you every day</p>
        </div>
      </div> 
    </>
  )
}

export default Portfolio