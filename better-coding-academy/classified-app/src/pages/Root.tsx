import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from "./List";
import { useQuery } from "@apollo/client";
import { SESSION } from "root/api/queries/user";
import { storeDispatch } from "root/store/useStore";
import { set } from 'root/store/slice'
import AccountDetails from "root/pages/AccountDetails";


const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 90vw;
`;

const Content = styled.div`
  flex: 1;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 20%;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const Root = () => {
  const { loading, error, data } = useQuery(SESSION);
  const dispatch = storeDispatch();
  
  if (loading) <h1>Loading...</h1>
  if (error) console.log(error)
  
  useEffect(() => {
    console.log('USEEFFECT', data)
    if (data?.oneSession) {
      dispatch(set(data.oneSession))
    }
  }, [data])

  console.log('ROOT COMPONENT', loading, error, data?.oneSession)
  

  return (
    <Wrapper>
      <Container>
        <Content>
          <h1>LISTING</h1>
          <List />
        </Content>
        <Sidebar>
          <h1>Account</h1>
          <AccountDetails />
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Root;