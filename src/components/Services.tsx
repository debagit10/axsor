import { Typography } from "@mui/material";
import exporticon from "../icons/export.png";
import distribution from "../icons/distribution.png";
import truck from "../icons/truck.png";

const Our_Services = () => {
  return (
    <div className="bg-[#000000] px-[6%] pt-[10%] md:pl-[8%]">
      <div className="md:px-[5%]">
        {/* Header */}
        <div className="flex flex-col gap-6">
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
          <div className="relative rounded-[20px] w-[257px] sm:w-[357px] md:h-[450px] h-[350px] bg-[#121212] md:p-[3%] p-[5%] mx-auto md:mx-0">
            <img
              src={exporticon}
              alt="Bulk Importing"
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
                Bulk <br /> Importing
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  fontWeight: 400,
                  color: "#A8A4A4",
                }}
              >
                We specialise in sourcing / acquiring crude oil and finished
                products such as AGO, PMS, LPG etc from reputable local
                producers and international suppliers.
              </Typography>
            </div>
          </div>

          <div className="relative rounded-[20px] w-[257px] sm:w-[357px] md:h-[450px] h-[350px] bg-[#121212] mx-auto md:mx-0 md:p-[3%] md:mt-[7%] p-[5%]">
            <img
              src={distribution}
              alt="Fuel Distribution"
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
                Fuel <br /> Distribution
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  fontWeight: 400,
                  color: "#A8A4A4",
                }}
              >
                We deliver safe and reliable fuel across Ghana, ensuring steady
                energy access for businesses and communities.
              </Typography>
            </div>
          </div>

          <div className="relative rounded-[20px] w-[257px] sm:w-[357px] md:h-[450px] h-[350px] bg-[#121212] mx-auto md:mx-0 md:p-[3%] md:mt-[14%] p-[5%]">
            <img src={truck} alt="Energy Exporting" className="rounded-[50%]" />

            <div className="absolute flex flex-col gap-6 pt-[30%] md:bottom-20 bottom-10">
              <Typography
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 36 },
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                Energy <br /> Exporting
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  fontWeight: 400,
                  color: "#A8A4A4",
                }}
              >
                Fueling industries, Powering communities, and driving progress
                across Ghana and beyond.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Services;
