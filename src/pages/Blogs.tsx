import assets from "../assets/assets"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { blogs } from "../assets/details"
import BlogCard from "../components/BlogCard"
import { motion } from "framer-motion"

const Blogs = () => {
  return (
    <>
        <div className="relative w-full  h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10">
          <img className="w-full h-full object-cover" src={assets.blogcover} alt="" />
        </div>
        <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none"></div>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        className="md:px-[100px] px-[25px]  relative flex flex-col h-full items-start justify-center z-40 pointer-events-none">
          <h1 className="md:text-8xl text-7xl w-full text-center text-white font-rufina">Blogs</h1>
          <p className="text-white font-lato text-center w-full mt-[25px]">It is easy way to create your beatiful blog for daily</p>
        </motion.div>
      </div>
      {/*second section*/}
      <div className="grid md:px-[50px] px-[25px] md:grid-cols-2 grid-cols-1 gap-[70px] justify-items-center py-[50px]">
        {blogs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
        <BlogCard
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            userImg={item.userImg}
            userName={item.userName}
            date={item.date}
            time={item.time}
            comments={item.comments}
          />
          </motion.div>
      ))}
      </div>
      {/*third section*/}
      <Footer />
    </>
  )
}

export default Blogs