import React, { useState } from "react";

const data = [
  {
    id: "1",
    question: "what are accordion components",
    answer:
      "accordion components are used interface element used for original and presenting",
  },
  {
    id: "2",
    question: "what are they used for components",
    answer:
      "accordion components are used interface element used for original and presenting",
  },
  {
    id: "3",
    question: "Accordian as a musical instruments",
    answer:
      "accordion components are used interface element used for original and presenting",
  },
  {
    id: "4",
    question:
      "Can i create an accordion components with a different framework?",
    answer:
      "accordion components are used interface element used for original and presenting",
  },
];

const App = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    //  setSelected(getCurrentId) //to add id
    setSelected(getCurrentId === selected ? null : getCurrentId); //to remove current id
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    console.log(cpyMutiple);
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);

    else cpyMutiple.splice(findIndexOfCurrentId, 1);
    console.log(cpyMutiple)

    setMultiple(cpyMutiple);
  }

  // console.log(selected);
  
  console.log(multiple);
  return (
    <div className="Wrapper">
      <div>
        <button
          className="BtnClick"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multi Selection
        </button>
      </div>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div>{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>NO DATA</div>
        )}
      </div>
    </div>
  );
};

export default App;
