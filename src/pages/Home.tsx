import assets from "../assets/assets";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#233000] h-[2000px] px-[50px]">
        <div className="pt-[50px] relative w-full h-[750px]">
          <div className="absolute top-0 left-0 max-w-[1000px] z-60 text-white">
            <h1 className="font-rufina max-lg:mt-[35px] text-[60px] md:text-[100px] lg:text-[140px] leading-tight  ">Healthy Eating is important part of lifestyle</h1>
            <p className="mt-[25px] font-lato text-lg max-w-[500px] ">Discover the benefits of a balanced diet and how it can improve your overall well-being.</p>
          </div>
          <div className="relative flex items-center lg:absolute bottom-0 right-0 h-[600px] w-full lg:w-[600px] z-10">
            <img src={assets.heroimg1} className="w-full h-full object-cover" alt="" />
          </div>
          {/*overlay*/}
          <div className="absolute hidden max-lg:block left-0 top-0 w-full h-full bg-black opacity-50 z-30"></div>
          <div className="absolute hidden lg:flex flex-row gap-[25px] z-30 bottom-[-50px] right-[350px]">
            <img src={assets.spices1} className="w-[150px]" alt="" />
            <img src={assets.spices2} className="w-[150px]" alt="" />
            <img src={assets.spices3} className="w-[150px]" alt="" />
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Home;
