import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USER_QUERY = gql`
  query GetUserQuery($id: ID!) {
    node(id: $id) {
      ... on User {
        name
        haveAnime {
          id
          rank
          title
          description
          animeImageURL
        }
      }
    }
  }
`;

const UserAnimes = () => {
  let path = window.location.pathname;
  let userId = path.split("/")[1];
  //   alert(userId);
  //   userId = "user:" + localStorage.getItem("token");
  //   alert(userId);
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { id: userId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div>
      <h2>{data.node.name}</h2>
      {data.node.haveAnime.map((anime) => (
        <div key={anime.id}>
          <h3>タイトル: {anime.title}</h3>
          <h3>{anime.rank}位</h3>
          <h3>
            説明<br></br> {anime.description}
          </h3>
          <img src={anime.animeImageURL} width="20%" height="20%"></img>
        </div>
      ))}
    </div>
  );
};

export default UserAnimes;
