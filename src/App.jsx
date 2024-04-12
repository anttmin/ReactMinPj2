import React, { useRef, useState } from "react";

const Data = ["Profile", "Your Apps", "Settings", "Logout"];

const App = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  //   console.log(imgRef);
  //   console.log(menuRef);

  window.addEventListener("click", (e) => {
    if (e.target !== imgRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  return (
    <div className="Center">
      <img
        alt="img"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        className="Img"
        onClick={() => setOpen(!open)}
        ref={imgRef}
      />
      {open && (
        <ul className="Box" ref={menuRef}>
          {Data.map((DataItem) => {
            return (
              <li
                className="Item"
                key={DataItem}
                onClick={() => setOpen(false)}
              >
                {DataItem}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
