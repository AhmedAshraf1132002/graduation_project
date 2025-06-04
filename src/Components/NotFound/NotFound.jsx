import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="notfound-dark d-flex flex-column align-items-center justify-content-center vh-100 text-center">
        <h1 className="display-1 fw-bold text-danger mb-0">404</h1>
        <h2 className="fw-semibold text-white mb-3">Page Not Found</h2>
        <p className="text-secondary fs-5 mb-4">
          Sorry, we couldn’t find the page you were looking for.
        </p>
        <Link to="/" className="btn btn-outline-light btn-lg px-4">
          Go to Home
        </Link>
      </div>
    </>
  );
}
