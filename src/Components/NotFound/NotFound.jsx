import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="text-dark">Page Not Found</h2>
        <p className="text-muted">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
        </Link>
      </div>
    </>
  );
}
