import {
  MdCardTravel,
  MdOutlineTravelExplore,
  MdFlight,
  MdHotel,
  MdHome,
} from "react-icons/md";

export const headerLinks = [
  { title: "Travel", href: "/travel", icon: MdCardTravel },
  { title: "Explore", href: "/travel/explore", icon: MdOutlineTravelExplore },
  { title: "Flights", href: "/travel/flights", icon: MdFlight },
  { title: "Hotels", href: "/travel/hotels", icon: MdHotel },
  {
    title: "Vacation rentals",
    href: "/travel/vacation-rentals",
    icon: MdHome,
  },
];
