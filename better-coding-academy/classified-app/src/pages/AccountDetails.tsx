import React, { useState } from "react";
import { storeSelector } from "root/store/useStore";
import Login from "root/components/Login";
import Account from "root/components/Account";
import SignUp from "root/components/SignUp";


const AccountDetails = () => {
  const session = storeSelector(state => state.session);
  const [ isUp, setSignUp] = useState<boolean>(false)

  if (session.id !== '') return <Account />;

  return isUp ? <SignUp signup={setSignUp} /> : <Login signup={setSignUp}/>
};

export default AccountDetails;