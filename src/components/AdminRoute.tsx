import {useContext, useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import {AuthContext} from "../shared/contexts/AuthContext";
import axios from "axios";
import {usersUrl} from "../shared/constants/endpoints";
import {NotFound} from "../common/pages/NotFound";

export const AdminRoute = () => {
  const {user} = useContext(AuthContext);
  const [userIsAdmin, setUserIsAdmin] = useState(user?.isAdmin)

  useEffect(() => {
    axios.get(`${usersUrl}/${user.userId}`).then(r => {
      setUserIsAdmin(r.data.isAdmin)
    })
  })

  return userIsAdmin ? <Outlet /> : <NotFound />;
};