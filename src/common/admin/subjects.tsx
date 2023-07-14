import {Edit, Create, SimpleForm, TextInput} from "react-admin"


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