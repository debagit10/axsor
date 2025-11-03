import { Typography } from "@mui/material";
import exporticon from "../icons/export.png";
import distribution from "../icons/distribution.png";
import truck from "../icons/truck.png";
import { motion } from "framer-motion";

const Our_Services = () => {
  return (
    <div className="bg-[#000000] md:px-[6%] py-[10%] md:pl-[8%]">
      <div className="md:px-[5%]">
        {/* Header */}
        <div className="flex flex-col gap-6 pl-[6%] md:pl-0">
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 64 },
              fontWeight: 400,
              color: "#FFFFFF",
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
            <br className="hidden md:block" /> progress across Ghana and beyond.
          </Typography>
        </div>

        <div className="flex gap-6 flex-col md:flex-row pt-12 md:pt-16">
          {[
            {
              img: exporticon,
              title: "Bulk",
              subtitle: "Importing",
              text: "We specialise in sourcing / acquiring crude oil and finished products such as AGO, PMS, LPG etc from reputable local producers and international suppliers.",
              delay: 0,
            },
            {
              img: distribution,
              title: "Fuel",
              subtitle: "Distribution",
              text: "We deliver safe and reliable fuel across Ghana, ensuring steady energy access for businesses and communities.",
              delay: 0.2,
            },
            {
              img: truck,
              title: "Energy",
              subtitle: "Exporting",
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
              className={`relative rounded-[20px] w-[340px] md:h-[450px] h-[350px] bg-[#121212] mx-auto md:mx-0 p-[5%] md:p-[3%] ${
                i === 1 ? "md:mt-[7%]" : i === 2 ? "md:mt-[14%]" : ""
              }`}
            >
              <img
                src={card.img}
                alt={card.subtitle}
                className="rounded-[50%]"
              />

              <div className="absolute flex flex-col gap-6 pt-[30%] md:bottom-20 bottom-10">
                <Typography
                  sx={{
                    fontSize: { xs: 28, sm: 32, md: 36 },
                    fontWeight: 400,
                    color: "#FFFFFF",
                  }}
                >
                  {card.title} <br /> {card.subtitle}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    fontWeight: 400,
                    color: "#A8A4A4",
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
  );
};

export default Our_Services;
