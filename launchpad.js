console.log(navigator)
let device;



if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log("Could not connect MIDI");
}

function updateDevices (event){
    console.log (event);
}

function success (midiAccess){
    //console.log("success function ran")
    //console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices);
    let inputs = midiAccess.inputs;
    
    for(let output of midiAccess.outputs.values()){
        device = output;
        console.log('Output device selected', device);
    }


inputs.forEach ((input) => {
    //console.log(input);
    input.addEventListener ('midimessage', handleInput);
});
}

function handleInput(input){
    //console.log(input);
    let command = input.data[0];
    let note = input.data[1];
    let velocity = input.data[2];

    console.log(`command: ${command}, note ${note}, velocity ${velocity}`);


if (velocity > 0){
    noteOn(note);
    
}

if (velocity == 0){
    noteOff(note);
}
    //let data = input.data;
    //console.log(data);
}


function noteOn(note) {
    console.log(`note:${note} // on`)
    let newOBJ = document.createElement("div");

if (note >= 52 && note <= 59){
    colorM(note,3);
    // newOBJ.style.backgroundColor = style.backgroundColor + 1;
   
    
  
// const drawingArea = document.getElementById('drawingArea');
// drawingArea.appendChild(newOBJ);

}

if (note >= 60 && note <= 67){
    colorM(note,3);
  
}


    console.log(note)

}

function noteOff(note) {
    console.log(`note:${note} // off`)
colorM(note, 21)
    }



function colorM(key,clr){
    device && device.send([0x90,key,clr]);
}
