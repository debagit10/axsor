import { Button, Typography } from "@mui/material";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Leadership from "../components/home/Leadership";
import Services from "../components/Services";
import Values from "../components/home/Values";

const Home = () => {
  return (
    <div>
      <Hero />

      <Values />

      <Services />

      <div className="relative flex flex-col justify-center w-full h-[558px] md:h-[770px]  bg-[url('/commitment.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#00000066] to-[#000000]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 px-[6%] md:pl-[8%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
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
            We are committed to safety, environmental responsibility, and
            contributing to the communities we serve.
          </Typography>
        </div>
      </div>

      <Leadership />

      <Blog />

      <div className="relative flex flex-col justify-center w-full h-[770px] md:h-[418px] bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat mt-[10%]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#00000066] to-[#000000]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 px-[6%] md:pl-[8%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
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
            Join a team fueling progress and shaping Ghana’s energy future. At
            Axsor, we value professionalism, integrity, mutual respect and
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
