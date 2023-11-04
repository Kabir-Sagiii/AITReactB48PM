import { useRef } from "react";

function Dom() {
  var name = "cdscjds";
  name = "12345";
  let h2Ref = useRef(null); // {current:null}
  let pRef = useRef(null);

  let dataRef = useRef("Hello"); // {current:"Hello"} // dataRef.current = "hi"

  const changeStyle = () => {
    h2Ref.current.style.color = "red";

    document.getElementById("p1").style.color = "green";

    // pRef.current.style.backgroundColor = "black";
    // pRef.current.style.color = "white";
    // pRef.current.style.padding = "50px";
  };

  return (
    <div className="mt-5">
      <h2 ref={h2Ref}>useRef() is a hook in React JS</h2>
      <p id="p1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, cum,
        eligendi voluptatibus doloremque iste aspernatur eius enim maiores
        ducimus dolores ipsam. Obcaecati quibusdam dolore minus sit, modi
        laborum neque maiores rerum consectetur vitae assumenda, odio blanditiis
        ratione voluptatibus nemo nulla distinctio qui eius! Odit nostrum
        officiis, neque obcaecati placeat voluptatem!
      </p>
      <button className="btn btn-primary mt-2" onClick={changeStyle}>
        Change the content
      </button>
    </div>
  );
}

export default Dom;
