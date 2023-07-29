import { Admin, Resource } from 'react-admin';
import { UserCreate, UserEdit, UsersList } from './users';
import { CollectionCreate, CollectionEdit, CollectionList } from './collections';
import dataProvider from './dataProvider';
import { CommentCreate, CommentEdit, CommentList } from './comments';
import { LikeCreate, LikeEdit, LikesList } from './likes';
import { CreateSubject, EditSubject, SubjectsList } from './subjects';
import { Dashboard } from './dashboard';
import { ItemCreate, ItemEdit, ItemsList } from './items';
import { i18nProvider } from './i18nProvider';
import { CustomLayout } from './layout';
import { useContext } from 'react';
import { ThemeContext } from '../../shared/contexts/theme';
import { Theme } from '../../shared/types/theme';
import { CreateTag, TagsList } from './tags';

export const AdminDashboard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Admin
      basename={'/admin'}
      dataProvider={dataProvider}
      defaultTheme={theme as Theme}
      dashboard={Dashboard}
      i18nProvider={i18nProvider}
      layout={CustomLayout}
    >
      <Resource name="users" list={UsersList} edit={UserEdit} create={UserCreate} />
      <Resource name={'collections'} list={CollectionList} edit={CollectionEdit} create={CollectionCreate} />
      <Resource name={'items'} list={ItemsList} edit={ItemEdit} create={ItemCreate} />
      <Resource name={'tags'} list={TagsList} create={CreateTag} />
      <Resource name={'subjects'} list={SubjectsList} edit={EditSubject} create={CreateSubject} />
      <Resource name={'comments'} list={CommentList} edit={CommentEdit} create={CommentCreate} />
      <Resource name={'likes'} list={LikesList} edit={LikeEdit} create={LikeCreate} />
    </Admin>
  );
};
