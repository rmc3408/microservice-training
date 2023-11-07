import React, { useState } from "react";
import { storeSelector } from "root/store/useStore";
import Login from "../components/Login/Login";
import Account from "root/components/Account";


const AccountDetails = () => {
  const session = storeSelector(state => state.session);

  console.log('ACCOUNT DETAILS COMPONENT', session)
  if (session.id !== '') return <Account />;

  return <Login />
};

export default AccountDetails;