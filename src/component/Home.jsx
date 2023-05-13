import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        < div className="home">
            <Link to="/login">ログイン</Link><br></br>
            <Link to="/users">みんなの投稿</Link><br></br>
            <Link to="/explain">このサイトの説明</Link><br></br>
            <a href="https://yuorei.github.io/">ユオレイ(製作者)について</a>
        </ div>
    );
}

export default Home