import { Button, Typography } from "@mui/material";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Leadership from "../components/home/Leadership";
import Services from "../components/Services";
import Values from "../components/home/Values";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "../components/About";
import quote from "../icons/quotes.png";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />

      <div id="about">
        <About />
      </div>

      <Values />

      <Services />

      <div className="relative flex flex-col justify-center w-full h-[558px] md:h-[770px]  bg-[url('/commitment.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#00000066] to-[#000000]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 px-6 md:pl-[8%]  md:pt-[15%] lg:pt-[10%]  md:mx-0">
          <Typography
            sx={{
              fontSize: { xs: 10, md: 14 },
              fontWeight: 700,
              color: "#D3D2CE",
              letterSpacing: "18%",
              lineHeight: "160%",
            }}
          >
            OUR COMMITMENT TO SUSTAINABILITY
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 28, lg: 48 },
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "-3%",
              lineHeight: "145%",
            }}
          >
            We are committed to safety, <br className="hidden md:block" />{" "}
            environmental responsibility, <br className="hidden md:block" /> and
            contributing to the communities <br className="hidden md:block" />{" "}
            we serve.
          </Typography>

          <div className="absolute top-0 right-10 md:right-[40%] md:top-[30%]">
            <img src={quote} className="md:w-[100px] md:h-[100px] w-12 h-12" />
          </div>
        </div>
      </div>

      <Leadership />

      <div id="blog">
        <Blog />
      </div>

      <div
        id="careers"
        className="relative flex flex-col  w-full h-[418px] md:h-[770px] bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat mt-[10%]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#00000066] to-[#000000]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 px-[6%] md:pl-[8%] pt-[15%] max-w-[1400px] ">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#EBCC5B",
              letterSpacing: "18%",
              lineHeight: "160%",
            }}
          >
            CAREERS
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 28, lg: 48 },
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "-3%",
              lineHeight: "145%",
            }}
          >
            Join a team fueling progress and shaping{" "}
            <br className="hidden md:block" /> Ghana’s energy future. At Axsor,
            we value <br className="hidden md:block" /> professionalism,
            integrity, mutual respect <br className="hidden md:block" /> and
            teamwork.
          </Typography>

          <Button
            sx={{
              marginTop: "1rem",
              width: "203px",
              color: "#5A3E0C",
              borderRadius: "64px",
              textTransform: "capitalize",
              backgroundColor: "#E8AF4B",
              border: "1px",
              borderColor: "#E8AF4B",
              paddingX: { md: "28px", sm: "18px" },
              paddingY: { md: "14px", sm: "10px" },
            }}
          >
            Check out Openings
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
