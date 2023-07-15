import {Admin, Resource} from "react-admin";
import {UserCreate, UserEdit, UsersList} from "./users";
import {CollectionCreate, CollectionEdit, CollectionList} from "./collections";
import dataProvider from "./dataProvider";
import {CommentCreate, CommentEdit, CommentList} from "./comments";
import {LikeCreate, LikeEdit, LikesList} from "./likes";
import {CreateSubject, EditSubject, SubjectsList} from "./subjects";
import {Dashboard} from "./dashboard";
import {ItemCreate, ItemEdit, ItemsList} from "./items";
import {Theme} from "../../shared/types/theme";
import {i18nProvider} from "./i18nProvider";
import {CustomLayout} from "./layout";


export const AdminDashboard = (props: {theme: Theme}) => {
  return (
    <Admin
      basename={"/admin"}
      dataProvider={dataProvider}
      defaultTheme={props.theme}
      dashboard={Dashboard}
      i18nProvider={i18nProvider}
      layout={CustomLayout}
    >
      <Resource name="users" list={UsersList} edit={UserEdit} create={UserCreate}/>
      <Resource name={"collections"} list={CollectionList} edit={CollectionEdit} create={CollectionCreate}/>
      <Resource name={"items"} list={ItemsList} edit={ItemEdit} create={ItemCreate}/>
      <Resource name={"subjects"} list={SubjectsList} edit={EditSubject} create={CreateSubject} />
      <Resource name={"comments"} list={CommentList} edit={CommentEdit} create={CommentCreate} />
      <Resource name={"likes"} list={LikesList} edit={LikeEdit} create={LikeCreate} />
    </Admin>
  );
}
