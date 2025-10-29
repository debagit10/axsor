import { Button, TextField, Typography } from "@mui/material";
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
        <div className="flex flex-col rounded-2xl w-[360px] h-[230px] md:p-[2%] p-[4%] bg-[#121212] gap-7 mx-auto md:mx-0">
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

        <div className="rounded-2xl flex flex-col w-[360px] h-[230px] md:p-[2%] p-[4%] bg-[#121212] gap-7 mx-auto md:mx-0">
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

        <div className="rounded-2xl flex flex-col w-[360px] h-[230px] md:p-[2%] p-[4%] bg-[#121212] gap-7 mx-auto md:mx-0">
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

      <div className="flex md:gap-40 gap-20 justify-center flex-col md:flex-row py-12 w-full h-[928px] bg-[url('/message.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col gap-6 pt-[10%] mx-auto md:mx-0">
          <Typography
            sx={{
              fontSize: { xs: 32, md: 64 },
              fontWeight: 400,
              color: "#000000",
              letterSpacing: "-3%",
              lineHeight: "100%",
            }}
          >
            Send us <br /> A Message
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, md: 16 },
              fontWeight: 400,
              color: "#787878",
              letterSpacing: "2.5%",
              lineHeight: "165%",
            }}
          >
            Axsor’s leadership combines of personnels with a <br /> vision for
            innovation and growth, ensuring reliability, <br /> trust, and value
            in every operation.
          </Typography>
        </div>

        <div className="mt-[10%] relative rounded-[28px] md:w-[452px] w-[353px] h-[578px] p-4 bg-[#ffffff] mx-auto md:mx-0">
          <div className="flex flex-col gap-5">
            <TextField
              placeholder="Enter your name"
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#F2F2F3",
                  borderRadius: "64px",
                  height: "48px",
                },
                "& fieldset": { border: "none" },
              }}
            />
            <TextField
              placeholder="Enter your email"
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#F2F2F3",
                  borderRadius: "64px",
                  height: "48px",
                },
                "& fieldset": { border: "none" },
              }}
            />
            <TextField
              placeholder="Enter mail subject"
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#F2F2F3",
                  borderRadius: "64px",
                  height: "48px",
                },
                "& fieldset": { border: "none" },
              }}
            />

            <TextField
              placeholder="Write your message"
              multiline
              rows={6}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#F2F2F3",
                  borderRadius: "12px",
                  border: "1px",
                  borderColor: "#E9E8E7",
                },
                "& fieldset": { border: "none" },
              }}
            />
          </div>

          <div className="absolute flex justify-center bottom-5">
            <Button
              fullWidth
              sx={{
                height: "54px",
                width: { xs: 321, md: 404 },
                marginTop: "1rem",
                color: "#5A3E0C",
                borderRadius: "64px",
                textTransform: "capitalize",
                backgroundColor: "#E8AF4B",
                border: "1px",
                borderColor: "#E8AF4B",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <Blog />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
