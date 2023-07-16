// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import russianMessages from 'ra-language-russian'

export const ru = {
  ...russianMessages,
  "ra.configurable.customize": "Конфигурировать",
  resources: {
    users: {
      name: "Пользователь |||| Пользователи",
      fields: {
        username: "Имя пользователя",
        email: "Электронная почта",
        isAdmin: "Админ",
        createdAt: "Создан в",
        updatedAt: "Изменён в"
      }
    },
    collections: {
      name: "Коллекция |||| Коллекции",
      fields: {
        title: "Название",
        description: "Описание",
        userId: "Пользователь",
        subjectId: "Тема",
        image: "Изображение",
        customFields: "Дополнительные поля",
      }
    },
    items: {
      name: "Предмет |||| Предметы",
      fields: {
        title: "Название",
        description: "Описание",
        collectionId: "Коллекция",
        customFields: "Дополнительные поля",
      }
    },
    subjects: {
      name: "Тема |||| Темы",
      fields: {
        title: "Название",
        description: "Описание"
      }
    },
    comments: {
      name: "Комментарий |||| Комментарии",
      fields: {
        text: "Содержание",
        userId: "Пользователь",
        itemId: "Предмет"
      }
    },
    likes: {
      name: "Отметка нравится |||| Отметки нравится",
      fields: {
        userId: "Пользователь",
        itemId: "Предмет"
      }
    }
  },
  "header-title": "СВЕТЛАЯ И ТЕМНАЯ ТЕМА",
  pages: {
    notFound: {
      notFoundMsg: "Страница не найдена",
      oops: "Упс",
      msg: "Страницы, которую вы ищете, не существует",
      goHome: "На главную"
    }
  }
}