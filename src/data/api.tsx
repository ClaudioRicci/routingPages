const dataAPI = [
  {
    path: "/page-a",
    linkTitle: "Page A",
    pageTitle: "Page A Title",
    pageDescription: "ipsum dolor sit amet...page A",
    table: {
      apiEndpoint: "/page-a-data.json",
      columns: [
        { title: "Name" },
        { title: "Email" },
        { title: "Location" },
        { title: "Is Online" }
      ]
    }
  },
  {
    path: "/page-b",
    linkTitle: "Page B`",
    pageTitle: "Page B Title",
    pageDescription: "ipsum dolor sit amet... page B",
    table: {
      apiEndpoint: "/page-b-data.json",
      columns: [
        { title: "Name" },
        { title: "Email" },
        { title: "Location" },
        { title: "Is Online" }
      ]
    }
  },
  {
    path: "/page-c",
    linkTitle: "Page C",
    pageTitle: "Page C Title",
    pageDescription: "ipsum dolor sit amet... page C",
    table: {
      apiEndpoint: "/page-c-data.json",
      columns: [
        { title: "Name" },
        { title: "Email" },
        { title: "Location" },
        { title: "Is Online" }
      ]
    }
  }
];

export default dataAPI;
