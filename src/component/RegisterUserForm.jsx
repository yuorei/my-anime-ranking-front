import { useState } from "react";
import { useMutation } from "@apollo/client";
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
    if (localStorage.getItem("token") != "") {
      localStorage.clear();
    }
    e.preventDefault();
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
      location = "/#/login";
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前"
        required
      />
      <input
        className="input-field"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
        required
      />
      <textarea
        className="textarea-field"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="自己紹介"
      />
      <input
        className="file-field"
        type="file"
        onChange={(e) => setProfileImage(e.target.files[0])}
      />
      <button className="submit-button" type="submit" disabled={loading}>
        {loading ? "登録中..." : "登録"}
      </button>
      {error && <div className="error-message">エラーが発生しました</div>}
    </form>
  );
}

export default RegisterUserForm;
