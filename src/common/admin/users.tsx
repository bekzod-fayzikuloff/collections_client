import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  DateTimeInput,
  Edit,
  List,
  PasswordInput,
  required,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const UsersList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="email" />
        <BooleanField source={'isAdmin'} />
      </Datagrid>
    </List>
  );
};

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label={'id'} source={'id'} name={'id'} />
      <TextInput name={'username'} source={'username'} validate={required()} />
      <TextInput disabled name={'email'} source={'email'} />
      <BooleanInput name={'isAdmin'} source={'isAdmin'} options={{}} />
      <DateTimeInput disabled name={'createdAt'} source={'createdAt'} />
      <DateTimeInput disabled name={'updatedAt'} source="updatedAt" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput name={'username'} source={'username'} validate={required()} />
      <TextInput name={'email'} source={'email'} validate={required()} />
      <PasswordInput name={'password'} source={'password'} validate={required()} />
    </SimpleForm>
  </Create>
);
