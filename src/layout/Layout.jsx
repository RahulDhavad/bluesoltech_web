import React from "react";
import Routers from "../routes/Routers";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;