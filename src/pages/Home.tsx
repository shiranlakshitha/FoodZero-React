import assets from "../assets/assets";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#233000] h-[2000px] px-[50px]">
        <div className="pt-[50px] relative w-full h-auto lg:h-[750px]">
          <div className="max-md:py-[50px] max-lg:text-center absolute top-0 left-0 max-w-[1000px] z-60 text-white">
            <h1 className="font-rufina max-lg:mt-[35px] text-[80px] max-sm:text-[60px] md:text-[100px] lg:text-[140px] leading-tight  ">Healthy Eating is important part of lifestyle</h1>
            <p className="mt-[25px] font-lato text-lg max-md:self-center w-full lg:max-w-[500px] ">Discover the benefits of a balanced diet and how it can improve your overall well-being.</p>
          </div>
          <div className="relative flex items-center lg:absolute bottom-0 right-0 h-[600px] w-full lg:w-[600px] z-10">
            <img src={assets.heroimg1} className="w-full h-full object-cover" alt="" />
          </div>
          {/*overlay*/}
          <div className="absolute hidden max-lg:block mt-[50px] h-[600px] left-0 top-0 w-full lg:w-[600px] bg-black opacity-50 z-30"></div>
          <div className="absolute hidden lg:flex flex-row gap-[25px] z-30 bottom-[-50px] right-[350px]">
            <img src={assets.spices1} className="w-[150px]" alt="" />
            <img src={assets.spices2} className="w-[150px]" alt="" />
            <img src={assets.spices3} className="w-[150px]" alt="" />
          </div>
        </div>
        <div className=" py-[25px] lg:mt-[150px] flex flex-row justify-around">
          <div className="flex flex-col items-start flex-2/3">
            <img src={assets.heroimg2} className="max-w-[600px] h-full w-full object-cover" alt="" />
            <h1 className="mt-[25px] text-white text-4xl">Start to plan your diet today</h1>
            <p className="mt-[15px] text-white">Take the first step towards a healthier you by creating a personalized meal plan.</p>
          </div>
          <div className="flex flex-col flex-1/3">
            <p className="mt-[15px] text-white">Explore our wide range of healthy recipes and start your journey towards a balanced diet.</p>
            <img src={assets.heroimg3} className="max-w-[600px] h-full w-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
