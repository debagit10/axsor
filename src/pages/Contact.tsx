import { Typography } from "@mui/material";
import Blog from "../components/Blog";
import Hero from "../components/contact/Hero";
import Footer from "../components/Footer";
import mail from "../icons/mail.png";
import phone from "../icons/phone.png";
import location from "../icons/location.png";

const Contact = () => {
  return (
    <div>
      <Hero />

      <div className="bg-[#000000] flex gap-5 justify-center flex-col md:flex-row py-12 ">
        <div className="flex flex-col rounded-2xl w-[360px] h-[230px] md:p-[2%] p-[4%] bg-[#121212] gap-7 mx-auto">
          <img className="rounded-[50%] w-14 h-14" src={mail} />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 400,
              color: "#D3D2CE",
              letterSpacing: "18%",
              lineHeight: "160%",
            }}
          >
            SEND US A MAIL
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              color: "#666666",
              letterSpacing: "2.5%",
              lineHeight: "170%",
            }}
          >
            info@axsorenergy.com
          </Typography>
        </div>

        <div className="rounded-2xl flex flex-col w-[360px] h-[230px] md:p-[2%] p-[4%] bg-[#121212] gap-7 mx-auto">
          <img className="rounded-[50%] w-14 h-14" src={phone} />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 400,
              color: "#D3D2CE",
              letterSpacing: "18%",
              lineHeight: "160%",
            }}
          >
            PUT A CALL THROUGH
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              color: "#666666",
              letterSpacing: "2.5%",
              lineHeight: "170%",
            }}
          >
            (+233) 026 493 0920
          </Typography>
        </div>

        <div className="rounded-2xl flex flex-col w-[360px] h-[230px] md:p-[2%] p-[4%] bg-[#121212] gap-7 mx-auto">
          <img className="rounded-[50%] w-14 h-14" src={location} />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 400,
              color: "#D3D2CE",
              letterSpacing: "18%",
              lineHeight: "160%",
            }}
          >
            CHECK OUT OUR OFFICE
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              color: "#666666",
              letterSpacing: "2.5%",
              lineHeight: "170%",
            }}
          >
            Office No 409, Plot 66 / 11, Industrial Area ,Tema.
          </Typography>
        </div>
      </div>

      <Blog />

      <Footer />
    </div>
  );
};

export default Contact;
