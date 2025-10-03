
import assets from '../assets/assets'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PortfolioCard from '../components/PortfolioCard'


const types: string[] = ['All', 'starters', 'lunch', 'dinner', 'drinks', 'sweets', 'fruits']

const items: {name: string, meal: string, type: string, image: string}[] =[
  {name: 'Premium Deep sea Snow White Cod Fillet', meal: 'Lunch' ,type: 'Dinner', image: assets.portfolio1},
  {name: 'Option Of Natural Vine Available', meal: 'Drinks', type: 'Fruits', image: assets.portfolio2},
  {name: 'Pumking Soup With Cream', meal: 'Starters', type: 'Sweets', image: assets.portfolio3},
  {name: 'Strip Steak With Rosemary Butter', meal: 'Dinner', type: 'Lunch', image: assets.portfolio4},
  {name: 'Braised Sliced Abalone Fish Maw With Premium Sea Food', meal: 'Dinner', type: 'Seafood', image: assets.portfolio5},
  {name: 'Pan Fried Live Prawn With Superior Soy Sauce', meal: 'Lunch', type: 'Starters', image: assets.portfolio6}

]

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
        <div className="md:px-[100px] px-[25px]  relative flex flex-col h-full items-start justify-center z-40 pointer-events-none">
          <h1 className="md:text-8xl text-7xl w-full text-center text-white font-rufina">Portfolio</h1>
        </div>
      </div>
      {/*second section*/}
      <div className='px-[50px] py-[100px]'>
          <div className='flex flex-row flex-wrap gap-10 md:gap-[60px] justify-center items-center mx-auto'>
            {
              types.map((item, index) => (
                <p className='font-lato md:text-2xl text-xl cursor-pointer' key={index}>{item}</p>
              ))
            }
          </div>
          <div className='mt-[50px]'>
            <div className='flex max-md:flex-wrap gap-5 items-stretch'>
              <div className='md:flex-3 max-md:h-[300px]'><PortfolioCard item={items[0]} /></div>
              <div className='flex-1 max-md:h-[300px]'><PortfolioCard  item={items[1]}/></div>
            </div>
            <div className='flex max-md:flex-wrap gap-5 mt-5 justify-center items-stretch'>
              <div className='flex-1 max-md:h-[300px]'><PortfolioCard item={items[2]}/></div>
              <div className='md:flex-3 max-md:h-[300px]'><PortfolioCard item={items[5]}/></div>
            </div>
            <div className='flex max-md:flex-wrap gap-5 mt-5 items-stretch'>
              <div className='md:flex-1 max-md:h-[300px]'><PortfolioCard item={items[4]}/></div>
              <div className='md:flex-1 max-md:h-[300px]'><PortfolioCard item={items[3]}/></div>
            </div>
          </div>
      </div>
      {/*third section*/}
      <Footer /> 
    </>
  )
}

export default Portfolio