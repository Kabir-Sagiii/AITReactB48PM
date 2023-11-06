import { useState } from "react";
import "./Profile.css";

function Profile() {
  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
    text: "switch on for Dark Theme",
  });

  let [profiledata, setProfileData] = useState({
    name: "Aditya Verma",
    email: "Adityaverma@gmail.com",
    image:
      "https://th.bing.com/th/id/OIP.kLuVl7_2soHqjgecM56X2AAAAA?pid=ImgDet&rs=1",
  });

  const changeTheme = (event) => {
    if (event.target.checked) {
      setTheme({
        bgColor: "black",
        textColor: "white",
        text: "switch off for Light Theme",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
        text: "switch on for Dark Theme",
      });
    }
  };

  const updateToRiya = () => {
    setProfileData({
      name: "Riya Sharma",
      email: "riyasharma@gmail.com",
      image:
        "https://i.pinimg.com/originals/60/e0/3b/60e03b25d0829ec560b3f472e84cd23a.jpg",
    });
  };

  const updateToAditya = () => {
    setProfileData({
      name: "Aditya Verma",
      email: "Adityaverma@gmail.com",
      image:
        "https://th.bing.com/th/id/OIP.kLuVl7_2soHqjgecM56X2AAAAA?pid=ImgDet&rs=1",
    });
  };

  return (
    <div className="profileContainer">
      <div className="leftC">
        <img
          src={profiledata.image}
          width="100%"
          height="100%"
          alt="userimage"
        />
      </div>
      <div
        className="rightC"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{profiledata.name}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{profiledata.email}</dd>
          <dt>
            <b>City</b>
          </dt>
          <dd>Delhi</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            aperiam, id reprehenderit delectus sit nesciunt quam assumenda nam,
            velit ab debitis provident, labore ea aliquid eum aliquam molestiae
            vel. Omnis. aperiam, id reprehenderit delectus sit nesciunt quam
            assumenda nam, velit ab debitis provident, labore ea aliquid eum
            aliquam molestiae vel. Omnis
          </dd>
        </dl>
        <button className="btn btn-outline-primary" onClick={updateToAditya}>
          Aditya Verma
        </button>
        &nbsp;&nbsp;
        <button className="btn btn-outline-success" onClick={updateToRiya}>
          Riya Sharma
        </button>
        <br />
        <br />
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={changeTheme}
          />
          <label>{theme.text}</label>
        </div>
        {/* <input type="checkbox" onClick={changeTheme} />
        <label>Check to Switch DarKMode</label> */}
      </div>
    </div>
  );
}

export default Profile;
