import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  Create,
} from 'react-admin';

export const CommentList = () => {
  return (
    <List>
      <Datagrid rowClick={'edit'}>
        <TextField source={'id'} />
        <TextField source="text" />
        <ReferenceField source="userId" reference="users" />
        <ReferenceField source="itemId" reference="items" />
      </Datagrid>
    </List>
  );
};

export const CommentEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled label={'id'} source={'id'} name={'id'} />
        <TextInput name={'text'} source={'text'} validate={required()} />
        <ReferenceInput source="userId" reference="users" name={'users'} />
        <ReferenceInput source="itemId" reference="items" name={'items'} />
      </SimpleForm>
    </Edit>
  );
};

export const CommentCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput name={'text'} source={'text'} validate={required()} />
        <ReferenceInput source="userId" reference="users" name={'users'} />
        <ReferenceInput source="itemId" reference="items" name={'items'} />
      </SimpleForm>
    </Create>
  );
};
