import { Link, Outlet, useParams } from "react-router-dom";

export default function BookDetail() {
  const { book: bookName } = useParams();

  return (
    <div>
      <h2>{bookName}</h2>
      <ul>
        <li>
          <Link to={"chapters"}>Chapters</Link>
        </li>
        <li>
          <Link to={"characters"}>Characters</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
