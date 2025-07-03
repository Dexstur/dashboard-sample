import { RiHome2Fill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { TbReport } from "react-icons/tb";

export const NavigationItems: SideBarItem[] = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: <RiHome2Fill />,
  },
  {
    name: "Products",
    route: "/products",
    icon: <AiFillProduct />,
    children: [
      {
        name: "All",
        route: "/products",
      },
      {
        name: "Prototypes",
        route: "/products/prototypes",
      },
    ],
  },
  {
    name: "Reports",
    route: "/reports",
    icon: <TbReport />,
  },
];
