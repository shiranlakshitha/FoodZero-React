import type { Blog } from "../assets/details"
const BlogCard = ({title, description, img, userImg, userName, date, time, comments}: Blog) => {
  return (
    <div>
        <div>
            <img src={img} alt={title} />
        </div>
        <div>
            <div>
                <img src={userImg} alt={userName} />
                <p>{userName}</p>
                <p>{date}</p>
                <p>{time}</p>
                <p>{comments}</p>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard