import { ApolloServerErrorCode } from '@apollo/server/errors';

const formatGraphQLErrors = (formattedError, error) => {
  if (formattedError.extensions.code === ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED) {
    return {
      ...formattedError,
      message: "Your query doesn't match the schema. Try double-checking it!",
    };
  }
  if (formattedError.message.includes('Response code ')) {
    return { message: 'Error in calling your server - Location ' + formattedError.path };
  }
  console.log(error)

  return formattedError;
};

export default formatGraphQLErrors;
