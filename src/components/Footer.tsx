import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-[#000000] ">
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
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
            }}
          >
            info@axsor.com
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
            }}
          >
            Sentuo Oil Refinery, 4th Floor -Room number 409-410
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
            }}
          >
            Call Us On 0264930920
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
            <span>Home</span> / <span>About</span> / <span>Contact Us</span>
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#787878",
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
