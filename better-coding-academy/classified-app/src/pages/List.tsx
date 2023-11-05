import { useQuery } from '@apollo/client';
import { ALL_USERS } from 'root/api/queries/user';


export default function List() {
  const { loading, error, data } = useQuery(ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.allUsers)

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}