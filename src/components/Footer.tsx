import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000000] pt-[10%] ">
      <div className="flex md:flex-row flex-col justify-between gap-12 px-[8%] py-[2%]">
        <div className="flex flex-col gap-[15px]">
          <Typography
            sx={{
              fontSize: { xs: 18, md: 20 },
              fontWeight: { xs: 700, md: 900 },
              color: "#FFFFFF",
            }}
          >
            Axsor
          </Typography>

          <Typography
            component="a"
            href="mailto:info@axsorenergy.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline", cursor: "pointer" },
            }}
          >
            info@axsorenergy.com
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
            }}
          >
            Office No 409, Plot 66 / 11, Industrial Area ,Tema.{" "}
          </Typography>

          <Typography
            component="a"
            href="tel:+233264930920"
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline", cursor: "pointer" },
            }}
          >
            Call Us On (+233) 026 493 0920
          </Typography>
        </div>

        <div className="flex flex-col gap-[15px]">
          <Typography
            sx={{
              fontSize: { xs: 18, md: 20 },
              fontWeight: { xs: 700, md: 900 },
              color: "#FFFFFF",
            }}
          >
            Quick Links
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
            }}
          >
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>{" "}
            /{" "}
            <span
              onClick={() => navigate("/", { state: { scrollTo: "about" } })}
              className="cursor-pointer"
            >
              About
            </span>{" "}
            /{" "}
            <span
              onClick={() => navigate("/contact")}
              className="cursor-pointer"
            >
              Contact Us
            </span>
          </Typography>

          <Typography
            onClick={() => navigate("/", { state: { scrollTo: "careers" } })}
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
              cursor: "pointer",
            }}
          >
            Careers
          </Typography>
        </div>
      </div>

      <div className="border-t-[0.5px] border-[#FFFFFF1F]  ">
        <div className="px-[8%] md:py-[2%] py-[4%] flex md:flex-row flex-col justify-between gap-4 ">
          <div className="flex gap-5 justify-center">
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              TERMS OF SERVICE
            </Typography>

            <span
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              •
            </span>

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              PRIVACY POLICY
            </Typography>
          </div>

          <div className="flex gap-5">
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              FACEBOOK
            </Typography>
            <span
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              •
            </span>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              INSTAGRAM
            </Typography>
            <span
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              •
            </span>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#7C786D",
              }}
            >
              LINKEDIN
            </Typography>
          </div>
        </div>
      </div>

      <div className="border-t-[0.5px] border-[#FFFFFF1F]">
        <div className="flex justify-center px-[8%] md:py-[2%] py-[4%]  ">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#7C786D",
            }}
          >
            Copyright © 2025 | All Rights Reserved
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
