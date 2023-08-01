export const menuOptions = [
  { title: "Home", url: "/" },
  {
    title: "Pokemons",
    url: "/Pokemons",
    submenu: [
      { title: "Pokemon Inspector", url: "/pokemon-inspector" },
      {
        title: "My Pokemons",
        url: "/my-pokemons",
        submenu: [
          { title: "Create Pokemon", url: "/create-pokemon" },
          { title: "Delete Pokemon", url: "/delete-pokemon" },
          { title: "Pokemon List", url: "/pokemon-list" },
        ],
      },
    ],
  },
  {
    title: "Galery",
    url: "/Galery",
    submenu: [
      { title: "Videos", url: "/videos" },
      { title: "Images", url: "/images" },
      { title: "GIFs", url: "/gifs" },
    ],
  },
  { title: "About Me", url: "/about-me" },
  { title: "FAQ", url: "/faq" },
];
