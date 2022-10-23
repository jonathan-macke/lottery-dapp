import { Link, useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Header />

      <main role="main" className="inner cover">
        <div id="error-page">
          <h1 className="cover-heading">Oops!</h1>
          <p className="lead">
            Sorry, an unexpected error has occurred, and we're actively trying
            to fix it. In the meantime, you can use the button bellow to go back
            to the home page.
          </p>
          <p className="lead">
            <code>Error: {error.statusText || error.message}</code>
          </p>
          <p className="lead">
            <Link
              to="/"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Go to homepage
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ErrorPage;
