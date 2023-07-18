import {Create, Datagrid, List, SimpleForm, TextField, TextInput} from "react-admin";

export const TagsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source={"id"}/>
        <TextField source={"title"}/>
      </Datagrid>
    </List>
  )
}

export const CreateTag = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput name={"title"} source={"title"} />
      </SimpleForm>
    </Create>
  )
}