import { useForm, SubmitHandler } from 'react-hook-form'
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import TextInput from "root/components/shared/TextInput";
import { UserInputs } from '../Account';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from '@apollo/client';
import { storeDispatch } from 'root/store/useStore';
import { set } from 'root/store/slice';
import { CREATE_USER_SESSION } from 'root/api/mutations/user';

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const SignUpButton = styled.input`
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

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required(),
  confirmPassword: yup.string().required().test('Same', '${path} not same as password', (value, testContext) => {
    return value === testContext.parent.password
  })
});


type UserUpInput = UserInputs & { confirmPassword: string }
type SignUpProps = { signup: Dispatch<SetStateAction<boolean>> }

const SignUp = ({ signup }: SignUpProps) => {
  const { register, handleSubmit, formState, reset } = useForm<UserUpInput>({ resolver: yupResolver(schema) })
  const dispatch = storeDispatch()
  const [signUpCreation] = useMutation(CREATE_USER_SESSION);

  const onSubmit: SubmitHandler<UserUpInput> = async (data) => {
    const result = await signUpCreation({ variables: { email: data.email, password: data.password } });
    dispatch(set(result.data.createSession))
    reset();
    signup(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <LabelText>Email</LabelText>
        <TextInput disabled={formState.isSubmitting} {...register("email")} />
        <p>{formState.errors.email?.message}</p>
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <TextInput disabled={formState.isSubmitting} {...register("password")} />
      </Label>
      <Label>
        <LabelText>Confirm Password</LabelText>
        <TextInput disabled={formState.isSubmitting} {...register("confirmPassword")} />
        <p>{formState.errors.confirmPassword?.message}</p>
      </Label>
      <SignUpButton disabled={formState.isSubmitting || !formState.isValid} type="submit" value='SignUP' />
      <OrSignUp>
        <a href="#" onClick={() => signup(false)}>Login</a>
      </OrSignUp>
    </form>
  );
};

export default SignUp;
