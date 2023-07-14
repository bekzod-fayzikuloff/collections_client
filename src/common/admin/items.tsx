import {
  ArrayInput,
  Create, Datagrid,
  Edit, List, ReferenceField,
  ReferenceInput,
  required,
  SimpleForm,
  SimpleFormIterator, TextField,
  TextInput
} from "react-admin";


export const ItemsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source={'id'}/>
        <TextField source={'title'}/>
        <ReferenceField source={'collectionId'} reference={"collections"}/>
      </Datagrid>
    </List>
  )
}

export const ItemEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id"  name={"id"}/>

        <ReferenceInput source="collectionId" reference="collections" name={"collections"}/>

        <ArrayInput
          source="customFields" name={"customFields"}>
          <SimpleFormIterator>
            <TextInput source="type" />
            <TextInput source="value" />
          </SimpleFormIterator>
        </ArrayInput>

      </SimpleForm>

    </Edit>
  )
}

export const ItemCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput validate={required()} source="title"  name={"title"}/>
        <ReferenceInput validate={required()} source="collectionId" reference="collections" name={"collections"}/>

        <ArrayInput
          source="customFields" name={"customFields"}>
          <SimpleFormIterator>
            <TextInput source="type" />
            <TextInput source="value" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  )
}