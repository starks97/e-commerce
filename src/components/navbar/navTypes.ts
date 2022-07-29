export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
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
    label: "Open",
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
        label: "Sigin",
        subLabel: "Sigin in your account",
        href: "#sigin",
      },
      {
        label: "Logout",
        subLabel: "Logout from your account",
        href: "#logout",
      },
    ],
  },
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
  },
];
