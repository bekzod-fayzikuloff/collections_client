import polishMessages from "ra-language-polish";

export const pl = {
  ...polishMessages,
  resources: {
    users: {
      name: "Użytkownik |||| Użytkowników",
      fields: {
        username: "Nazwa użytkownika",
        email: "Poczta elektroniczna",
        isAdmin: "Zarządca",
        createdAt: "Założona w",
        updatedAt: "Zmieniono na"
      }
    },
    collections: {
      name: "Kolekcja |||| Kolekcje",
      fields: {
        title: "Tytuł",
        description: "Opis",
        userId: "Użytkownik",
        subjectId: "Temat",
        image: "Obraz",
        customFields: "Dodatkowe obszary",
      }
    },
    items: {
      name: "Przedmiot |||| Przedmioty",
      fields: {
        title: "Tytuł",
        description: "Opis",
        collectionId: "Kolekcja",
        customFields: "Dodatkowe obszary",
      }
    },
    subjects: {
      name: "Temat |||| Tematy",
      fields: {
        title: "Tytuł",
        description: "Opis"
      }
    },
    comments: {
      name: "Komentarz |||| Komentarze",
      fields: {
        text: "Spis treści",
        userId: "Użytkownik",
        itemId: "Przedmiot"
      }
    },
    likes: {
      name: "Mark lubi |||| Ulubione",
      fields: {
        userId: "Użytkownik",
        itemId: "Przedmiot"
      }
    },
    tags: {
      name: "Etykietka |||| Tagi",
      fields: {
        title: "Tytuł"
      }
    }
  },
  "ra.configurable.customize": "Skonfiguruj",
  "header-title": "JASNY I CIEMNY TEMAT",
  pages: {
    notFound: {
      notFoundMsg: "Nie znaleziono strony",
      oops: "Coś nie tak",
      msg: "Strona, której szukasz, nie istnieje",
      goHome: "Strona główna"
    }
  },
  components: {
    header: {
      search: "Szukaj"
    }
  },
  common: {
    lang: "Język",
    collections: "Kolekcje",
    collection: "Kolekcja",
    title: "Nazwa",
    tags: "Tagi",
    createdAt: "Utworzony",
    view: "Pogląd",
    perPage: "Linie na stronę",
    findColumn: "Znajdź kolumnę",
    columnTitle: "Nazwa kolumny",
    author: "Autor",
    item: "Przedmiot",
    biggestCollections: "Największe kolekcje",
    actions: {
      delete: {
        title: "Jesteś pewny",
        collection: "Czy chcesz usunąć kolekcję"
      },
      logout: {
        dialog: "Czy na pewno chcesz się wylogować ze swojego konta?"
      }
    }
  },
  mui: {
    dataGrid: {
      density: "Rozmiar",
      densityLabel: "Rozmiar",
      densityCompact: "Mały",
      densityStandard: "Przeciętny",
      densityComfortable: "Duży",

      hideAll: "Schowaj wszystko",
      showAll: "Pokaż wszystko",
      columns: "Głośniki",

      filters: "Filtry",
      filterBefore: "Zanim",
      filterContain: "Zawiera",
      filterAfter: "Po",
      filterEquals: "Równa się",
      filterEndsWith: "Kończy się w",
      filterIsEmpty: "Pusty",
      filterNot: "Nie",
      filterStartWith: "Zaczynać z",
      filterIsNotEmpty: "Nie pusty",
      filterIsAnyOf: "Którykolwiek z",
      filterInput: "Oznaczający",

      export: "Eksport",
      exportPrint: "Wydrukować",
      exportCSV: "Pobierać CSV"
    }
  }
}