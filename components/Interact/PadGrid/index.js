import React, {useState, useEffect, useReducer} from 'react';


// ||===== PAD COMPONENT =====||
//    PROPS:
// numberOfPads
// 
// 

// new Tone.Synth

const convertArrayToObject = (array) => {
    let initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item]: "",
      };
    }, initialValue);
  };

  // Return random item from array
function randomArrayPick(array) {
    let index = Math.floor(Math.random() * array.length)
    console.log("index: " + index)
    return array[index]
}

function amtColor() {

    let animationColors = ["Yellow","Red","Blue","Orangered"];
    let pick = "amt" + randomArrayPick(animationColors);
    console.log(pick)
    return pick
};

function PadGrid(props) {
    const pads = props.notes
    const [padState, setPadState] = useState(() => convertArrayToObject(props.notes))

    // noteTrigger - hande the click
    const noteTrigger = (pad, cb) => {
        let animations = [
            "amtSpin",
            "amtFade",
            "amtShake",
            amtColor()
        ];

        let newClass = randomArrayPick(animations)

        setPadState({...padState, [pad]: newClass})
        console.log(padState)
        console.log("clicked " + pad);
    }

    const createPads = pads.map((pad_id) => 
    <div key={pad_id} style={{backgroundColor: props.color}} onAnimationEnd={() => setPadState({...padState, [pad_id]: ""})} className={"pad " + padState[pad_id]} onClick={() => {
        noteTrigger(pad_id);
        props.padClick(pad_id);}}>{pad_id}</div>
    )
    

    return(
        <div className="padComponent">
            {createPads}
        </div>
    )
};

export default PadGrid;