

const HomeMenus = ({price, title, description}) => {
  return (
    <div className="text-black">
      <p className="text-2xl md:text-4xl font-rufina flex justify-end mx-auto">${price}</p>
      <p className="border-b text-3xl border-dotted"></p>
      <p className="mt-2 font-rufina text-3xl md-text-5xl">
        {title}
      </p>
      <p className="mt-4 font-lato md:text-2xl">
        {description}
      </p>
    </div>
  )
}

export default HomeMenus