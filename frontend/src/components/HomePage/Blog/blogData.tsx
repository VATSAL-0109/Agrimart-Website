import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Essential Tips for Choosing the Right Fertilizer for Your Crops",
    paragraph:
      "Fertilizer plays a critical role in crop health and yield, but using the wrong one can do more harm than good. Here's how to choose the right fertilizer for your soil and crops.",
    image: "/images/blogsimages/GreenResoltion.png",
    author: {
      name: "Anmol Kumar",
      image: "/images/TestimonialImage/Men1.jpg",
      designation: "",
    },
    tags: ["creative"],
    publishDate: "11/11/2025",
  },
  {
    id: 2,
    title: "Why Quality Seeds Are the Foundation of a Successful Harvest",
    paragraph:
      "Good seeds are more than just the start of a crop—they’re the foundation of your entire harvest. Here's why investing in high-quality seeds matters.",
    image: "/images/blogsimages/GreenResoltion.png",
    author: {
      name: "Sahdev Patel",
      image: "/images/TestimonialImage/Men1.jpg",
      designation: "Environmentalalist",
    },
    tags: ["Environment"],
    publishDate: "2024-10-15",
  },
  {
    id: 3,
    title: "How Smart Farming Equipment Can Boost Your Productivity",
    paragraph:
      "Modern agriculture is shifting toward smart and efficient methods. Discover how the right farming tools and machines can save time, reduce effort, and increase yields.",
      image: "/images/blogsimages/GreenResoltion.png",
    author: {
      name: "Divya Gupta",
      image: "/images/TestimonialImage/Men1.jpg",
      designation: "Environmentalalist",
    },
    tags: ["Innovation"],
    publishDate: "2024-09-30",
  },
];
export default blogData;
