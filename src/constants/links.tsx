import { IconType } from "react-icons";
import { FaCircle } from "react-icons/fa6";
import image1 from "../assets/iphone-14.jpg";
import image2 from "../assets/Apple-iPhone-15-Pro.jpg";
import image3 from "../assets/iphone-16-blue-roundup-header.webp";
import image4 from "../assets/image-iphone-13.webp";
import image5 from "../assets/apple-iphone-11-pro-max-4.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "SignUp",
    href: "/sign-up",
  },
];

export const linksAuth = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
];

interface ImagesProps {
  image: string | StaticImport;
  phone: string;
  button: string;
}

export const slider: ImagesProps[] = [
  {
    image: image1,
    phone: "iPhone 14 Series",
    button: "Shop Now",
  },
  {
    image: image2,
    phone: "iPhone 15 Pro Series",
    button: "Shop Now",
  },
  {
    image: image3,
    phone: "iPhone 16 Series",
    button: "Shop Now",
  },
  {
    image: image4,
    phone: "iPhone 13 Series",
    button: "Shop Now",
  },
  {
    image: image5,
    phone: "iPhone 11 Series",
    button: "Shop Now",
  },
];

interface IconsProps {
  icon: IconType;
}

export const circle: IconsProps[] = [
  {
    icon: FaCircle,
  },
];
