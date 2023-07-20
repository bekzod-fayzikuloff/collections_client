import englishMessages from "ra-language-english";

export const en = {
  ...englishMessages,
  admin: {
    collections: "Collections"
  },
  "header-title": "CollectionsM",
  pages: {
    notFound: {
      notFoundMsg: "Page not found",
      oops: "Opps",
      msg: "The page you’re looking for doesn’t exist",
      goHome: "Go Home"
    }
  },
  components: {
    header: {
      search: "Search"
    }
  },
  common: {
    lang: "Language",
    collections: "Collections",
    collection: "Collection",
    title: "Title",
    tags: "Tags",
    createdAt: "Created At",
    view: "View",
    perPage: "Rows per page",
    findColumn: "Find Column",
    columnTitle: "Column Title",
    author: "Author",
    item: "Item",
    biggestCollections: "The largest collections",
    latest: "Recently added items",
    actions: {
      delete: {
        title: "Are you sure",
        collection: "Do you want to remove the collection"
      },
      logout: {
        dialog: "Are you sure you want to log out of your account?"
      }
    }
  },
  mui: {
    dataGrid: {
      density: "Size",
      densityLabel: "Size",
      densityCompact: "Small",
      densityStandard: "Medium",
      densityComfortable: "Large",

      hideAll: "Hide all",
      showAll: "Show all",
      columns: "Columns",

      filters: "Filters",
      filterBefore: "Before",
      filterContain: "Contain",
      filterAfter: "After",
      filterEquals: "Equals",
      filterEndsWith: "End with",
      filterIsEmpty: "Is empty",
      filterNot: "Not",
      filterStartWith: "Start with",
      filterIsNotEmpty: "Is not empty",
      filterIsAnyOf: "Is any of",
      filterInput: "Value",

      export: "Export",
      exportPrint: "Print",
      exportCSV: "Download CSV"
    }
  }
}