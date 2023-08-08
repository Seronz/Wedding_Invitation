import Navigasi from "../../Components/Navbar/Navbar";
import Layout_Hero_Section from "../../Layout/Layout_Hero_Section/Layout_Hero_Section";
import Layout_Home_Page from "../../Layout/Layout_Home_Page/Layout_Home_Page";
import Layout_Info from "../../Layout/Layout_Info/Layout_Info";
import "./Landing_Page.css";

const Hero_Section = () => {
  return (
    <div className="Container-LandingPage">
      <Layout_Hero_Section />
      <Navigasi />
      <Layout_Home_Page />
      <Layout_Info />
    </div>
  );
};

export default Hero_Section;
