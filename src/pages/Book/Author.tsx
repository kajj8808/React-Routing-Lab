import { Link, Outlet, useParams } from "react-router-dom";

export default function BookAuthor() {
  const { name: authorName } = useParams();

  return (
    <div>
      <h1>{authorName}</h1>
      <ul>
        <li>
          <Link to={`${authorName} Book 1`}>{authorName} Book 1</Link>
        </li>
        <li>
          <Link to={`${authorName} Book 2`}>{authorName} Book 2</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
