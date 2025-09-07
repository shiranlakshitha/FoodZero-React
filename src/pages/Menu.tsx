import assets from "../assets/assets"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Reservations from "../components/Reservations"

interface menus {
  id: number,
  data: {
    id: number,
    name: string,
    description: string,
    price: string
  }[]
}

// ...existing code...
const menus: menus[] = [{
  id: 1,
  data: [{
    id: 1,
    name: "Grilled Okra and Tomatoes ",
    description: 'Char‑grilled okra and blistered cherry tomatoes tossed with garlic, extra virgin olive oil, lemon zest and fresh herbs — light, smoky and bright.',
    price: "$20"
  },{
    id: 2,
    name: "Cucumber Salad",
    description: 'Crisp cucumbers, thinly sliced red onion and fresh dill, dressed in a tangy yogurt‑lemon vinaigrette for a cool, refreshing starter.',
    price: '$18'
  },{
    id: 3,
    name: " Basil Pancakes",
    description: 'Savory pancakes made with fresh basil and ricotta, finished with a drizzle of aged parmesan and a touch of lemon.',
    price: '$12'
  }]
},{
  id:2,
  data: [{
    id:1,
    name: "Deep Sea Snow White Cod Fillet",
    description: 'Pan‑seared cod with a silky lemon‑butter sauce, capers and seasonal greens — flaky, delicate and perfectly balanced.',
    price: '$20'
  },{
    id: 2,
    name: "Steak With Rosemary Butter",
    description: 'Grilled steak finished with rosemary‑infused compound butter, served with roasted baby potatoes and sautéed seasonal vegetables.',
    price: '$22'
  },{
    id: 3,
    name: "Steaks with Grilled Kimchi",
    description: 'Seared steak paired with house‑grilled kimchi and a soy‑sesame glaze for a bold, umami‑forward combination.',
    price: '$20'
  }]
},{
  id: 3,
  data: [{
    id: 1,
    name: "Wine Pairing",
    description: 'A curated selection of wines chosen to complement a three‑course tasting menu — balanced, classic pairings.',
    price: '$158'
  },{
    id:2,
    name: "Natural Wine Pairing",
    description: 'Minimal‑intervention, organic wines selected to highlight pure fruit and terroir — adventurous and expressive pairings.',
    price: '$168'
  },{
    id: 3,
    name: "Whisky Flyer",
    description: 'A tasting flight of three premium whiskies with brief notes and recommended palate cleansers for guided sipping.',
    price: '$90'
  }]
}]
//

const Menu = () => {
  return (
    <>
      <div className="relative w-full  h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10">
          <img className="w-full h-full object-cover" src={assets.menucover} alt="" />
        </div>
        <div className="absolute inset-0 z-20 bg-black/50 "></div>
        <div className="md:px-[100px] px-[25px]  relative flex flex-col h-full items-start justify-center z-50">
          <h1 className="md:text-8xl text-7xl w-full md:max-w-[400px] text-white font-rufina">View our new menu</h1>
          <p className="mt-[15px] text-2xl text-white font-lato">The freshest ingredients for you every day</p>
        </div>
      </div>
      {/*second section*/}
      <div className="px-[50px] py-[100px]">
        <div className="text-center">
          <h1 className="font-rufina text-7xl font-bold">Starters</h1>
          <p className="font-lato">This is a section of your menu. Give your section a brief description</p>
        </div>
        <div className="mt-[50px] flex flex-col md:flex-row  items-center justify-between gap-[50px]">
          <div className="max-w-[500px] flex-1">
            <img className="flex w-full h-full object-cover" src={assets.menu1} alt="" />
          </div>
          <div className="flex-col flex-1 max-w-[600px]">
            {menus[0].data.map((item) => (
              <div key={item.id}>
                <p className="font-rufina text-3xl flex justify-end border-b-1 border-dotted">{item.price}</p>
                <h1 className="max-w-[400px] font-rufina text-5xl mt-[15px]">{item.name}</h1>
                <p className="mt-[25px]">{item.description}</p>
              </div>
            ))}
            

          </div>
        </div>
      </div>
      {/*third section*/}
      <div className="px-[50px] py-[100px]">
        <div className="text-center">
          <h1 className="font-rufina text-7xl font-bold">Mains</h1>
          <p className="font-lato">This is a section of your menu. Give your section a brief description</p>
        </div>
        <div className="mt-[50px] flex flex-col md:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="max-w-[500px] flex-1">
            <img className="flex w-full h-full object-cover" src={assets.menu2} alt="" />
          </div>
          <div className="flex-col flex-1 max-w-[600px]">
            {menus[1].data.map((item) => (
              <div key={item.id}>
                <p className="font-rufina text-3xl flex justify-end border-b-1 border-dotted">{item.price}</p>
                <h1 className="max-w-[400px] font-rufina text-5xl mt-[15px]">{item.name}</h1>
                <p className="mt-[25px]">{item.description}</p>
              </div>
            ))}
            

          </div>
        </div>
      </div>
      {/*fourth section*/}
      <div className="px-[50px] py-[100px]">
        <div className="text-center">
          <h1 className="font-rufina text-7xl font-bold">Pastries & Drinks</h1>
          <p className="font-lato">This is a section of your menu. Give your section a brief description</p>
        </div>
        <div className="mt-[50px] flex flex-col md:flex-row items-center justify-between gap-[50px]">
          <div className="max-w-[500px] flex-1">
            <img className="flex w-full h-full object-cover" src={assets.menu2} alt="" />
          </div>
          <div className="flex-col flex-1 max-w-[600px]">
            {menus[1].data.map((item) => (
              <div key={item.id}>
                <p className="font-rufina text-3xl flex justify-end border-b-1 border-dotted">{item.price}</p>
                <h1 className="max-w-[400px] font-rufina text-5xl mt-[15px]">{item.name}</h1>
                <p className="mt-[25px]">{item.description}</p>
              </div>
            ))}
            

          </div>
        </div>
      </div>
      <Reservations />
      <Footer />
    </>
  )
}

export default Menu