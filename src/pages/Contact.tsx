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
    time: "Mon-Fri 10am-2pm"
},{
    id:2,
    day: "Lunch",
    time: "Mon-Fri 12pm-3pm"
},{
    id:3,
    day: "Dinner",
    time: "Mon-Thu 5pm-10pm"
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
          <div className="font-lato flex-1 flex-col max-w-[500px] flex items-end justify-end">
            <div className="flex border-b-1 border-dotted border-white flex-row justify-between w-full  gap-10 text-white">
                <p>Open time</p>
                <p>Sunday-Friday</p>
            </div>
            <div className="text-white font-lato mt-[15px] flex flex-row items-center gap-5">
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
    </>
  )
}

export default Contact