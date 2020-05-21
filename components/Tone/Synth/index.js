import styled from "styled-components";
import PadGrid from "./../../Interact/PadGrid";
import Tone from "tone";  

//attach a click listener to a play button
const enableAudio = async () => {
	await Tone.start()
	console.log('audio is ready')
}

//create a synth and connect it to the master output (your speakers)
const newInst = new Tone.Synth().toMaster();

const notes = [ "C4","C#4","D4","D#4",
                "E4","F4","F#4","G4",
                "G#4","A4","A#4","B4",
                "C5","C#5","D5","D#5"]

//play a middle 'C' for the duration of an 8th note
const start = (note) => newInst.triggerAttackRelease(note, "8n");

function Synth (props) {
    return (
        <div>
            <PadGrid numberOfPads={16} padClick={start} notes={notes} color={"black"}/>
        </div>
    )
}

export default Synth