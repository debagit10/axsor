import { Typography } from "@mui/material";
import LeadershipModal from "../../modals/Leadership";

interface Leaders {
  name: string;
  role: string;
  about: string;
}

const leaders: Leaders[] = [
  {
    name: "John Kojo Arkorful",
    role: "CHAIRMAN",
    about:
      "John Kojo Arkorful is a Chartered Accountant by profession. He holds an MBA in Banking and Finance from the University of Birmingham (UK). He has vast knowledge and experience that spans from the Upstream, Refinery, and Downstream sectors of the Petroleum Industry. He also has experience in the insurance industry. Before becoming a Director of Axsor Energy Ltd, he worked at the following institutions: Great African Insurance Company as Accountant, Bulk Oil Storage & Transport (BOST) Company Ltd as Chief Accountant for 10 years, Tema Oil Refinery (TOR) as Chief Accountant for 10 years, Ghana National Petroleum Corporation (GNPC) as Chief Accountant, Anane Mantey and Associates as Audit Manager for 5 years, and Peat Marwick Okoh & Co (now KPMG) as Trainee Accountant. Altogether, Kojo has over 30 years of working experience.",
  },
  {
    name: "David Addo-Ashong",
    role: "DIRECTOR",
    about:
      "David Addo-Ashong is a Lawyer by profession.  He holds a LL.B from the University of Ghana and a B.L from Ghana Law School. He has vast knowledge and experience in the legal space spanning all three sectors of the economy. Before becoming a Director of Axsor Energy Ltd, he worked at the following institutions:- Ashong Benjamin & Associates - Senior Partner (9 years), Afina Asset Management Company - Director (13 years), Ankamah and Associates - Partner (3 years), First Atlantic Merchant Bank Ltd - General Manager/Corporate Finance (4 years), Executive Director/Corporate Banking (7 years), Deputy Managing Director (6 years), Home Finance Company Limited - Secretary/ Legal Adviser (2 years), Merchant Bank (Ghana) Limited – Legal Officer (3 years) & Snr Legal Officer (2 years), Assistant Manager/Corporate Finance (2 years) & Senior Assistant Manager/Corporate Finance (1 year). Altogether, David has over 40 years of working experience",
  },
  {
    name: "Kwasi Yirenkyi",
    role: "DIRECTOR",
    about:
      "Kwasi Yirenkyi is a Management Consultant by profession. He holds a Diploma in Micro Finance Development from Southern New Hampshire University (USA) and a B.Sc. in Administration from George Mason University, Virginia (USA). He has vast knowledge and experience in managing businesses across the banking, finance, and pharmaceutical industries. Before becoming a Director of Axsor Energy Ltd, he worked at the following institutions: Dannex Ayrton Starwin PLC as Chief Corporate Affairs and Communications Director for 7 years, Starwin Products Limited as Managing Director for 9 years, Merchant Bank Ghana Ltd as Manager, Corporate and Institutional Banking for 7 years, Empretec Ghana Foundation as Head of Training and Regional Operations for 3 years, and Deloitte and Touche Consulting as Management Consultant for 2 years. Altogether, Kwasi has over 28 years of working experience.",
  },
  {
    name: "Micheal Addotey Addo",
    role: "CEO & DIRECTOR",
    about:
      "Michael Addotey Addo is an Economist and Insurer by profession. He holds a BA in Economics from Bates College, Lewiston, Maine; an MS in Insurance from the University of Hartford, Hartford, Connecticut; and an MBA in Finance from Cornell University, Ithaca, New York. He has vast knowledge and experience in the insurance and finance industries across three continents and also has experience in the oil and gas industry. Before becoming the Managing Director of Axsor Energy Ltd, he worked at the following institutions: Social Security & National Insurance Trust (SSNIT) as Deputy Director-General (Finance & Administration) for 7 years; Databank Agrifund Manager Limited (DAFML) as Chief Operating Officer & Fund Manager for 1 year; Emex Oil Ndawta Limited, Nigeria as Executive Director for 4 years; SSNIT as General Manager, Investments & Development Division for 2 years; NTHC Limited, Ghana as Deputy Managing Director for 2 years; Western & Southern Financial Group, USA in various capacities for 5 years; Reliance Insurance Company, USA as Loss Control Consultant for 1 year; and Liberty Mutual Group, USA as Loss Prevention Consultant for 6 years. Altogether, Michael has over 28 years of working experience.",
  },
];

const Leadership = () => {
  return (
    <div className="bg-[#F8F8F6] px-[6%] py-[5%] md:pl-[8%] ">
      <div className="md:px-[5%]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 64 },
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Leadership
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              color: "#787878",
            }}
          >
            Axsor's leadership comprises personnel with a vision for innovation{" "}
            <br />
            and growth, ensuring reliability, trust, and value in every
            operation.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {leaders.map((leader) => (
            <LeadershipModal
              name={leader.name}
              role={leader.role}
              about={leader.about}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
