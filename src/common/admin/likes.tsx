import { Create, Datagrid, Edit, List, ReferenceField, ReferenceInput, SimpleForm, TextField } from 'react-admin';

export const LikesList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source={'id'} />
        <ReferenceField source={'userId'} reference={'users'} />
        <ReferenceField source={'itemId'} reference={'items'} />
      </Datagrid>
    </List>
  );
};

export const LikeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" name={'users'} />
        <ReferenceInput source="itemId" reference="items" name={'items'} />
      </SimpleForm>
    </Create>
  );
};

export const LikeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" name={'users'} />
        <ReferenceInput source="itemId" reference="items" name={'items'} />
      </SimpleForm>
    </Edit>
  );
};
