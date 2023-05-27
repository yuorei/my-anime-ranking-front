import { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const UPLOAD_ANIME = gql`
  mutation uploadAnime($input: NewAnimeRankingInput!) {
    createAnimeRanking(input: $input) {
      id
      title
      description
      animeImageURL
      rank
    }
  }
`;

function UploadAnimeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rank, setRank] = useState("");
  const [animeImage, setAnimeImage] = useState(null);

  const [uploadAnime, { loading, error }] = useMutation(UPLOAD_ANIME);

  const handleSubmit = (e) => {
    e.preventDefault();

    uploadAnime({
      variables: {
        input: {
          title,
          description,
          rank: Number(rank), // rankが数値型であることを確認
          animeImage,
        },
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // フォームをリセット
    setTitle("");
    setDescription("");
    setRank("");
    setAnimeImage(null);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
        required
      />
      <textarea
        className="textarea-field"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="説明"
        required
      />
      <input
        className="input-field"
        type="number"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        placeholder="ランキング"
        required
      />
      <input
        className="file-field"
        type="file"
        onChange={(e) => setAnimeImage(e.target.files[0])}
        required
      />
      <button className="submit-button" type="submit" disabled={loading}>
        {loading ? "アップロード中..." : "アップロード"}
      </button>
      {error && <div className="error-message">エラーが発生しました</div>}
    </form>
  );
}

export default UploadAnimeForm;
