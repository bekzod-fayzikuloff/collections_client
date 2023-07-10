import {Admin, ListGuesser, Resource} from "react-admin";
import {UserCreate, UserEdit} from "./users";
import {CollectionCreate, CollectionEdit, CollectionList} from "./collections";
import dataProvider from "./dataProvider";

export const AdminDashboard = () => {
  return (
    <Admin
      basename={"/admin"}
      dataProvider={dataProvider}
      defaultTheme={"light"}
    >
      <Resource name="users" list={ListGuesser} edit={UserEdit} create={UserCreate}/>
      <Resource name={"collections"} list={CollectionList} edit={CollectionEdit} create={CollectionCreate}/>
    </Admin>
  );
}
