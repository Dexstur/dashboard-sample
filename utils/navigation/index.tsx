import { RiHome2Fill } from "react-icons/ri";
export const NavigationItems: SideBarItem[] = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: <RiHome2Fill />,
  },
  {
    name: "Products",
    route: "/products",
    icon: <RiHome2Fill />,
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
    icon: <RiHome2Fill />,
  },
];
