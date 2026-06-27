import { Link } from "react-router-dom";
import "./Error404.css";
function Error404() {
  return (
    <div className="error ">
      <h2 className="fs-1 fw-bold">404</h2>
      <h3 className="fs-3">Page Not Found</h3>
      <p className="fs-4">
        Don't worry, you can head back to the homepage or use the navigation
        menu to find what you need
      </p>
      <Link to={"/"} className="btn btn-primary">
        Back to home
      </Link>
    </div>
  );
}

export default Error404;
