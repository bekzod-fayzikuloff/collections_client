// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import belarusianMessages from 'ra-language-belarusian'

export const be = {
  ...belarusianMessages,
  "ra.configurable.customize": "Канфігураваць",
  resources: {
    users: {
      name: "Карыстальнік |||| Карыстальнікі",
      fields: {
        username: "Імя карыстальніка",
        email: "Электронная пошта",
        isAdmin: "Адмін",
        createdAt: "Створаны ў",
        updatedAt: "Зменены ў"
      }
    },
    collections: {
      name: "Калекцыя |||| Калекцыі",
      fields: {
        title: "Назва",
        description: "Апісанне",
        userId: "Карыстальнік",
        subjectId: "Тэма",
        image: "Малюнак",
        customFields: "Дадатковыя палі",
      }
    },
    items: {
      name: "Прадмет |||| Прадметы",
      fields: {
        title: "Назва",
        description: "Апісанне",
        collectionId: "Калекцыя",
        customFields: "Дадатковыя палі",
      }
    },
    subjects: {
      name: "Тэма |||| Тэмы",
      fields: {
        title: "Назва",
        description: "Апісанне"
      }
    },
    comments: {
      name: "Каментар |||| Каментары",
      fields: {
        text: "Змест",
        userId: "Карыстальнік",
        itemId: "Прадмет"
      }
    },
    likes: {
      name: "Адзнака падабаецца |||| Адзнакі падабаецца",
      fields: {
        userId: "Карыстальнік",
        itemId: "Прадмет"
      }
    }
  },
  "header-title": "Светлая і цёмная тэма"
}