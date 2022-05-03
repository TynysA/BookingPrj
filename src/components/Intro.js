import { Link } from "react-router-dom";
import "./Intro.css";

function Intro() {
  return <Header></Header>;
}
function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link className="header__link" to="/">
          Booking.com
        </Link>
        <Link className="header__link" to="/flights">
          Flights
        </Link>
      </div>
    </header>
  );
}
export default Intro;
