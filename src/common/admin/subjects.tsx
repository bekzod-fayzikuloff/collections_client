import {Edit, Create, SimpleForm, TextInput, List, TextField, Datagrid} from "react-admin"

export const SubjectsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source={"id"}/>
        <TextField source={"title"}/>
      </Datagrid>
    </List>
  )
}


export const EditSubject = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput name={"title"} source={"title"} />
        <TextInput name={"description"} source={"description"} />
      </SimpleForm>
    </Edit>
  )
}

export const CreateSubject = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput name={"title"} source={"title"} />
        <TextInput name={"description"} source={"description"} />
      </SimpleForm>
    </Create>
  )
}