import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Header />

      <main role="main" className="inner cover">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
