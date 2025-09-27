
import assets from '../assets/assets'
import Navbar from '../components/Navbar'
import PortfolioCard from '../components/PortfolioCard'


const types: string[] = ['All', 'starters', 'lunch', 'dinner', 'drinks', 'sweets', 'fruits']

const Portfolio = () => {



  return (
    <>
       <div className="relative w-full  h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10">
          <img className="w-full h-full object-cover" src={assets.portfolio} alt="" />
        </div>
        <div className="absolute inset-0 z-20 bg-black/50 "></div>
        <div className="md:px-[100px] px-[25px]  relative flex flex-col h-full items-start justify-center z-50">
          <h1 className="md:text-8xl text-7xl w-full text-center text-white font-rufina">Portfolio</h1>
        </div>
      </div>
      {/*second section*/}
      <div className='px-[50px] py-[100px]'>
          <div className='flex flex-row gap-10 justify-center items-center mx-auto'>
            {
              types.map((item, index) => (
                <p className='font-lato' key={index}>{item}</p>
              ))
            }
          </div>
          <div className='mt-[50px]'>
            <div className='flex gap-5 items-stretch'>
              <div className='flex-3'><PortfolioCard /></div>
              <div className='flex-1'><PortfolioCard /></div>
            </div>
            <div></div>
            <div></div>
          </div>
      </div> 
    </>
  )
}

export default Portfolio