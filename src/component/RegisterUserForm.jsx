import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const REGISTER_USER = gql`
  mutation RegisterUser($input: UserInformationInput!) {
    registerUser(input: $input) {
      id
      name
      profileImageURL
      description
    }
  }
`;

function RegisterUserForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(profileImage);
    registerUser({
      variables: {
        input: {
          name,
          password,
          description,
          profileImage,
        },
      },
    }).then((result) => {
      console.log(result);
      location = "/login";
    });
    alert(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="自己紹介"
      />
      <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
      <button type="submit" disabled={loading}>
        {loading ? "登録中..." : "登録"}
      </button>
      {error && <div>エラーが発生しました</div>}
    </form>
  );
}

export default RegisterUserForm;
