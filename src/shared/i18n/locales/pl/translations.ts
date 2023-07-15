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
        itemId: "Предмет"
      }
    }
  },
  "ra.configurable.customize": "Skonfiguruj"
}