// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import russianMessages from 'ra-language-russian';

export const ru = {
  ...russianMessages,
  'ra.configurable.customize': 'Конфигурировать',
  resources: {
    users: {
      name: 'Пользователь |||| Пользователи',
      fields: {
        username: 'Имя пользователя',
        email: 'Электронная почта',
        isAdmin: 'Админ',
        createdAt: 'Создан в',
        updatedAt: 'Изменён в',
      },
    },
    collections: {
      name: 'Коллекция |||| Коллекции',
      fields: {
        title: 'Название',
        description: 'Описание',
        userId: 'Пользователь',
        subjectId: 'Тема',
        image: 'Изображение',
        customFields: 'Дополнительные поля',
      },
    },
    items: {
      name: 'Предмет |||| Предметы',
      fields: {
        title: 'Название',
        description: 'Описание',
        collectionId: 'Коллекция',
        customFields: 'Дополнительные поля',
      },
    },
    subjects: {
      name: 'Тема |||| Темы',
      fields: {
        title: 'Название',
        description: 'Описание',
      },
    },
    comments: {
      name: 'Комментарий |||| Комментарии',
      fields: {
        text: 'Содержание',
        userId: 'Пользователь',
        itemId: 'Предмет',
      },
    },
    likes: {
      name: 'Отметка нравится |||| Отметки нравится',
      fields: {
        userId: 'Пользователь',
        itemId: 'Предмет',
      },
    },
    tags: {
      name: 'Тэг |||| Тэги',
      fields: {
        title: 'Название',
      },
    },
  },
  'header-title': 'СВЕТЛАЯ И ТЕМНАЯ ТЕМА',
  pages: {
    notFound: {
      notFoundMsg: 'Страница не найдена',
      oops: 'Упс',
      msg: 'Страницы, которую вы ищете, не существует',
      goHome: 'На главную',
    },
  },
  components: {
    header: {
      search: 'Поиск',
    },
  },
  common: {
    lang: 'Язык',
    collections: 'Коллекции',
    collection: 'Коллекция',
    title: 'Название',
    tags: 'Теги',
    createdAt: 'Создан',
    view: 'Просмотреть',
    perPage: 'Строк на странице',
    findColumn: 'Найти колонку',
    columnTitle: 'Название колонки',
    author: 'Автор',
    item: 'Предмет',
    biggestCollections: 'Самые большие коллекции',
    latest: 'Последние добавленные предметы',
    actions: {
      delete: {
        title: 'Вы уверены',
        collection: 'Вы хотите удалить коллекцию',
      },
      logout: {
        dialog: 'Вы действительно хотите выйти из аккаунта',
      },
    },
  },
  mui: {
    dataGrid: {
      density: 'Размер',
      densityLabel: 'Размер',
      densityCompact: 'Мальнький',
      densityStandard: 'Средний',
      densityComfortable: 'Большой',

      hideAll: 'Скрыть все',
      showAll: 'Показать все',
      columns: 'Колонки',

      filters: 'Фильтры',
      filterBefore: 'До',
      filterContain: 'Содержит',
      filterAfter: 'После',
      filterEquals: 'Равно',
      filterEndsWith: 'Оканчивается на',
      filterIsEmpty: 'Пустое',
      filterNot: 'Не',
      filterStartWith: 'Начинается на',
      filterIsNotEmpty: 'Не пустое',
      filterIsAnyOf: 'Любой из',
      filterInput: 'Значение',

      export: 'Экспорт',
      exportPrint: 'Распечатать',
      exportCSV: 'Скачать CSV',
    },
  },
};
