import { Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import close from "../icons/close.png";

interface Leader {
  id: number;
  acf: {
    name: string;
    role: string;
    about: string;
    image: { url: string };
  };
}

const LeadershipModal: React.FC<Leader> = ({ acf }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="md:relative flex md:flex-col sm:gap-0.5 md:gap-0 w-[357px] md:h-[454px] rounded-[20px] md:bg-[#00000006]"
        onClick={() => setOpen(true)}
      >
        <img
          src={acf.image.url ? acf.image.url : "/user.png"}
          alt={acf.name}
          className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-cover rounded-[20px] absolute left-[55%] mt-8 md:mt-0 md:top-[30%] md:left-[23%] bg-[#00000006] md:bg-transparent"
        />
        <div className="rounded-2xl flex flex-col gap-3.5 md:absolute md:bottom-0 bg-[#ffffff] md:w-full p-4 w-36 h-[177px] md:h-[113px] mt-4 md:mt-0 ml-[5px] md:m-0">
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 500,
              color: "#787878",
            }}
          >
            {acf.name}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#000000",
            }}
          >
            {acf.role}
          </Typography>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "rounded-2xl md:p-4 w-[1069px] md:h-[744px] h-[500px]",
        }}
        sx={{
          "& .MuiDialog-paper": {
            width: "80%",
            maxWidth: "1049px",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent>
          <div className="bg-white rounded-2xl md:p-4">
            <div
              onClick={() => setOpen(false)}
              className="justify-end flex py-2 cursor-pointer"
            >
              <img src={close} className="md:w-[50px] md:h-[50px] w-[30px]" />
            </div>

            <div
              className="relative md:float-left md:w-[250px] md:h-[350px] w-full h-[200px]  rounded-[20px] overflow-hidden md:mr-6 mb-4 p-2"
              style={{
                minWidth: 0,
              }}
            >
              <img
                src={acf.image.url ? acf.image.url : "/user.png"}
                alt={acf.name}
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover rounded-[20px]  bg-[#00000006] "
              />

              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-[20px]">
                <Typography
                  sx={{ fontSize: 24, fontWeight: 500, color: "#787878" }}
                >
                  {acf.name}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 400, color: "#000000" }}
                >
                  {acf.role}
                </Typography>
              </div>
            </div>

            <div className="leading-relaxed text-gray-800">
              <Typography sx={{ fontSize: 15, lineHeight: 1.7 }}>
                {acf.about}
              </Typography>
            </div>

            <div className="clear-both" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadershipModal;
