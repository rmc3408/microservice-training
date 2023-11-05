import React from "react";
import Login from "root/modules/auth/Login";
import styled from "styled-components";
import List from "./List";


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
  console.log("ROOT")

  return (
    <Wrapper>
      <Container>
        <Content>
          <h1>LISTING</h1>
          <List />
        </Content>
        <Sidebar>
          <h1>Account</h1>
          <Login />
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Root;