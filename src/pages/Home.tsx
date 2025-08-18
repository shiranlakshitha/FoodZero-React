import assets from "../assets/assets";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#233000] h-auto px-[50px]">
        <div className="pt-[50px] relative max-w-[800px]">
          <div className="absolute top-0 left-0">
            <h1 className="font-rufina text-[128px]  z-20">Healthy Eating is important part of lifestyle</h1>
            <p className="mt-[25px] font-lato text-lg max-w-[500px] z-20">Discover the benefits of a balanced diet and how it can improve your overall well-being.</p>
          </div>
          <div className="absolute bottom-0 right-0 h-[600px] w-[500px] z-10">
            <img src={assets.heroimg1} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Home;
