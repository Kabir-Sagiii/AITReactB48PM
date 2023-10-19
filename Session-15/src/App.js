import "./App.css";
import Counter from "./components/counter/Counter";
import Nav from "./components/nav/Nav";
import Image from "./components/imagecontainer/Image";
import UpdateState from "./components/state/UpdateState";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      {/* <UpdateState />
      <Image />
      <Counter /> */}
    </div>
  );
}

export default App;
