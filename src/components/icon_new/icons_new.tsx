import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as sun } from "../../assets/icons/sun/icons8-sun-48.svg";
import { ReactComponent as moon } from "../../assets/icons/moon/icons8-moon-and-stars-48.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin/icons8-linkedin.svg";
import { ReactComponent as github } from "../../assets/icons/github/icons8-github-64.svg";
import { ReactComponent as email } from '../../assets/icons/email/icons8-email.svg';

export type ISVGIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export const ICONS: Record<string, { icon: ISVGIcon }> = {
  sun: { icon: sun },
  moon: { icon: moon },
  linkedin: { icon: linkedin },
  email: { icon: email },
  github: { icon: github },
};
