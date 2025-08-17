import assets from "../assets/assets";

const Home = () => {
  return (
    <>
      <div className="bg-[#233000] h-[2000px] relative">
        <div className="py-[25px] px-[75px] relative z-10">
          {/* make this container inline-block so "Scroll" can be centered relative to it */}
          <div className="inline-block relative z-20">
            <h1 className="font-rufina text-white lg:text-9xl max-w-[900px]">
              Healthy Eating is important part of lifestyle
            </h1>
            <p className="mt-[50px] text-white lg:text-2xl max-w-[900px]">
              Eating healthy is not just about following a diet, it's about
              creating a sustainable lifestyle that promotes overall well-being.
            </p>

            {/* positioned below the paragraph and centered; adjust mt-2 for spacing */}
            <span
              aria-hidden="true"
              className="font-lato absolute left-[150px] bottom-[-150px] -translate-x-1/2 mt-4 text-white text-3xl rotate-90 origin-center z-30"
            >
              Scroll - - - - - -
            </span>
          </div>
          {/* Image background */}
        <div className="absolute top-[170px] right-[160px] z-0 max-w-[600px]">
          <img src={assets.heroimg1} className="object-cover w-full h-full" alt="" />
        </div>
        <div className="absolute right-[400px] top-[750px] flex flex-row gap-4">
          <img src={assets.spices1} className="object-cover h-full w-[200px]" alt="" />
          <img src={assets.spices2} className="object-cover h-full w-[200px]" alt="" />
          <img src={assets.spices3} className="object-cover h-full w-[200px]" alt="" />
        </div>
        </div>
        <div className="px-[75px] flex flex-row justify-between mt-[500px]">
          <div className="flex flex-col gap-2">
            <img src={assets.heroimg2} className="w-[600px] h-full object-cover" alt="" />
            <h3 className="mt-[25px]font-rufina text-white text-4xl max-w-[400px]">Start to plan your diet today</h3>
            <p className="mt-[35px] font-lato text-white max-w-[500px]">Take the first step towards a healthier you by creating a personalized meal plan.</p>
          </div>
          <div className="flex flex-col gap-8">
            <p className=" font-lato text-white max-w-[400px]">Take the first step towards a healthier you by creating a personalized meal plan.</p>
            <img src={assets.heroimg3} className="w-[300px] h-full object-cover" alt="" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
