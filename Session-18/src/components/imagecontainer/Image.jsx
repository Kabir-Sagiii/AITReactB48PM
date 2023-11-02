import { useState } from "react";

function Image() {
  let [imageurl, setImageUrl] = useState(
    "https://th.bing.com/th/id/OIP.hdTbkUGwBtEeKGomBvLLYgHaEK?pid=ImgDet&rs=1"
  );

  const changeToReact = () => {
    setImageUrl(
      "https://th.bing.com/th/id/OIP.hdTbkUGwBtEeKGomBvLLYgHaEK?pid=ImgDet&rs=1"
    );
  };

  const changeToAngular = () => {
    setImageUrl(
      "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/06/the-seo-guide-to-angular.png"
    );
  };
  return (
    <div style={{ width: "800px", margin: "50px auto", textAlign: "center" }}>
      <div>
        <img src={imageurl} width={500} height={200} />
      </div>
      <div>
        <button onClick={changeToReact}>React</button>&nbsp;&nbsp;&nbsp;
        <button onClick={changeToAngular}>Angular</button>
      </div>
    </div>
  );
}

export default Image;
