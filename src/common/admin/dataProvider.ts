import {CreateParams, fetchUtils, UpdateParams, withLifecycleCallbacks} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {config} from "../../config.js";

const imageHandler = async (params: CreateParams | UpdateParams) => {
  let image = params.data?.image
  image = image ? {
    src: await convertFileToBase64(image),
    title: image.title
  } : null

  return {
    ...params,
    data: {
      ...params.data,
      image
    }
  }
}

const dataProvider = withLifecycleCallbacks(simpleRestProvider(config.API_URL, fetchUtils.fetchJson, 'X-Total-Count'), [{
  resource: "collections",
  beforeCreate: async (params) => await imageHandler(params),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  beforeUpdate: async (params) => await imageHandler(params)
}]);


const convertFileToBase64 = (file: {rawFile: Blob}) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default dataProvider;