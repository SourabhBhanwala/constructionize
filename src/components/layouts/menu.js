const menus = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },

  {
    id: 2,
    name: "Services",
    link: "/services",
    namesub: [
      {
        id: 1,
        sub: "Services",
        links: "/services",
      },
      {
        id: 2,
        sub: "Services Detail",
        links: "/services-detail",
      },
    ],
  },
  {
    id: 3,
    name: "Projects",
    link: "/project",
    namesub: [
      {
        id: 1,
        sub: "Projects",
        links: "/project",
      },
      {
        id: 2,
        sub: "Projects Detail",
        links: "/project-detail",
      },
    ],
  },
  {
    id: 4,
    name: "About Us",
    link: "/about-us",
    namesub: [
      {
        id: 1,
        sub: "About Us",
        links: "/about-us",
      },
      {
        id: 2,
        sub: "About Detail",
        links: "/about-detail",
      },
      {
        id: 3,
        sub: "About Team",
        links: "/about-team",
      },
    ],
  },

  {
    id: 5,
    name: "Contact",
    link: "/contact-01",
  },
];

export default menus;
