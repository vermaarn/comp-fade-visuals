import React, { useState } from "react";
import "./slider.css";

function CompFade() {
  const [slider, setSlider] = useState(5);

  return (
    <div className="container py-6 mx-auto space-y-6 text-center">
      <div className="mx-auto text-xl text-center text-gray-800">
        <div className="flex flex-col w-3/4 mx-auto text-left">
          <p>
            Sometimes, charities stuggle to decide how they can distripute their
            donations when two major crises are taking hold in the world. Often
            times, they only have a limited reports and and information. In the
            following task, you will act as the head of a large charity. You job
            is to look at data reports and using a slider, indicate how much you
            would be willing to allocate between two disater scenarios, with the
            benifits of each shown accordingly.
          </p>
        </div>
      </div>
      <h3 className="mb-8 text-3xl font-semibold text-center text-gray-800 underline">
        Disaster Report 1:
      </h3>
      <div className="mx-auto text-xl text-center text-black">
        <div className="flex flex-col w-3/4 mx-auto text-left">
          <p>
            Unfortuantely, a deadly outbreak of a deadly virus has been
            discovered in a rural French village named [Village 1]. The village
            has been isolated by the government but it needs money from your
            charity so it can help buy emergency food and medical supplies. If
            money is not enough, then this will lead up to 27,000 deaths within
            the village. Unfortuantely, there is another nearby village,
            [Village 2], trapped in a similar situation. For this village,
            analysts predict 9,000 people will die if no supplies are given.
            Based on this information, use the slider to indicate how much money
            you would spend, if each of the pig icon represents a $1000
            donation. Use the slider to indicate your preference.
          </p>
        </div>
      </div>
      <h2 className="text-2xl text-bold "> Option 1</h2>
      <SelectionSection slider={slider} setSlider={setSlider} />
      <h2 className="text-2xl text-bold "> Option 2</h2>
      <SelectionSection2 slider={slider} setSlider={setSlider} />
      <h2 className="text-2xl text-bold "> Variable 2</h2>
      <SelectionSection3 slider={slider} setSlider={setSlider} />
      <div className="flex justify-around my-6">
        <button
          style={{ userSelect: "none" }}
          className="w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-yellow-100 rounded-lg shadow-lg hover:bg-yellow-200 focus:outline-none"
        >
          Submit Result
        </button>
      </div>
    </div>
  );
}
function SelectionSection3({
  slider,
  setSlider,
}: {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
}) {
  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };
  return (
    <>
      <div className="flex justify-center mb-8 mr-40 space-x-4">
        {" "}
        <div className="h-16 mb-6 w-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 2 <br /> 9,000 people <br /> (Donating $
            {(10 - slider) * 900})
            <br /> (${((10 - slider) * 900) / 9} per 1000 people)
          </h5>
        </div>
        <div className="h-30 w-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 1 <br /> 27,000 people <br /> (Donating ${slider * 900}) <br /> (${Math.floor(slider * 900 / 27)} per 1000 people)
          </h5>
        </div>
      </div>
      <div className="w-full">
        <input
          id="slider"
          className="w-1/2 mt-2 mr-40 rounded-md cursor-pointer"
          type="range"
          min="0"
          max="10"
          value={slider}
          onChange={onSliderChange}
        />
      </div>
    </>
  );
}

function SelectionSection({
  slider,
  setSlider,
}: {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
}) {
  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };

  const pigArr = (slider: number) => {
    let arr: JSX.Element[] = [];
    for (let i = 0; i < slider; i++) {
      arr.push(<PigRow />);
    }
    return arr;
  };

  const peopleArr = (fileName: string) => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      if (fileName === "people.png") {
        arr.push(<DivPeople />);
      } else if (fileName === "person.png") {
        arr.push(<DivPerson />);
      }

      /* arr.push(
        <img
          className="w-10 h-8"
          alt="stimuli"
          src={process.env.PUBLIC_URL + "/comp_stim/" + fileName}
        />
      ); */
    }
    return arr;
  };
  return (
    <>
      <div className="flex justify-center pb-20 space-x-4">
        <div className="h-96 w-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 2 <br /> (Donating ${(10 - slider) * 1000})
          </h5>
          <div className="w-full h-full p-2 bg-gray-200 rounded-lg">
            <div className="flex flex-wrap ">{pigArr(10 - slider)}</div>
            <div className="flex">{peopleArr("person.png")}</div>
          </div>
        </div>
        <div className="h-96 w-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 1 <br /> (Donating ${slider * 1000})
          </h5>
          <div className="p-2 bg-gray-200 rounded-lg w-96 h-96">
            <div className="flex flex-wrap ">{pigArr(slider)}</div>
            <div className="flex">{peopleArr("people.png")}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-40 p-2 bg-gray-100 rounded-lg w-42">
          <h2 className="mb-2 text-xl font-semibold underline">Legend</h2>
          <div className="flex space-x-2">
            <DivDollar />{" "}
            <strong className="flex my-auto text-center align-center">
              $100
            </strong>{" "}
          </div>
          <div className="flex space-x-2">
            <DivPerson />{" "}
            <strong className="flex my-auto text-center align-center">
              1,000 People
            </strong>{" "}
          </div>
          <div className="flex space-x-2">
            <DivPeople />{" "}
            <strong className="flex my-auto text-center align-center">
              3,000 People
            </strong>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <input
          id="slider"
          className="w-1/2 mt-2 mr-40 rounded-md cursor-pointer"
          type="range"
          min="0"
          max="10"
          value={slider}
          onChange={onSliderChange}
        />
      </div>
    </>
  );
}

