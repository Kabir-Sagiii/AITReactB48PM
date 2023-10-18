import Footer from "../footer/Footer";
import "./Main.css";
export function Main(props) {
  return (
    <div className="mainContainer">
      <h2>{props.title}</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>REACT</li>
      </ul>
      <Footer />
    </div>
  );
}
