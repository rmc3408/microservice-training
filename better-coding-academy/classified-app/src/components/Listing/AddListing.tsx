import {useForm, SubmitHandler} from "react-hook-form";
import styled from "styled-components";
import Textarea from "root/components/shared/Textarea";
import TextInput from "root/components/shared/TextInput";
import { storeSelector } from "root/store/useStore";
import { useMutation } from "@apollo/client";
import { CREATE_LIST } from "root/api/mutations/user";
import { ALL_LISTING } from "root/api/queries/user";

const Button = styled.button`
  margin-top: 0.5rem;
`;

const Form = styled.form`
  background-color: ${props => props.theme.whiteSmoke};
  margin-top: 2rem;
`;

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

type PostCreating = {
  title: string
  description: string
}
const AddListing = () => {
  const { register, handleSubmit, formState, reset } = useForm<PostCreating>()
  const [ createListing ] = useMutation(CREATE_LIST , { refetchQueries: [ALL_LISTING]})
  const session = storeSelector(state => state.session);
  if (session.id == '') return <h1>Login to add listings.</h1>;

  const onSubmit: SubmitHandler<PostCreating> = async (data) => {
    await createListing({ variables: { description: data.description, title: data.title } });
    reset();
    //pushAddListing();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <LabelText>Title</LabelText>
        <TextInput disabled={formState.isSubmitting} {...register('title')} />
      </Label>
      <Label>
        <LabelText>Description</LabelText>
        <Textarea disabled={formState.isSubmitting} {...register('description')} />
      </Label>
      <Button disabled={formState.isSubmitting} type="submit">
        Add Listing
      </Button>
    </Form>
  );
};

export default AddListing;
