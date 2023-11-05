import { useMutation, gql } from '@apollo/client';
import {useForm, SubmitHandler} from 'react-hook-form'
import styled from 'styled-components'
import TextInput from 'root/components/shared/TextInput'
import { CREATE_USER } from 'root/api/mutations/user';

type Inputs = {
  email: string
  password: string
}

const Label = styled.label`
  display: block;

  &:not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const LoginButton = styled.button`
    background-color:#0a0a23;
    color: #fff;
    border: none; 
    border-radius: 10px;
    padding: 15px;
    min-height: 30px;
    font-size: medium;
    min-width: 120px;
    margin-top: 0.75rem;
`;

// const OrSignUp = styled.span`
//   font-size: 0.9rem;
// `;

function Login() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState, watch } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createUser({ variables: { email: data.email, password: data.password }})
  }
  
  console.log("LOGIN", data, loading, error)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <LabelText>Email</LabelText>
        <TextInput disabled={formState.isSubmitting} {...register("email")} />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <TextInput disabled={formState.isSubmitting} { ...register("password") } />
      </Label>
      <LoginButton disabled={formState.isSubmitting} type="submit">
        Login
      </LoginButton>
    </form>
  )
}

export default Login