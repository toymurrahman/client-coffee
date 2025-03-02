import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Header from "./Header";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
