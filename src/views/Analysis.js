import React, { useState } from "react";
import UserLeftPannel from "../component/userPannel/UserLeftPannel";
import DogSelection from "../component/DogSelection";

const Analysis = (props) => {
  const [showAnswer, setShowAnswer] = useState("");
  const verifyAnimal = props.authUser.animal;

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [questions, setQuestions] = useState([
    {
      text: "1. Diet and food intake of the animal / पशु का आहार सेवन ?",
      options: [
        {
          value: "Eating full capacity but only selective food",
          text: "Eating full capacity but only selective food / पूरी क्षमता से लेकिन केवल चुनिंदा भोजन करना।",
        },
        {
          value: "Show less interest in food and less food intake.",
          text: "Show less interest in food and less food intake / भोजन में कम रुचि दिखाएं और कम भोजन करें।",
        },
        {
          value: "normal - no change",
          text: "normal - no change / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
    {
      text: "2. Breadthing smell of animal / जानवर की दुर्गंध ?",
      options: [
        { value: "sweet smell /", text: "sweet smell / सुवास।" },
        {
          value: "normal - no change.",
          text: "normal - no change. / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
    {
      text: "3. Condition of udder / थन की स्थिति ?",
      options: [
        {
          value: "swelled and hard",
          text: "swelled and hard / फूला हुआ और सख्त.",
        },
        {
          value: "normal - no change.",
          text: "normal - no change. / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
    {
      text: "4. Body temprature of animal / जानवर के शरीर का तापमान ?",
      options: [
        { value: "low temprature", text: "low temprature / हल्का तापमान।" },
        { value: "high temprature", text: "high temprature / उच्च तापमान." },
        {
          value: "normal - no change.",
          text: "normal - no change. / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
    {
      text: "5. condition of dung / गोबर की स्थिति ?",
      options: [
        {
          value: "Watery or liquid form",
          text: "Watery or liquid form / पानीदार या तरल रूप।",
        },
        { value: "dry and hard", text: "dry and hard / सूखा और कठोर" },
        {
          value: "normal - no change.",
          text: "normal - no change. / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
    {
      text: "6.  Condition of urine / मूत्र की स्थिति ? ",
      options: [
        {
          value: "white colour puss ,bad smell",
          text: "white colour puss ,bad smell / सफेद रंग का मवाद, बुरी गंध।",
        },
        {
          value: "normal - no change.",
          text: "normal - no change. / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
    {
      text: "7. Condition of milk produced / उत्पादित दूध की स्थिति ?",
      options: [
        {
          value: "saulty in taste or change in taste",
          text: "saulty in taste or change in taste / स्वाद में तीखापन या स्वाद में बदलाव",
        },
        {
          value: "milk having blood",
          text: "Venmilk having blood / दूध में खून होना us",
        },
        {
          value: "abnormal milk",
          text: "abnormal milk / असामान्य दूध (फटा हुआ)",
        },
        {
          value: "normal - no change.",
          text: "normal - no change. / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
    {
      text: "8. Physical condition of sitting / बैठने की अवस्था ?",
      options: [
        {
          value: "lateral recumbance",
          text: "lateral recumbance / पार्श्व लेटना",
        },
        {
          value: "normal - no change.",
          text: "normal - no change. / सामान्य - कोई परिवर्तन नहीं",
        },
      ],
    },
  ]);

  const result = () => {
    if (
      selectedAnswers.question_0 ===
        "Eating full capacity but only selective food" &&
      selectedAnswers.question_1 === "sweet smell /" &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Negative energy balance(ketosis)</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>
              injection- dextrose(25%) I/V 450ml , betamethasone I/V 5ml , ,
              Multivitamin I/V 10ml
            </li>
            <li>
              liq-*milka boost/liquid anabolite 100ml I/V.(morning and evening
              for 5 days).
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 === "normal - no change" &&
      selectedAnswers.question_1 === "sweet smell /" &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Negative energy balance(ketosis)</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>
              injection- dextrose(25%) I/V 450ml , betamethasone I/V 5ml , ,
              Multivitamin I/V 10ml
            </li>
            <li>
              liq-*milka boost/liquid anabolite 100ml I/V.(morning and evening
              for 5 days).
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 === "normal - no change" &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Negative energy balance(ketosis)</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>
              injection- dextrose(25%) I/V 450ml , betamethasone I/V 5ml , ,
              Multivitamin I/V 10ml
            </li>
            <li>
              liq-*milka boost/liquid anabolite 100ml I/V.(morning and evening
              for 5 days).
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 ===
        "Show less interest in food and less food intake." &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "Watery or liquid form" &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Indigestion/Diaria.</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li  className="font-medium">injection- Ringor lactate 500ml I/V , Multivitamin 10ml I/M</li>
            <li className="font-medium">
              liqued-piobloom(powder) 25gm (morning and evening 5days) , latifur
              ultra 20gm (once in a day for 5 days).
            </li>
            <li className="font-medium">
              Dr. Nayan Brijpuria - 9696968574
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 ===
        "Show less interest in food and less food intake." &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "dry and hard" &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Indigestion/Diaria.</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>injection- Ringor lactate 500ml I/V , Multivitamin 10ml I/M</li>
            <li>
              liqued-piobloom(powder) 25gm (morning and evening 5days) , latifur
              ultra 20gm (once in a day for 5 days).
            </li>
            <li className="font-medium">
              Dr. Nayan Brijpuria - 9696968574
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 === "normal - no change" &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "white colour puss ,bad smell" &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Indigestion/Diaria.</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>injection- Ringor lactate 500ml I/V , Multivitamin 10ml I/M</li>
            <li>
              liqued-piobloom(powder) 25gm (morning and evening 5days) , latifur
              ultra 20gm (once in a day for 5 days).
            </li>
            <li className="font-medium">
              Dr. Nayan Brijpuria - 9696968574
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 ===
        "Show less interest in food and less food intake" &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "low temprature" &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "lateral recumbance"
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Indigestion/Diaria.</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>injection- Ringor lactate 500ml I/V , Multivitamin 10ml I/M</li>
            <li>
              liqued-piobloom(powder) 25gm (morning and evening 5days) , latifur
              ultra 20gm (once in a day for 5 days).
            </li>
            <li className="font-medium">
              Dr. Nayan Brijpuria - 9696968574
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 === "normal - no change" &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "saulty in taste or change in taste" &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Subclinical Mastitis.</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>injection- moxel 4.5gm I/M , Isoflud 5ml</li>
            <li>liqued-mammadium(powder) 1pack(5 days)</li>
            <li className="font-medium">
              Dr. Nayan Brijpuria - 9696968574
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 === "normal - no change" &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "normal - no change." &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "milk having blood" &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Indigestion/Diaria.</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>injection- Ringor lactate 500ml I/V , Multivitamin 10ml I/M</li>
            <li>
              liqued-piobloom(powder) 25gm (morning and evening 5days) , latifur
              ultra 20gm (once in a day for 5 days).
            </li>
            <li className="font-medium">
              Dr. Nayan Brijpuria - 9696968574
            </li>
          </ul>
        </div>
      );
    } else if (
      selectedAnswers.question_0 === "normal - no change" &&
      selectedAnswers.question_1 === "normal - no change. " &&
      selectedAnswers.question_2 === "swelled and hard" &&
      selectedAnswers.question_3 === "normal - no change." &&
      selectedAnswers.question_4 === "normal - no change." &&
      selectedAnswers.question_5 === "normal - no change." &&
      selectedAnswers.question_6 === "normal - no change." &&
      selectedAnswers.question_7 === "normal - no change."
    ) {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Indigestion/Diaria.</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>injection- Ringor lactate 500ml I/V , Multivitamin 10ml I/M</li>
            <li>
              liqued-piobloom(powder) 25gm (morning and evening 5days) , latifur
              ultra 20gm (once in a day for 5 days).
            </li>
          </ul>
        </div>
      );
    } else {
      setShowAnswer(
        <div className="mb-8">
          <h1 className="text-2xl my-2 font-bold">Problem</h1>
          <p>Negative energy balance(ketosis)</p>
          <h1 className="text-2xl font-bold my-2 ">Solution</h1>
          <ul>
            <li>
              injection- dextrose(25%) I/V 450ml , betamethasone I/V 5ml , ,
              Multivitamin I/V 10ml
            </li>
            <li>
              liq-*milka boost/liquid anabolite 100ml I/V.(morning and evening
              for 5 days).
            </li>
            <li className="font-medium">
              Dr. Nayan Brijpuria - 9696968574
            </li>
          </ul>
        </div>
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    result();
    setSelectedAnswers(selectedAnswers);
  };

  return (
    <>
      <div>
        <div className="container mx-auto w-screen h-screen overflow-hidden">
          <div className="flex md:flex-row lg:flex-row">
            <div className="w-72 rounded-md h-full">
              {" "}
              <UserLeftPannel />
            </div>
            {verifyAnimal === "cow" ? (
              <div className="flex px-12 flex-col w-[82vw] h-screen overflow-hidden scroll-smooth-no-scrollbar bg-slate-200">
                <div>
                  <h1 className="text-4xl font-semibold my-6 w-full text-center">
                    Analyse your pet with the simple QNA
                  </h1>
                  <form>
                    <div>
                      {questions.map((question, index) => (
                        <div key={index}>
                          <h3 className="bg-zinc-400 py-4 px-8 rounded-xl text-xl">
                            {question.text}
                          </h3>
                          <ul className="text-gray-900 py-4 px-10">
                            {question.options.map((option, optionIndex) => (
                              <li
                                key={optionIndex}
                                className="my-2 text-lg cursor-pointer flex gap-4"
                              >
                                <input
                                  id={optionIndex}
                                  type="radio"
                                  name={`question_${index}`}
                                  value={option.value}
                                  checked={
                                    selectedAnswers[`question_${index}`] ===
                                    option.value
                                  }
                                  onChange={(e) =>
                                    setSelectedAnswers({
                                      ...selectedAnswers,
                                      [`question_${index}`]: e.target.value,
                                    })
                                  }
                                />
                                {option.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="cursor-pointer w-[10%] px-4 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 mb-8 active:scale-95"
                      disabled={!Object.keys(selectedAnswers).length}
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </form>
                  {<div className="block">{showAnswer}</div>}
                </div>
              </div>
            ) : (
              <div className="flex px-12 flex-col w-[82vw] h-screen overflow-hidden scroll-smooth-no-scrollbar bg-slate-200">
                <div>
                  {" "}
                  <DogSelection />{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
