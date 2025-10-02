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
}, {
    title: 'The Best Style of Dough for Dumplings',
    description: 'A practical guide to the best dough textures and techniques for dumplings — covers flour choices, hydration, kneading and resting tips to achieve tender, chewy skins every time.',
    time: '3.30 p.m',
    comments: '15 comments',
    img: assets.blog3,
    userImg: 'https://randomuser.me/api/portraits/men/12.jpg',
    userName: 'Marco Lin',
    date: '2024-06-12'
}, {
    title: '7 Reasons to Start Your Day With Lemon Water',
    description: 'Explains the benefits of warm lemon water: hydration, gentle digestion support, vitamin C boost, and a refreshing morning ritual to kickstart metabolism and mindfulness.',
    time: '7.20 p.m',
    comments: '23 comments',
    img: assets.blog4,
    userImg: 'https://randomuser.me/api/portraits/women/45.jpg',
    userName: 'Sofia Alvarez',
    date: '2024-07-01'
}, {
    title: 'Three Ideas for Cooking Goat Meat at Home',
    description: 'Three easy preparations — slow-braised stew, charred kebabs, and curry-style braise — with tips on trimming, marinating and balancing strong flavors for tender, delicious results.',
    time: '7.32 a.m',
    comments: '4 comments',
    img: assets.blog5,
    userImg: 'https://randomuser.me/api/portraits/men/22.jpg',
    userName: 'Ethan Brooks',
    date: '2024-05-18'
}, {
    title: "12 Sparkling Wines We're Loving This Summer",
    description: 'A curated list of sparkling wines across styles — from crisp Brut to aromatic Pet-Nat — with tasting notes and pairing ideas for warm-weather dishes and celebrations.',
    time: '7.32 a.m',
    comments: '4 comments',
    img: assets.blog6,
    userImg: 'https://randomuser.me/api/portraits/women/33.jpg',
    userName: 'Claire Bennett',
    date: '2024-08-05'
}];
