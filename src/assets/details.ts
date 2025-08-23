import assets from "./assets";

export interface Blog  {

    title: string;
    description: string;
    img: string;
    userImg: string;
    userName: string;
    date: string;
    time: string;
    comments: string;
};

export const blogs: Blog[] = [{
    title: "Healthy Eating",
    description: "Tips for maintaining a balanced diet",
    time: "2 min read",
    comments: "5 comments",
    img: assets.blog1,
    userImg: "https://randomuser.me/api/portraits/men/85.jpg",
    userName: "John Doe",
    date: "2023-03-15"
}, {
    title: "Meal Prep 101",
    description: "How to prepare your meals in advance",
    time: "3 min read",
    comments: "10 comments",
    img: assets.blog2,
    userImg: "https://randomuser.me/api/portraits/men/14.jpg",
    userName: "Jane Smith",
    date: "2023-03-16"
}];
