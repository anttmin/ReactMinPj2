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
  const [EnableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setselected(selected === getCurrentId ? null : getCurrentId);
  }

  // console.log(selected);

  function handleMultiSelection(getCurrentId) {
    //ဘာလိုarrayနဲ့ထည့်ကလည်းဆိုတော့ arry အလွတ်ထဲကနေ indexOfနဲရှာမယ် နဂိုထဲကအလွတ်ဆိုတော့ -1ထွက်မယ်အဲဒီ-1နဲ့ချိတ်ကမယ်အဲဒါကkeyပဲ****
    let cpyMutiple = [...multiple];
    console.log(cpyMutiple);//အလွတ်
    console.log(getCurrentId);//id တေွဝင်မယ်

    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);//ပြီးရင်cpyထဲမှာရှာမယ်မတေွရင်-1ထုတ်
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);//-1နဲ့ညီရင်cpy arrayထဲကိုid တေွကိုထည့်မယ်
    else cpyMutiple.splice(findIndexOfCurrentId, 1);//မဟုတ်ရင်arryထဲကid1ခုချင်းဆီလေျာမယ်1ခုချင်းစီ

    setmultiple(cpyMutiple);
    

   

  }

  console.log(multiple);

  return (
    <div>
      <div className="Accordian">
        <button
          className="Multi"
          onClick={() => setEnableMultiSelection(!EnableMultiSelection)}
        >
          Enable Multi Selection
        </button>
        {data && data.length > 0 ?
           ( data.map((DatatItem) => (
            <div className="Accordian1" key={DatatItem.id}>
              <div
                className="Title"
                onClick={
                  EnableMultiSelection
                    ? () => handleMultiSelection(DatatItem.id)
                    : () => handleSingleSelection(DatatItem.id)
                }
              >
                <h3>{DatatItem.question}</h3>
                <span>+</span>
              </div>

              {selected === DatatItem.id ||
              multiple.indexOf(DatatItem.id) !== -1 ? (
                <p>{DatatItem.answer}</p>
              ) : null}

            </div>
          )))
         : (<div>No data</div>) }
      </div>
    </div>
  );
};

export default App;
