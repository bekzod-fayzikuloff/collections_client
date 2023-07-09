import {BooleanInput, DateTimeInput, Edit, required, SimpleForm, TextInput} from "react-admin";

export const UserEdit = () => (
  <Edit>
      <SimpleForm>
          <TextInput disabled label={"id"} source={"id"} name={"id"}/>
          <TextInput name={"username"} source={"username"} validate={required()} />
          <TextInput disabled name={"email"} source={"email"} />
          <BooleanInput name={"isAdmin"} source={"isAdmin"} options={{}}/>
          <DateTimeInput disabled name={"createdAt"} source={"createdAt"} />
          <DateTimeInput disabled name={"updatedAt"} source="updatedAt" />
      </SimpleForm>
  </Edit>
)