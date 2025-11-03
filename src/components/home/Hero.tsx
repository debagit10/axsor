import { Typography } from "@mui/material";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";

interface Hero {
  id: number;
  acf: {
    title: string;
    sub_title: string;
    image: number | { id: number; url: string; alt: string };
  };
}

const Hero = () => {
  const [hero, setHero] = useState<Hero>();

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(
          "https://axsor-f6fd39.ingress-alpha.ewp.live/wp-json/wp/v2/home-hero-section"
        );
        const data = await res.json();

        // Since API returns an array with one object, get the first item
        const hero = Array.isArray(data) ? data[0] : data;

        // Fetch image URL if it's an ID
        if (hero.acf?.image && typeof hero.acf.image === "number") {
          const imgRes = await fetch(
            `https://axsor-f6fd39.ingress-alpha.ewp.live/wp-json/wp/v2/media/${hero.acf.image}`
          );
          const imgData = await imgRes.json();

          hero.acf.image = {
            id: hero.acf.image,
            url: imgData.source_url,
            alt: imgData.alt_text || hero.acf.title,
          };
        }

        setHero(hero);
      } catch (error) {
        console.error("Error fetching hero section:", error);
      }
    };

    fetchHero();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[url('/home.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#00000066] to-[#000000]" />

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative flex w-full max-w-[1120px] z-10 flex-col gap-[30px] px-[6%] md:pl-[8%] pt-[70%] sm:pt-[50%] md:pt-[15%] lg:pt-[10%]">
        <Typography
          sx={{
            fontSize: {
              xs: "clamp(2rem, 6vw, 4rem)",
              md: "clamp(3rem, 6vw, 5rem)",
              lg: "clamp(4rem, 5vw, 6rem)",
            },
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: -1,
            lineHeight: 1.2,
            wordBreak: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "normal", // ✅ ensures text wraps naturally
            maxWidth: "90%", // ✅ prevents overflowing text
          }}
        >
          {hero?.acf.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: 0.5,
            lineHeight: 1.6,
            wordBreak: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "normal",
            maxWidth: "90%",
          }}
        >
          {hero?.acf.sub_title}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
