import {Create, Edit, ReferenceInput, SimpleForm} from "react-admin";

export const LikeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" name={"users"}/>
        <ReferenceInput source="itemId" reference="items" name={"items"}/>
      </SimpleForm>
    </Create>
  )
}

export const LikeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" name={"users"}/>
        <ReferenceInput source="itemId" reference="items" name={"items"}/>
      </SimpleForm>
    </Edit>
  )
}