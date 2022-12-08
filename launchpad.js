console.log(navigator)
let device;



function background(color) {
    document.body.style.background = color;
    first_entry = color
    
    
}


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


function colors (){
    if (first_entry = 'NaN'){
        first_entry = Math.floor(Math.random() * 100); 
    }
    
    if (first_entry < 0){
        first_entry = 'black'
    }

    if (first_entry < 10 && first_entry >= 0 ){
        first_entry = 'gray'
    }


    if (first_entry < 20 && first_entry >= 10 ){
        first_entry = 'brown'
    }

    if (first_entry < 30 && first_entry >= 20 ){
        first_entry = 'purple'
    }


    if (first_entry < 40 && first_entry >= 30 ){
        first_entry = 'pink'
    }

    if (first_entry < 50 && first_entry >= 40 ){
        first_entry = 'cyan'
    }

    if (first_entry < 60 && first_entry >= 50 ){
        first_entry = 'yellow'
    }

    if (first_entry < 70 && first_entry >= 60 ){
        first_entry = 'blue'
    }


    if (first_entry < 80 && first_entry >= 70 ){
        first_entry = 'green'
    }

    if (first_entry < 90 && first_entry >= 80 ){
        first_entry = 'red'
    }


    if (first_entry < 100 && first_entry >= 90 ){
        first_entry = 'white'
    }

}

function noteOn(note) {
    console.log(`note:${note} // on`)
    let newOBJ = document.createElement("div");

if (note >= 32 && note <= 67){
    colorM(note,3);
    first_entry = first_entry - 1
    console.log(first_entry)
    colors()
    background(first_entry)


   
    
}

if (note >= 68 && note <= 99){
    colorM(note,3);
    first_entry = first_entry + 1
    console.log(first_entry)
    colors()
    background(first_entry)
}


    console.log(note)

}

function noteOff(note) {
    console.log(`note:${note} // off`)
colorM(note, Math.floor(Math.random() * 100))
//background(back)
    }



function colorM(key,clr){
    device && device.send([0x90,key,clr]);
}
