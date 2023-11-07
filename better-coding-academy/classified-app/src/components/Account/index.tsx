import styled from "styled-components";
import { storeSelector, storeDispatch } from "root/store/useStore";
import { clear } from "root/store/slice";
import { useMutation } from "@apollo/client";
import { SESSION_CLEAR } from "root/api/mutations/user";


export type UserInputs = {
  email: string
  password: string
}

const Email = styled.div`
  color: ${props => props.theme.nero};
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const LogoutLink = styled.a.attrs({ href: "#" })`
  color: blue;
  display: block;
  margin-top: 0.25rem;
`;

const Wrapper = styled.div`
  color: ${props => props.theme.mortar};
  font-size: 0.9rem;
`;

const Account = () => {
  const dispatch = storeDispatch();
  const [deleteSession] = useMutation(SESSION_CLEAR);
  const session = storeSelector(state => state.session);

  console.log("INSIDE LOGGED USER ACCOUNT", session)
  return (
    <Wrapper>
      Logged in as
      <Email>{session.user.email}</Email>
      <LogoutLink
        onClick={evt => {
          evt.preventDefault();
          dispatch(clear());
          deleteSession({ variables: { id: session.id }});
        }}
      >
        (Logout)
      </LogoutLink>
    </Wrapper>
  );
};

export default Account;