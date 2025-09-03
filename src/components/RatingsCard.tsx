import { useEffect, useState } from "react"
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";



const RatingsCard = () => {

  const ratings = [
    {id:1,
      name: "John Doe",
      position: "Food Critic",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      rating: 5,
      comment: "The meal exceeded expectations with fresh ingredients, balanced flavors, and careful presentation. Service was prompt and friendly, enhancing the experience. Portions were generous and fairly priced. A minor seasoning tweak would perfect it, but overall it’s a delightful, healthy dining choice I’ll recommend and revisit soon with friends and family."
    },
    {
      id:2,
      name: "Jane Smith",
      position: "Food Blogger",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
      rating: 4,
      comment: "A delightful dining experience with a focus on healthy ingredients. The flavors were well-balanced, and the presentation was top-notch. I appreciated the variety of options available, catering to different dietary preferences. A great spot for health-conscious foodies!"
    },
    {
      id:3,
      name: "Alice Johnson",
      position: "Nutritionist",
      img: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 5,
      comment: "An exceptional dining experience that prioritizes health without compromising on flavor. The dishes are thoughtfully crafted, showcasing a variety of nutritious ingredients. I highly recommend this restaurant to anyone looking to enjoy delicious, healthy meals."
    }
  ]

  const [index, setIndex] = useState<number>(0);
  const current = ratings[index]

  useEffect(() => {
    if(index < 0) setIndex(1)

    else if(index >= ratings.length) setIndex(ratings.length - 1)

  }, [index, ratings.length])
  return (
    <div className="flex flex-col gap-8">
        <div>
          <h2 className="font-rufina text-2xl">
            "{current.comment}"
          </h2>
        </div>
        <div className="mt-[50px]  flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4 items-center">
            <div className="rounded-full w-[75px] h-[75px] overflow-hidden">
              <img className="w-full h-full object-cover" src={current.img} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <p>{current.name}</p>
              <p>{current.position}</p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center">
            <LuArrowLeft onClick={() => setIndex(index - 1)} />
            {index + 1} / {ratings.length}
            <LuArrowRight onClick={() => setIndex(index + 1)} />
          </div>
        </div>
      </div>
  )
}

export default RatingsCard