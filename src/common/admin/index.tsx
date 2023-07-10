import {Admin, fetchUtils, ListGuesser, Resource} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import {UserCreate, UserEdit} from "./users";
import {config} from "../../config";
import {CollectionCreate, CollectionEdit, CollectionList} from "./collections";

export const AdminDashboard = () => {
  return (
    <Admin
      basename={"/admin"}
      dataProvider={simpleRestProvider(config.API_URL, fetchUtils.fetchJson, 'X-Total-Count')}
      defaultTheme={"light"}
    >
      <Resource name="users" list={ListGuesser} edit={UserEdit} create={UserCreate}/>
      <Resource name={"collections"} list={CollectionList} edit={CollectionEdit} create={CollectionCreate}/>
    </Admin>
  );
}
