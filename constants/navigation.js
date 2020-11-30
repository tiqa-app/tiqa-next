import InfoIcon from "../components/icons/InfoIcon";
import MessageIcon from "../components/icons/MessageIcon";
import StarIcon from "../components/icons/StarIcon";

export const HOME_MENU_ITEMS = [
  {
    description: "Discover interview questions and add them to your favorites",
    path: "/topics",
    title: "Topics",
  },
  {
    description: "See the list of questions that you marked as your favorites",
    path: "/favorites",
    title: "Your favorites",
  },
];

export const MENU_ITEMS = [
  {
    key: "main",
    label: "Main",
    links: [
      {
        icon: MessageIcon,
        key: "topics",
        label: "Topics",
        path: "/topics",
      },
      {
        icon: StarIcon,
        key: "favorites",
        label: "Favorites",
        path: "/favorites",
      },
    ],
  },
  {
    key: "other",
    label: "Other",
    links: [
      {
        icon: InfoIcon,
        key: "about",
        label: "About",
        path: "/about",
      },
    ],
  },
];
