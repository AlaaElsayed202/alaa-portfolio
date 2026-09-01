export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  backImage?: string;
};

export const certificates: Certificate[] = [
  {
    id: "itsharks",
    title: "Frontend Development",
    issuer: "IT Sharks",
    date: "2025",
    image: "/ItSharks.png",
    backImage: "/Sharks.png",
  },

  {
    id: "eraa",
    title: "Frontend Development",
    issuer: "EraaSoft",
    date: "2026",
    image: "/Eraa.png",
  },
];
