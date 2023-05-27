import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Home = () => {
  const images = ["../assets/react.svg"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImage]})`,
  };

  return (
    <div className="home" style={backgroundImageStyle}>
      <Link to="/login">ログイン</Link>
      <br></br>
      <Link to="/register-user">ユーザー登録</Link>
      <br></br>
      <Link to="/upload-anime">アニメ登録</Link>
      <br></br>
      <Link to="/users">全てのユーザー</Link>
      <br></br>
      <Link to="/explain">このサイトの説明</Link>
      <br></br>
      <a href="https://yuorei.github.io/">ユオレイ(製作者)について</a>
    </div>
  );
};

export default Home;
