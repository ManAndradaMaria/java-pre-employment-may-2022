function Exercise3() {
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container">
      <button id="id1" onClick={()=> alert("Button1")}>Button1</button>  
      <button id="id2" onClick={()=> alert("Button2")}>Button2</button>  
      <button id="id3" onClick={()=> alert("Button3")}>Button3</button>  
      <button id="id4" onClick={()=> alert("Button4")}>Button4</button>  
      </div>
    </div>
  );
}

export default Exercise3;
