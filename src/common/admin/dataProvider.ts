import {fetchUtils, withLifecycleCallbacks} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {config} from "../../config.js";

const dataProvider = withLifecycleCallbacks(simpleRestProvider(config.API_URL, fetchUtils.fetchJson, 'X-Total-Count'), [{
  resource: "collections",
  beforeUpdate: async (params) => {
    let image = params.data.image
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
}]);


const convertFileToBase64 = (file: {rawFile: Blob}) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default dataProvider;