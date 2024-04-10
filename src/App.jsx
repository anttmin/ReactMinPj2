import React, { useState } from "react";

const data = [
  {
    id: "1",
    question: "what are accordion components",
    answer:
      "accordion components are used interface element used for original and presentingaccordion components are used interface element used for original and presenting",
  },
  {
    id: "2",
    question: "what are they used for components",
    answer:
      "accordion components are used interface element used for original and presenting accordion components are used interface element used for original and presenting",
  },
  {
    id: "3",
    question: "Accordian as a musical instruments",
    answer:
      "accordion components are used interface element used for original and presenting accordion components are used interface element used for original and presenting",
  },
  {
    id: "4",
    question:
      "Can i create an accordion components with a different framework?",
    answer:
      "accordion components are used interface element used for original and presenting accordion components are used interface element used for original and presenting",
  },
];

const App = () => {
  const [selected, setselected] = useState(null);
  const [multiSelected, setMultiSelectd] = useState(false);
  const [multiple, setmultiple] = useState([]);
  function singleSection(CurrentId) {
    setselected(selected === CurrentId ? null : CurrentId);
  }

  function MultiSelection(CurrentId) {
    let cpymultiple = [...multiple];
     console.log(cpymultiple);
    let findIndexOf = cpymultiple.indexOf(CurrentId);
     console.log(findIndexOf);

    if (findIndexOf === -1) {
      cpymultiple.push(CurrentId);
    } else {
      cpymultiple.splice(findIndexOf, 1);
    }
    setmultiple(cpymultiple);
    console.log(findIndexOf);
    console.log(cpymultiple);
    console.log(multiple.indexOf(CurrentId));
  }
  
  // console.log(selected);
  return (
    <div>
      <button
        className="Button"
        onClick={() => setMultiSelectd(!multiSelected)}
      >
        MultiSelection
      </button>
      {data && data.length > 0 ? (
        data.map((DataItem) => (
          <div key={DataItem.id}>
            <div className="Main">
              <div
                className="Head"
                onClick={
                  multiSelected
                    ? () => MultiSelection(DataItem.id)
                    : () => singleSection(DataItem.id)
                }
              >
                <h3>{DataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
            {selected === DataItem.id || multiple.indexOf(DataItem.id) !== -1 ? (
              <p className="textarea">{DataItem.answer}</p>
            ) : null}
          </div>

          //multiple.indexOf(DataItem.id) !== -1  !==ကconditionအမှားနဲ့စစ်လိုက်တာ

        ))
      ) : (
        <h2>None Data</h2>
      )}
    </div>
  );
};

export default App;
