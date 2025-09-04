import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-[50px] bg-[#233000] py-[75px] text-white">
        <div className="grid grid-cols-4 gap-5 border-b-1 border-dotted pb-[50px] border-white">
            <div>
                <h1 className="text-4xl font-bold font-rufina">Food Zero</h1>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-rufina">Contact</h1>
                <div className="flex flex-col gap-1 font-lato">
                    <p>+1+86 852 346 000</p>
                    <p>info@foodzero.com</p>
                </div>
                <div className="flex flex-col gap-1 font-lato">
                    <p>1959 Sepulveda Blvd.</p>
                    <p>Culver City, CA, 90230</p>
                </div>
            </div>
            <div className="col-span-2">
                <h1 className="text-2xl font-rufina">Never miss a recipe</h1>
                <div className="mt-[25px] flex flex-row gap-5 font-lato">
                    <input type="text" placeholder="Your Email" className="w-[350px] focus:outline-none px-4 py-5 border-1 border-white" />
                    <button className="px-[50px] py-2 bg-[#5E6600] hover:bg-[#9CAA00] transition-all duration-150 cursor-pointer">Subscribe</button>
                </div>
                <p className="mt-[15px]font-semibold font-lato">Stay updated with our latest news and offers</p>
            </div>
        </div>
        <div className="mt-[15px] flex justify-between items-center">
            <div>
               <p> © 2025 Zero Inc. All rights Reserved</p>
            </div>
            <div className="flex flex-row gap-3 items-center text-white">
                <FaInstagram />
                <FaTwitter />
                <FaFacebook />
                <FaYoutube />
            </div>
        </div>
    </div>
  )
}

export default Footer