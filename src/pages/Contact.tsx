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

      <div
        className="relative h-[500px]"
        style={{
          background: `linear-gradient(to bottom right, #0F0F0F00, #0B0B0B75, #070707A4, #000000)`,
        }}
      >
        <iframe
          title="Brand Location"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="border-0 absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127055.44760791256!2d-0.17009232244632225!3d5.643067540502715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No%20409%2C%20Plot%2066%20%2F%2011%2C%20Industrial%20Area%20%2CTema.!5e0!3m2!1sen!2sng!4v1761840513361!5m2!1sen!2sng"
        ></iframe>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom left, #0F0F0F00, #0B0B0B75, #070707A4)`,
          }}
        ></div>

        <div className="absolute md:rounded-[500px] rounded-[20px] p-5 mx-8 bg-[#0000003D] backdrop-blur-[32px] md:w-[415px] bottom-5 md:left-[35%] text-center z-10">
          <Typography sx={{ color: "#ffffff", fontWeight: 400, fontSize: 16 }}>
            Office No 409, Plot 66 / 11, Industrial Area, Tema.
          </Typography>
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
