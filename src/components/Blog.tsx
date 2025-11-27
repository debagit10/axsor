import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface Blogs {
  id: number;
  acf: {
    content: string;
    read_time: string;
    url: string;
    image: { url: string; id: string };
  };
}

const Blog = () => {
  // const newsItems = [
  //   {
  //     title: "Axsor Energy Expands Distribution Network Across Ghana...",
  //     rea: "3 MINS READ",
  //     image: "/images/news1.jpg", // replace with actual image path
  //   },
  //   {
  //     title: "Axsor Energy Launches New LPG Facility in Takoradi...",
  //     rea: "4 MINS READ",
  //     image: "/images/news2.jpg",
  //   },
  //   {
  //     title: "Empowering Local Communities Through Sustainable Energy...",
  //     rea: "5 MINS READ",
  //     image: "/images/news3.jpg",
  //   },
  // ];

  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    fetch(
      "https://axsor-f6fd39.ingress-alpha.ewp.live/wp-json/wp/v2/blogs?order=asc&orderby=date"
    )
      .then((res) => res.json())
      .then(async (data) => {
        const blogsWithImages = await Promise.all(
          data.map(async (blog: any) => {
            if (blog.acf?.image && typeof blog.acf.image === "number") {
              try {
                const imgRes = await fetch(
                  `https://axsor-f6fd39.ingress-alpha.ewp.live/wp-json/wp/v2/media/${blog.acf.image}`
                );
                const imgData = await imgRes.json();
                blog.acf.image = {
                  id: blog.acf.image,
                  url: imgData.source_url,
                  alt: imgData.alt_text || blog.acf.name,
                };
              } catch (error) {
                console.error("Error fetching image:", error);
              }
            }
            return blog;
          })
        );
        setBlogs(blogsWithImages);
      });
  }, []);

  return (
    <div className="relative w-full bg-[url('/bg_home.jpg')] bg-cover  bg-no-repeat">
      <div className="absolute inset-0 bg-[#FFFFFF] mix-blend-multiply opacity-70"></div>

      <div className="px-[6%] md:py-[8%] py-[20%] md:pl-[8%]">
        <div className="md:px-[5%]">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <Typography
              sx={{
                fontSize: { xs: 32, sm: 40, md: 64 },
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Blog & Updates
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16, md: 20 },
                fontWeight: 400,
                color: "#787878",
              }}
            >
              Explore strategic insights and official updates from Axsor Energy.
              Stay informed on our projects, partnerships, and industry
              developments.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 justify-center">
            {blogs.map((item, index) => (
              <div
                onClick={() => window.open(`${item.acf.url}`, "_blank")}
                key={index}
                className="relative md:w-full w-[333px] h-[494px] md:h-[454px] bg-[#00000005] rounded-[20px] overflow-hidden mx-auto transform transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={item.acf.image.url}
                  className="w-full h-full object-cover"
                />

                <div className="rounded-2xl flex flex-col gap-7 absolute bottom-0 bg-black/60 backdrop-blur-lg p-4">
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      color: "white",
                    }}
                  >
                    {item.acf.content.split(" ").slice(0, 10).join(" ") + "..."}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "white",
                    }}
                  >
                    {item.acf.read_time}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
