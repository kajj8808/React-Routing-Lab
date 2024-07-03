import { Link } from "react-router-dom";

/** Display a list of all authors. */
export default function Home() {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        <li>
          <Link to={"/author/J.K.Rowling"}>J.K.Rowling</Link>
        </li>
        <li>
          <Link to={"/author/J.R.R.Tolkien"}>J.R.R.Tolkien</Link>
        </li>
      </ul>
    </div>
  );
}
