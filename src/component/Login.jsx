import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($name: String!, $password: String!) {
    auth {
      login(input: { name: $name, password: $password }) {
        success
        token
      }
    }
  }
`;

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [loginMutation, { data }] = useMutation(LOGIN_MUTATION);

  const handleFormSubmit = (e) => {
    if (localStorage.getItem("token") != "") {
      localStorage.clear();
    }
    e.preventDefault();

    loginMutation({
      variables: {
        name,
        password,
      },
    }).then(({ data }) => {
      if (data.auth.login.success) {
        localStorage.setItem("token", data.auth.login.token);
        location = "/";
      }
    });
  };
  return (
    <div className="login">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
        {data && data.auth.login.success && <div>ようこそ {name} さん</div>}
      </form>
    </div>
  );
};

export default Login;
