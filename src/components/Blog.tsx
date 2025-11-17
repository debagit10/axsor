import { Typography } from "@mui/material";

const Blog = () => {
  const newsItems = [
    {
      title: "Axsor Energy Expands Distribution Network Across Ghana...",
      readTime: "3 MINS READ",
      image: "/images/news1.jpg", // replace with actual image path
    },
    {
      title: "Axsor Energy Launches New LPG Facility in Takoradi...",
      readTime: "4 MINS READ",
      image: "/images/news2.jpg",
    },
    {
      title: "Empowering Local Communities Through Sustainable Energy...",
      readTime: "5 MINS READ",
      image: "/images/news3.jpg",
    },
  ];

  return (
    <div className="relative w-full bg-[url('/bg_home.jpg')] bg-cover  bg-no-repeat">
      <div className="absolute inset-0 bg-[#FFFFFF] mix-blend-multiply opacity-70"></div>

      <div className="px-[6%] py-[5%] md:pl-[8%]">
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
              Axsor's leadership combines of personnels with a vision for
              innovation and growth, ensuring reliability, trust, and value in
              every operation.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 justify-center">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="relative md:w-full w-[333px] h-[494px] md:h-[454px] bg-[#00000005] rounded-[20px] overflow-hidden mx-auto"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="rounded-2xl flex flex-col gap-7 absolute bottom-0 bg-[#00000006] p-4 backdrop-blur-sm">
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      color: "#787878",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {item.readTime}
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
