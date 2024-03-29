import { useMutation } from '@apollo/client';
import {useForm, SubmitHandler} from 'react-hook-form'
import styled from 'styled-components'
import TextInput from 'root/components/shared/TextInput'
import { SESSION_NEW } from 'root/api/mutations/user';
import { storeDispatch } from 'root/store/useStore';
import { set } from 'root/store/slice';
import { UserInputs } from '../Account';
import { Dispatch, SetStateAction } from 'react';



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

const OrSignUp = styled.span`
  margin-left: 0.9rem;
  font-size: 0.9rem;
`;

type LoginProps = {
  signup: Dispatch<SetStateAction<boolean>>
}

function Login({ signup }: LoginProps) {
  const [createSession, { data: dataSession }] = useMutation(SESSION_NEW);
  const dispatch = storeDispatch()

  const { register, handleSubmit, formState, watch } = useForm<UserInputs>()
  
  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    const result = await createSession({ variables: { email: data.email, password: data.password }})
    dispatch(set(result.data.createSession))
  }

  
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
      <OrSignUp>
        <a href='#' onClick={(e)=> {
          e.preventDefault()
          signup(true)
        }}>SignUp</a>
      </OrSignUp>
    </form>
  )
}

export default Login