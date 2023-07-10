import {
  ArrayInput,
  Create,
  Edit,
  FileInput,
  ReferenceInput,
  required,
  SimpleForm, SimpleFormIterator,
  TextInput
} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";

import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const CollectionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users" />
      <ReferenceField source="subjectId" reference="subjects" />
      <TextField source="image" />
    </Datagrid>
  </List>
);

export const CollectionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput name={"title"} source={"title"} validate={required()}/>
        <RichTextInput name={"description"} source={"description"}/>

        <ReferenceInput source="userId" reference="users" name={"users"}/>
        <ReferenceInput source="subjectId" reference="subjects" name={"subjects"}/>

        <ArrayInput
          source="customFields" name={"customFields"}>
          <SimpleFormIterator>
            <TextInput source="fieldName" />
            <TextInput source="fieldType" />
          </SimpleFormIterator>
        </ArrayInput>

      </SimpleForm>
    </Edit>
  )
}



export const CollectionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput name={"title"} source={"title"} validate={required()}/>
      <RichTextInput name={"description"} source={"description"}/>
      <FileInput name={"image"} source={"image"} options={{}}/>

      <ReferenceInput source="userId" reference="users" name={"users"}/>
      <ReferenceInput source="subjectId" reference="subjects" name={"subjects"}/>

      <ArrayInput
        source="customFields"
        validate={[required()]}
      >
        <SimpleFormIterator>
          <TextInput source="fieldName" defaultValue="" />
          <TextInput source="fieldType" defaultValue="" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
)