import assets from "../assets/assets";
import HomeMenus from "../components/HomeMenus";
import { FaFishFins } from "react-icons/fa6";
import { FaCarrot } from "react-icons/fa6";
import { GiKiwiFruit } from "react-icons/gi";
import BlogCard from "../components/BlogCard";
import { blogs } from "../assets/details";
import Reservations from "../components/Reservations";

export interface menuItem {
  price: number;
  title: string;
  description: string;
}

const Home = () => {
  const menu: menuItem[] = [
    {
      price: 20,
      title: "Deep Sea Snow White Cod Fillet",
      description: "A delicate and flaky fish, perfect for a light meal.",
    },
    {
      price: 25,
      title: "Grilled Chicken Salad",
      description:
        "A healthy salad with grilled chicken, mixed greens, and a light vinaigrette.",
    },
    {
      price: 30,
      title: "Quinoa and Black Bean Bowl",
      description:
        "A protein-packed bowl with quinoa, black beans, and fresh vegetables.",
    },
    {
      price: 35,
      title: "Zucchini Noodles with Pesto",
      description:
        "A low-carb alternative to pasta, topped with fresh pesto and cherry tomatoes.",
    },
  ];

  const qualities = [{
    icon: <FaFishFins className="text-black text-3xl"/>,
    title: "Fresh Ingredients",
    description: "We use only the freshest ingredients in our meals."
  },{
    icon: <FaCarrot  className="text-black text-3xl"/>,
    title: "Nutritious Options",
    description: "Our menu features a variety of nutritious options to choose from."
  },{
    icon: <GiKiwiFruit className="text-black text-3xl"/>,
    title: "Vibrant Flavors",
    description: "Experience vibrant flavors with our carefully crafted dishes."
  }]
  return (
    <div className="">
      <div className="bg-[#233000] h-[1800px] px-[50px]">
        <div className="pt-[50px] relative w-full h-auto lg:h-[750px]">
          <div className="max-md:py-[50px] max-lg:text-center absolute top-0 left-0 max-w-[1000px] z-60 text-white">
            <h1 className="font-rufina max-lg:mt-[35px] text-[80px] max-sm:text-[60px] md:text-[100px] lg:text-[140px] leading-tight  ">
              Healthy Eating is important part of lifestyle
            </h1>
            <p className="mt-[25px] font-lato text-lg max-md:self-center w-full lg:max-w-[500px] ">
              Discover the benefits of a balanced diet and how it can improve
              your overall well-being.
            </p>
          </div>
          <div className="relative flex items-center lg:absolute bottom-0 right-0 h-[600px] w-full lg:w-[600px] z-10">
            <img
              src={assets.heroimg1}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          {/*overlay*/}
          <div className="absolute hidden max-lg:block mt-[50px] h-[600px] left-0 top-0 w-full lg:w-[600px] bg-black opacity-50 z-30"></div>
          <div className="absolute hidden lg:flex flex-row gap-[25px] z-30 bottom-[-50px] right-[350px]">
            <img src={assets.spices1} className="w-[150px]" alt="" />
            <img src={assets.spices2} className="w-[150px]" alt="" />
            <img src={assets.spices3} className="w-[150px]" alt="" />
          </div>
        </div>
        <div className=" py-[25px] lg:mt-[150px] flex gap-5  flex-row max-md:flex-col justify-around">
          <div className="flex flex-col items-start flex-2/3">
            <img
              src={assets.heroimg2}
              className="max-w-[600px] h-full w-full object-cover"
              alt=""
            />
            <h1 className="mt-[25px] text-white text-4xl">
              Start to plan your diet today
            </h1>
            <p className="mt-[15px] text-white">
              Take the first step towards a healthier you by creating a
              personalized meal plan.
            </p>
          </div>
          <div className="flex max-md:flex-col-reverse flex-col flex-1/3">
            <p className="text-white">
              Explore our wide range of healthy recipes and start your journey
              towards a balanced diet.
            </p>
            <img
              src={assets.heroimg3}
              className="max-w-[600px] h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*third section*/}
      <div className="px-[50px] pt-[150px] pb-[80px] h-auto relative">
        <div className="lg:block hidden absolute top-0 right-0 overflow-hidden w-[800px]">
          <img
            src={assets.branch}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="text-black w-full">
          <h1 className="text-5xl md:text-7xl font-rufina">Our Menu</h1>
          <p className="font-lato md:text-2xl">
            Check out our delicious and healthy meal options!
          </p>
        </div>
        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 md:gap-9 gap-6 mb-[50px] md:gap-y-[100px]">
          {menu.map((item, index) => (
            <HomeMenus
              key={index}
              price={item.price}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/*fourth section*/}
      <div className="flex flex-col h-auto lg:h-[710px] md:flex-row py-[100px] pt-[50px] px-[50px] bg-[#EBF0E4] gap-5 relative">
        <div className="flex-1">
          <img
            src={assets.chef}
            className="lg:hidden block object-cover w-full h-auto"
            alt=""
          />
          <div className="lg:block hidden w-[710px] h-full absolute bottom-[-29px] left-0">
            <img
              src={assets.chef}
              className="w-full h-auto object-center"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 items-center mx-auto mt-[25px] lg:ml-[100px] ">
          <h1 className="text-3xl md:text-7xl font-rufina lg:max-w-[200px] leading-25">
            Excellent Cook
          </h1>
          <p className="font-lato">
            Our chef is highly skilled in preparing delicious and healthy meals,
            combining years of culinary expertise with a passion for creating
            dishes that are both nutritious and flavorful. With a deep
            understanding of ingredients and techniques, our chef ensures that
            every meal is crafted to perfection, offering a delightful dining
            experience that promotes a healthy lifestyle.
          </p>
        </div>
      </div>
      {/*fifth section*/}
      <div className="px-[50px] py-[50px] md:py-[75px] grid-cols-1 md:grid-cols-3 gap-3 grid">
        {
          qualities.map((item, index) => (
            <div key={index} className="flex flex-col text-center justify-start  items-center">
          <div className="rounded-full bg-[#EBF0E4] w-[150px] h-[150px] flex flex-col items-center justify-center">
            {item.icon}
          </div>
          <div className="text-black mt-[25px]">
            <h2 className="text-2xl font-semibold font-rufina">{item.title}</h2>
            <p className="font-lato">{item.description}</p>
          </div>
        </div>
          ))
        }
      </div>
      {/*sixth section*/}
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 px-[50px] justify-items-center gap-5">
        {
          blogs.map((item, index) => (
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
          ))
        }
      </div>
      {/*seventh section*/}
      <Reservations />
    </div>
  );
};

export default Home;
