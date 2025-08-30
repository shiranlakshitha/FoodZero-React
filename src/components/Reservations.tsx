

const Reservations = () => {
  return (
    <div className="flex flex-col px-[50px] bg-[#EBF0E4] py-[100px] items-center mx-auto text-center">
        <div className="">
            <h1 className="text-6xl font-semibold font-rufina">Make a Reservation</h1>
            <p className="mt-[10px] font-lato">Get in touch with restaurant</p>
        </div>
        <div className="flex flex-row gap-[30px] py-[50px] min-w-[800px]">
            <div className="border-1 rounded-sm w-full">
                <input type="date" className="p-3" name="" id="" />
            </div>
            <div className="w-full">
                <select name="time" id="time" className="border rounded p-3 w-full">
                    <option value="">Choose a time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                </select>
            </div>
            <div className="w-full">
                <select name="guests" id="guests" className="border rounded p-3 w-full">
                    <option value="">Choose number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6+</option>
                </select>
            </div>
        </div>
        <div className="bg-black hover:bg-transparent hover:border-1 hover:border-black px-[35px] py-2">
            <button className="text-white hover:text-black font-rufina text-2xl  cursor-pointer">Book Now</button>
        </div>
    </div>
  )
}

export default Reservations