import skills from "./illustrations/skills.svg";
import notes from "./illustrations/notes-young-man-with-papers.svg";
import arrow01 from "../../assets/png/biro-blue-computer-arrow.png";
import brain from "../../assets/png/biro-blue-brain.png";
import curvedArrow from "../../assets/png/biro-blue-curved-arrow.png";
import confetti from "../../assets/png/biro-blue-piece-of-confetti.png";
import csLogo from "./illustrations/cs_logo.svg";
import realcommerceLogo from "./illustrations/realcommerce-logo.svg";
import realcommerceLogoWhite from "./illustrations/realcommerce-logo-white.svg";
import techLogo from "./illustrations/tech-logo.svg";
import i24Logo from "./illustrations/I24NEWS_logo.svg";
import i24LogoLight from "./illustrations/I24NEWS_logo_light.svg";
import languages from "./illustrations/notes-office-worker-answering-the-phone.svg";
import education from "./illustrations/education.svg";
import johnbryce from "./illustrations/bryce.jpg";
import bezalelLogo from "./illustrations/bezalelLogo.svg"
import bezalelLogoDark from "./illustrations/bezalelLogoDark.svg"
import yaron from "./illustrations/yaron.jpg"
export interface IIllustration {
  illustration: string;
  title: string;
}

export const ILLUSTRATIONS: Record<string, IIllustration> = {
  skills: { illustration: skills, title: "skills" },
  notes: { illustration: notes, title: "notes" },
  arrow01: { illustration: arrow01, title: "arrow" },
  brain: { illustration: brain, title: "brain" },
  curvedArrow: { illustration: curvedArrow, title: "arrow" },
  confetti: { illustration: confetti, title: "confetti" },
  csLogo: { illustration: csLogo, title: "contentsquare" },
  realcommerceLogo: { illustration: realcommerceLogo, title: "realcommerce" },
  realcommerceLogoWhite: {
    illustration: realcommerceLogoWhite,
    title: "realcommerce",
  },
  techLogo: { illustration: techLogo, title: "tech" },
  i24Logo: { illustration: i24Logo, title: "i24news" },
  i24LogoLight: { illustration: i24LogoLight, title: "i24news" },
  languages: { illustration: languages, title: "languages" },
  education: { illustration: education, title: "education" },
  bezalelLogo: { illustration: bezalelLogo, title: "Bezalel" },
  bezalelLogoDark: { illustration: bezalelLogoDark, title: "Bezalel" },
  johnbryce: { illustration: johnbryce, title: "John Bryce" },
  yaron: { illustration: yaron, title: "Yaron" },
};
