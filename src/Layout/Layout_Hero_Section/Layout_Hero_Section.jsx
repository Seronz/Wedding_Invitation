import "./Layout_Hero_Section.css";
import Buttons from "../../Components/Button/Button";
import Countdowns from "../../Components/Countdown/Countdown";

const Layout_Hero_Section = () => {
  return (
    <div
      id="Hero"
      className="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-align-center text-white"
    >
      <div>
        <h4>Kepada Bapak/Ibu/Saudara/i,</h4>
        <h1>Dimas & Salma</h1>
        <p>Akan melangsungkan resepsi pernikahan dalam:</p>
        <Countdowns />
        <Buttons title={"Lihat Undangan"} />
      </div>
    </div>
  );
};

export default Layout_Hero_Section;
