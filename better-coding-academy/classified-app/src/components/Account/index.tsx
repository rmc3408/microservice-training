import styled from "styled-components";
import { storeSelector, storeDispatch } from "root/store/useStore";
import { clear } from "root/store/slice";


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
  const session = storeSelector(state => state.session);

  return (
    <Wrapper>
      Logged in as
      <Email>{session.user.email}</Email>
      <LogoutLink
        onClick={evt => {
          evt.preventDefault();
          dispatch(clear());
        }}
      >
        (Logout)
      </LogoutLink>
    </Wrapper>
  );
};

export default Account;