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
    },
    tags: {
      name: "Тэг |||| Тэгі",
      fields: {
        title: "Назва"
      }
    }
  },
  "header-title": "Светлая і цёмная тэма",
  pages: {
    notFound: {
      notFoundMsg: "Старонка не знойдзена",
      oops: "Упс",
      msg: "Старонкі, якую вы шукаеце, не існуе",
      goHome: "На галоўную"
    }
  },
  components: {
    header: {
      search: "Пошук"
    }
  },
  common: {
    lang: "Мова",
    collections: "Калекцыі",
    collection: "Калекцыя",
    title: "Назва",
    tags: "Тэгі",
    createdAt: "Створаны",
    view: "Прагледзець",
    perPage: "Радок на старонцы",
    findColumn: "Знайсці калонку",
    columnTitle: "Назва калонкі"
  },
  mui: {
    dataGrid: {
      density: "Памер",
      densityLabel: "Памер",
      densityCompact: "Маленькі",
      densityStandard: "Сярэдні",
      densityComfortable: "Вялікі",

      hideAll: "Схаваць усё",
      showAll: "Паказаць усе",
      columns: "Калонкі",

      filters: "Фільтры",
      filterBefore: "Да",
      filterContain: "Змяшчае",
      filterAfter: "Пасля",
      filterEquals: "Роўна",
      filterEndsWith: "Сканчаецца на",
      filterIsEmpty: "Пустое",
      filterNot: "Ня",
      filterStartWith: "Пачынаецца на",
      filterIsNotEmpty: "Ня пустое",
      filterIsAnyOf: "Любы з",
      filterInput: "Значэнне",

      export: "Экспарт",
      exportPrint: "Надрукаваць",
      exportCSV: "Спампаваць CSV"
    }
  }
}