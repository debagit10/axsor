import { Typography } from "@mui/material";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Hero {
  id: number;
  acf: {
    title: string;
    sub_title: string;
  };
}

const Hero = () => {
  const [hero, setHero] = useState<Hero>();

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(
          "https://axsor-f6fd39.ingress-alpha.ewp.live/wp-json/wp/v2/contact-hero-section"
        );
        const data = await res.json();

        const hero = Array.isArray(data) ? data[0] : data;

        setHero(hero);
      } catch (error) {
        console.error("Error fetching hero section:", error);
      }
    };

    fetchHero();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[url('/contact.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#00000010] to-[#00000066]" />

      {/* Navbar */}
      <div className="relative">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative flex w-full max-w-[1120px] z-10 flex-col gap-[30px] px-[6%] md:pl-[8%] pt-[70%] sm:pt-[50%] md:pt-[15%] lg:pt-[15%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hero ? 1 : 0, y: hero ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-[30px]">
            <Typography
              sx={{
                fontSize: {
                  xs: "clamp(2rem, 6vw, 4rem)",
                  md: "clamp(3rem, 6vw, 5rem)",
                  lg: "clamp(4rem, 5vw, 6rem)",
                },
                fontWeight: 400,
                color: "#FFFFFF",
                letterSpacing: "-3%",
                lineHeight: "100%",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                maxWidth: "90%",
              }}
            >
              Get in touch with Axsor Energy
              {/* {hero?.acf.title} */}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                fontWeight: 400,
                color: "#FFFFFF",
                letterSpacing: "-2.5%",
                lineHeight: "165%",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                maxWidth: "90%",
              }}
            >
              We’re here to answer questions, explore partnerships, and support
              your needs. Contact our team today.
              {/* {hero?.acf.sub_title} */}
            </Typography>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
