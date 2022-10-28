import React, { useState } from "react";

const EntryPage = (props) => {
  const [nameID, setNameID] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setNameID(value);
  };
  const handleSubmit = (e) => {
    console.log(nameID);
    props.funChangingPage();
    // const data = {name:nameID}
    // fetch('/',{
    //   method : "POST",
    //   body: JSON.stringify(data)
    // }).then(res=>res.json()).then(sendDataToProceedFurther)
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter Your User Name"
        value={nameID}
      />

      <button type="submit"> Enter </button>
    </form>
  );
};

export default EntryPage;
