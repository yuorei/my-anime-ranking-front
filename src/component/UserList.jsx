import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_ALL_USERS_QUERY = gql`
  query GetAllUsersQuery {
    GetAllUserInformation {
      id
      name
      description
      profileImageURL
    }
  }
`;

const UserList = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div>
      <h2>User List</h2>
      {data.GetAllUserInformation.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.description}</p> {/*TODO なぜか取れてきていない*/}
          <img src={user.profileImageURL} width="10%" height="10%"></img>
        </div>
      ))}
    </div>
  );
};

export default UserList;
