export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Men",
    href: "/category/men"
  },
  {
    label: "Women",
    href: "/category/women"
  },
  {
    label: "Kids",
    href: "/category/kid",
  },
  {
    label: "Unisex",
    href: "/category/unisex",
  },
  /* {
    label: "Men",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/category/men",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  }, */
];
