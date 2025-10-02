import assets from "../assets/assets"
import Footer from "../components/Footer";
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
        <div className="md:px-[100px] px-[25px] flex flex-col md:flex-row  h-full relative z-40 pointer-events-none">
          <div className="flex flex-col flex-1 max-md:mt-[100px] h-full items-start justify-center">
            <h1 className="md:text-8xl text-7xl w-full md:max-w-[600px] text-white font-rufina">Get in touch</h1>
            <p className="mt-[15px] text-2xl text-white font-lato">The freshest ingredients for you every day</p>
          </div>
          <div className="font-lato flex-1 flex-col max-w-[450px] flex items-end justify-end">
            <div className="flex border-b-1 border-dotted border-white flex-row justify-between w-full  gap-10 text-white">
                <p>Open time</p>
                <p>Sunday-Friday</p>
            </div>
            <div className="text-white w-full font-lato mt-[15px] flex flex-row  items-center justify-between">
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
      <div className="px-[50px] flex flex-col gap-7 py-[200px]">
        <div className="flex-1 flex flex-row max-md:flex-wrap gap-10 justify-between">
          <div className="max-w-[700px]">
            <img className="w-full h-auto object-cover" src={assets.mangoglasses} alt="" />
          </div>
          <div className="flex justify-center w-full mx-auto md:items-end mb-[50px]">
            <p className="text-2xl font-lato">
            We can be contacted via <br />
            email <span className="text-[#9CAA00] font-bold">info@foodzero.com</span> <br />
            or telephone on <span className="text-[#9CAA00] font-bold">+86 852 346 000</span>
          </p>
          </div>
        </div>
        <div className="pt-[150px] flex-1 flex flex-row-reverse max-md:flex-wrap gap-10 justify-between">
          <div className="max-w-[700px]">
            <img className="w-full h-auto object-cover" src={assets.nicehouse} alt="" />
          </div>
          <div className="flex flex-col justify-center mb-[50px]">
            <p className="font-rufina text-2xl">We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</p>
            <button className="mt-[50px] max-w-[200px] flex self-center mx-auto bg-none border-1 px-3 py-3">View in maps</button>
          </div>
        </div>
      </div>
      {/*fourth section*/}
      <div className="px-[50px] flex flex-col py-[100px] gap-5 bg-[#EBF0E4]">
        <div className="text-center flex justify-center items-center flex-col w-full mx-auto">
          <h1 className="font-rufina font-bold text-4xl sm:text-5xl md:text-7xl">Make <br /> a Reservation</h1>
          <p className="font-lato text-xl">Get in touch with restaurant</p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
            <div className="w-full px-[20px] py-[15px] border-1 focus:outline-none"><input className="w-full" type="text" placeholder="First Name" /></div>
            <div className="w-full px-[20px] py-[15px] border-1 focus:outline-none"><input className="w-full" type="text" placeholder="Last Name" /></div>
          </div>
          <div>
            <div className="w-full px-[20px] py-[15px] border-1 focus:outline-none"><input className="w-full" type="text" placeholder="Email" /></div>
          </div>
          <div>
            <div className="w-full px-[20px] py-[15px] border-1 focus:outline-none"><input className="w-full" type="text" placeholder="Phone" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
            <div className="w-full px-[20px] py-[15px] border-1 focus:outline-none"><input className="w-full" type="date" placeholder="Date" /></div>
            <div className="w-full px-[20px] py-[15px] border-1 focus:outline-none"><input className="w-full" type="time" placeholder="Time" /></div>
          </div>
          <div>
            <div>
              <select name="Person" id="person" className="border rounded p-3 w-full">
                    <option value="">Choose no of persons</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6+</option>
                </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto px-[30px] py-[15px] bg-[#5E6600]">
          <button>Book Now</button>
        </div>
      </div>         
      {/*fifth section*/}
      <Footer />
     

                
    </>
  )
}

export default Contact