function SelectionSection2({
  slider,
  setSlider,
}: {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
}) {
  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };

  const pigArr = (slider: number, isMany: boolean) => {
    let arr: JSX.Element[] = [];
    for (let i = 0; i < slider; i++) {
      if (isMany) {
        arr.push(<PigRow2 />);
      } else {
        arr.push(<PigRow2 />);

        arr.push(<PigRow3 />);
      }
    }
    return arr;
  };

  const peopleArr = (fileName: string) => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      if (fileName === "people.png") {
        for (let j = 1; j < 3; j++) {
          arr.push(<DivPeople2 />);
        }
      } else if (fileName === "person.png") {
        arr.push(<DivPerson2 />);
      }

      /* arr.push(
        <img
          className="w-10 h-8"
          alt="stimuli"
          src={process.env.PUBLIC_URL + "/comp_stim/" + fileName}
        />
      ); */
    }
    return arr;
  };
  return (
    <>
      <div className="flex justify-center pb-20 space-x-4">
        <div className="w-96 h-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 2 <br /> (Donating ${(10 - slider) * 1000})
          </h5>
          <div className="w-full h-full p-2 bg-gray-200 rounded-lg">
            <div className="flex flex-wrap ">{pigArr(10 - slider, false)}</div>
            <div className="flex">{peopleArr("person.png")}</div>
          </div>
        </div>
        <div className="h-96 w-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 1 <br /> (Donating ${slider * 1000})
          </h5>
          <div className="h-full p-2 bg-gray-200 rounded-lg w-96">
            <div className="flex flex-wrap ">{pigArr(slider, true)}</div>
            <div className="flex">{peopleArr("people.png")}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-40 p-2 bg-gray-100 rounded-lg w-36">
          <h2 className="mb-2 text-xl font-semibold underline">Legend</h2>
          <div className="flex space-x-2">
            <DivDollar2 />{" "}
            <strong className="flex my-auto text-center align-center">
              $100
            </strong>{" "}
          </div>
          <div className="flex space-x-2">
            <DivPerson2 />{" "}
            <strong className="flex my-auto text-center align-center">
              1,000 People
            </strong>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <input
          id="slider"
          className="w-1/2 mt-2 mr-40 rounded-md cursor-pointer"
          type="range"
          min="0"
          max="10"
          value={slider}
          onChange={onSliderChange}
        />
      </div>
    </>
  );
}
function DivPerson2() {
  return <div className="w-3 h-8 mx-1 my-auto bg-blue-500 rounded-lg" />;
}

function DivPeople2() {
  return <div className="w-3 h-8 mx-1 my-auto bg-blue-500 rounded-lg" />;
}

function DivDollar2() {
  return (
    <div className="w-3 h-8 mx-1 text-center text-white bg-green-600 border-2 border-gray-200 rounded-lg cursor-pointer text-middle">
      $
    </div>
  );
}

function PigRow2() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<DivDollar2 />);
  }
  arr.push(<br />);
  return <>{arr}</>;
}

function PigRow3() {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push(
      <div className="w-3 h-8 mx-1 text-center text-white bg-gray-200 border-2 border-gray-200 rounded-lg cursor-pointer text-middle"></div>
    );
  }
  return <>{arr}</>;
}

function DivPerson() {
  return (
    <div className="flex w-8 h-8 m-1 space-x-1 bg-gray-300">
      <div className="w-2 h-6 mx-auto my-auto bg-blue-500 rounded-lg" />
    </div>
  );
}

function DivPeople() {
  return (
    <div className="flex w-8 h-8 m-1 space-x-1 bg-gray-300 rounded-sm">
      {[1, 2, 3].map((num, idx) => {
        return (
          <div
            key={num}
            className="w-2 h-6 mx-auto my-auto bg-blue-500 rounded-lg"
          />
        );
      })}
    </div>
  );
}

function DivDollar() {
  return (
    <div className="w-10 h-8 text-center text-white bg-green-600 border-2 border-gray-200 rounded-lg cursor-pointer text-middle">
      $
    </div>
  );
}

function PigRow() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<DivDollar />);
    /* arr.push(
      <img
        className="w-10 h-8"
        alt="stimuli"
        src={process.env.PUBLIC_URL + "/comp_stim/money.png"}
      />
    ); */
  }
  return <>{arr}</>;
}

export default CompFade;
