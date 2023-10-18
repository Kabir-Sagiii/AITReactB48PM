import { useState } from "react";
import "./Profile.css";

function Profile() {
  //   let [imageurl, setImageUrl] = useState(
  //     "https://th.bing.com/th/id/OIP.kLuVl7_2soHqjgecM56X2AAAAA?pid=ImgDet&rs=1"
  //   );

  //   let [name, setName] = useState("Aditya Verma");

  //   let [email, setEmail] = useState("Adityaverma@gmail.com");

  let [profiledata, setProfileData] = useState({
    name: "Aditya Verma",
    email: "Adityaverma@gmail.com",
    image:
      "https://th.bing.com/th/id/OIP.kLuVl7_2soHqjgecM56X2AAAAA?pid=ImgDet&rs=1",
  });

  //   const updateToRiya = () => {
  //     setEmail("Riyasharma@gmail.com");
  //     setImageUrl(
  //       "https://i.pinimg.com/originals/60/e0/3b/60e03b25d0829ec560b3f472e84cd23a.jpg"
  //     );
  //     setName("Riya Sharma");
  //   };

  //   const updateToAditya = () => {
  //     setEmail("AdityaVerma@gmail.com");
  //     setName("Aditya Verma");
  //     setImageUrl(
  //       "https://th.bing.com/th/id/OIP.kLuVl7_2soHqjgecM56X2AAAAA?pid=ImgDet&rs=1"
  //     );
  //   };
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
      <div className="rightC">
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
        <button>Aditya Verma</button>&nbsp;&nbsp;
        <button>Riya Sharma</button>
        <br />
        <br />
        <input type="checkbox" />
        <label>Check to Switch DarKMode</label>
      </div>
    </div>
  );
}

export default Profile;
