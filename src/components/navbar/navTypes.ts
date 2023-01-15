export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
<<<<<<< HEAD
    label: "Men",
    href: "/category/men",
  },
  {
    label: "Women",
    href: "/category/women",
  },
  {
    label: "Kids",
    href: "/category/kid",
  },
  {
    label: "Unisex",
    href: "/category/unisex",
  },
  {
    label: "Account",
    children: [
      {
        label: "Profile",
        subLabel: "Explore your Profile",
        href: "#profile",
      },
      {
        label: "My orders",
        subLabel: "Watch your orders",
        href: "#orders",
      },
      {
        label: "Logout",
        subLabel: "Logout from your account",
        href: "",
      },
    ],
  },
];

export const NavItemsAdmin: Array<NavItem> = [
  {
    label: "Admin",
    children: [
      {
        label: "Admin Panel",
        href: "#cpanel",
      },
      {
        label: "Orders",
        href: "#cpanelorders",
      },
      {
        label: "Users",
        href: "#users",
      },
    ],
=======
    label: "Man",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Women",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Kids",
    href: "#",
>>>>>>> 779b262 (merge)
  },
];
