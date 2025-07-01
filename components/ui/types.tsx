type AppBtnProps = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "full";
  color: "primary" | "secondary" | "tertiary" | "alt";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "contained" | "outlined" | "text";
};

type AppHeaderProps = {
  toggle: () => void;
};

type AppSidebarProps = {
  toggle: () => void;
};

type AdminHeaderProps = {
  toggle: () => void;
  toggleProfile: () => void;
  profile: boolean;
};

type AdminSidebarProps = {
  toggle: () => void;
};

type NavItemProps = {
  nav: SideBarItem;
  path: string;
};

type CountCardProps = {
  count: number;
  currency?: boolean;
  title: string;
  icon?: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "alt";
  loading: boolean;
};
