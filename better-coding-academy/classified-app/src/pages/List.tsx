import { useQuery } from '@apollo/client';
import { ALL_LISTING } from 'root/api/queries/user';
import AddListing from 'root/components/Listing/AddListing';
import styled from 'styled-components';


const Description = styled.p`
  margin-bottom: 0;
`;

const Listing = styled.div`
  padding: 1rem 0;
  width: 80%;

  :not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

export default function List() {
  const { loading, error, data } = useQuery(ALL_LISTING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.allListings)

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <div>
        {data.allListings.map((item: any) => (
          <Listing key={item.id}>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </Listing>
        ))}
      </div>
      <AddListing />
    </div>
  );
}