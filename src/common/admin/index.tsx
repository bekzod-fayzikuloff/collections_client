import {Admin, ListGuesser, Resource} from "react-admin";
import {UserCreate, UserEdit} from "./users";
import {CollectionCreate, CollectionEdit, CollectionList} from "./collections";
import dataProvider from "./dataProvider";
import {CommentCreate, CommentEdit, CommentList} from "./comments";
import {LikeCreate, LikeEdit} from "./likes";
import {CreateSubject, EditSubject} from "./subjects";

export const AdminDashboard = () => {
  return (
    <Admin
      basename={"/admin"}
      dataProvider={dataProvider}
      defaultTheme={"light"}
    >
      <Resource name="users" list={ListGuesser} edit={UserEdit} create={UserCreate}/>
      <Resource name={"collections"} list={CollectionList} edit={CollectionEdit} create={CollectionCreate}/>
      <Resource name={"items"} list={ListGuesser} />
      <Resource name={"subjects"} list={ListGuesser} edit={EditSubject} create={CreateSubject} />
      <Resource name={"comments"} list={CommentList} edit={CommentEdit} create={CommentCreate} />
      <Resource name={"likes"} list={ListGuesser} edit={LikeEdit} create={LikeCreate} />
    </Admin>
  );
}
