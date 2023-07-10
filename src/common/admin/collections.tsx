import {Edit, ReferenceInput, required, SimpleForm, TextInput} from "react-admin";

export const CollectionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput name={"title"} source={"title"} validate={required()} />
      <TextInput name={"description"} source={"description"} />
      {/*<FileInput name={"image"} source={"image"} options={{}}/>*/}
      <ReferenceInput source="userId" reference="users"  name={"users"}/>
    </SimpleForm>
  </Edit>
)