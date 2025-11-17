import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Our_Services = () => {
  return (
    <div className="relative w-full bg-[url('/bg_home.jpg')] bg-no-repeat">
      <div className="absolute inset-0 bg-[#F9F7E9] mix-blend-multiply opacity-70"></div>

      <div className="md:px-[6%] py-[10%] md:pl-[8%]">
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
              Our Services
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16, md: 20 },
                fontWeight: 400,
                color: "#787878",
              }}
            >
              Fueling industries, Powering communities, and driving
              <br className="hidden md:block" /> progress across Ghana and
              beyond.
            </Typography>
          </div>

          <div className="flex gap-6 flex-col md:flex-row pt-12 md:pt-16">
            {[
              {
                bg: "/services/importing.jpg",
                title: "Bulk Importing",
                subtitle: "Importing",
                text: "We specialize in importing high-quality petroleum products from reputable international suppliers.",
                delay: 0,
              },
              {
                bg: "/services/fuel.jpg",
                title: "Fuel Distribution",
                text: "We deliver safe and reliable fuel across Ghana, ensuring steady energy access for businesses and communities.",
                delay: 0.2,
              },
              {
                bg: "/services/exporting.jpg",
                title: "Energy Exporting",
                text: "Fueling industries, Powering communities, and driving progress across Ghana and beyond.",
                delay: 0.4,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: card.delay,
                  ease: "easeOut",
                }}
                className={`relative rounded-[20px] w-[340px] md:h-[516px] h-[350px] overflow-hidden mx-auto md:mx-0 ${
                  i === 1 ? "md:mt-[7%]" : i === 2 ? "md:mt-[14%]" : ""
                } `}
                style={{
                  backgroundImage: `url(${card.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-b from-[#000000] to-[#00000066]"></div>

                {/* Glassmorphism text overlay, moved up */}
                <div className="flex flex-col gap-5 absolute m-2 p-6 md:p-8 bg-white/15 backdrop-blur-md rounded-[20px] md:h-[237px]">
                  <Typography
                    sx={{
                      fontSize: { xs: 18, sm: 28, md: 32 },
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15, md: 16 },
                      fontWeight: 400,
                      color: "#E0E0E0",
                    }}
                  >
                    {card.text}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Services;
