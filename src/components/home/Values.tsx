import { Typography } from "@mui/material";

const Values = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We act ethically and transparently in all our business dealings, thus prioritizing doing the right thing over personal gain.",
      image: "/values/integrity.png",
    },
    {
      title: "Professionalism",
      description:
        "We adhere to the core values and in so doing engender Trust and Reputation with all our stakeholders.",
      image: "/values/professionalism.jpg",
    },
    {
      title: "Mutual Respect",
      description:
        "We act politely and treat all fellow employees, clients, customers, and stakeholders with dignity and worth.",
      image: "/values/respect.jpg",
    },
    {
      title: "Teamwork",
      description:
        "We work cohesively and collaboratively to achieve our common corporate goals and objectives.",
      image: "/values/teamwork.jpg",
    },
  ];

  return (
    <div className="bg-linear-to-b from-[#D8B94A] to-[#CBB565] md:px-[6%] pt-[10%] pb-[5%] md:pl-[8%] px-[5%]">
      <div className="md:px-[5%]">
        {/* Header */}
        <div className="flex flex-col gap-6 pl-[6%] md:pl-0">
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 64 },
              fontWeight: 600,
              color: "black",
            }}
          >
            Core Values
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 20 },
              fontWeight: 400,
              color: "#000000BF",
            }}
          >
            Fueling industries, Powering communities, and driving
            <br className="hidden md:block" /> progress across Ghana and beyond.
          </Typography>
        </div>

        {/* Values Section */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 pt-12 md:pt-16">
            {values.map((item, index) => (
              <div
                key={index}
                className=" w-full max-w-[500px] mx-auto md:mx-0 relative overflow-hidden 
                 lg:h-[516px] h-[792px] rounded-[20px] transition-all duration-300"
              >
                {/* Text Section */}
                <div className="flex flex-col gap-4 sm:gap-6 p-[7%] bg-[#5A3E0C]">
                  <Typography
                    sx={{
                      fontSize: { xs: 28, sm: 32, md: 36 },
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15, md: 16 },
                      fontWeight: 400,
                      color: "#D4BEBE",
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>

                {/* Image */}
                <div className="relative w-full h-[400px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute bottom-0 left-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, #5A3E0C, #0F0F0F00)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
