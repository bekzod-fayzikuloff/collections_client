import {Admin, fetchUtils, ListGuesser, Resource} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import {UserEdit} from "./users";
import {config} from "../../config";

export const AdminDashboard = () => {
  return (
    <Admin
      basename={"/admin"}
      dataProvider={simpleRestProvider(config.API_URL, fetchUtils.fetchJson, 'X-Total-Count')}
      defaultTheme={"dark"}
    >
      <Resource name="users" list={ListGuesser} edit={UserEdit}/>
    </Admin>
  );
}
