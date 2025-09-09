import assets from "../assets/assets"
import Navbar from "../components/Navbar"

export interface openings {
    id: number,
    day: string,
    time: string
}

const openings: openings[] = [{
    id:1,
    day: "Brunch",
    time: "10am-2pm"
},{
    id:2,
    day: "Lunch",
    time: "12pm-3pm"
},{
    id:3,
    day: "Dinner",
    time: "5pm-10pm"
}];


const Contact = () => {
  return (
    <>
        <div className="relative pb-[35px] w-full  h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10">
          <img className="w-full h-full object-cover" src={assets.contactcover} alt="" />
        </div>
        <div className="absolute inset-0 z-20 bg-black/50 "></div>
        <div className="md:px-[100px] px-[25px] flex flex-row h-full relative  z-50">
          <div className="flex flex-col flex-1 h-full items-start justify-center">
            <h1 className="md:text-8xl text-7xl w-full md:max-w-[600px] text-white font-rufina">Get in touch</h1>
            <p className="mt-[15px] text-2xl text-white font-lato">The freshest ingredients for you every day</p>
          </div>
          <div className="font-lato flex-1 flex-col max-w-[450px] flex items-end justify-end">
            <div className="flex border-b-1 border-dotted border-white flex-row justify-between w-full  gap-10 text-white">
                <p>Open time</p>
                <p>Sunday-Friday</p>
            </div>
            <div className="text-white w-full font-lato mt-[15px] hidden md:flex flex-row items-center justify-between">
                {
                    openings.map((item) => (
                        <div key={item.id}>
                            <p>{item.day}</p>
                            <p>{item.time}</p>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
      {/*second section*/}
      <div className="px-[50px] py-[200px]">
        <div className="flex-1 flex flex-row gap-10 justify-between">
          <div className="max-w-[700px]">
            <img className="w-full h-auto object-cover" src={assets.mangoglasses} alt="" />
          </div>
          <div className="flex items-end mb-[50px]">
            <p className="text-2xl font-lato">
            We can be contacted via <br />
            email <span className="text-[#9CAA00] font-bold">info@foodzero.com</span> <br />
            or telephone on <span className="text-[#9CAA00] font-bold">+86 852 346 000</span>
          </p>
          </div>
        </div>
        <div className="flex-1 flex">
          
        </div>
      </div>
    </>
  )
}

export default Contact