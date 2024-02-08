import { Outlet } from "react-router-dom";
import Navbar from "~components/navbar/Navbar";
import Footer from "~components/footer/Footer";

export const AppLayout = () => {
  return (
    <div className={'App'}>
      <Navbar />
      <div className={'container my-5'}>
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};
