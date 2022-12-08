function parseData(resp){

    first_entry = resp.data[0]['weather_report']['temperature']['temp'];
    return first_entry
}




//api token = h1c8TUHe7wbXsiFWNP8rEJNtUKnyPNeVh7dDZjPL9dsfdy9pftQcNPDaAkTV
function apiCall(inputDay, inputMonth, inputYear){
let request = new XMLHttpRequest();

let day = inputDay
let month = inputMonth
let year = inputYear


// console.log(`write a string${day}`)


let api_token = "h1c8TUHe7wbXsiFWNP8rEJNtUKnyPNeVh7dDZjPL9dsfdy9pftQcNPDaAkTV";
let includes = "&include=events,league";

if (day < 10 && month < 10){
    inputURL = `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${year}-0${month}-0${day}?api_token=${api_token}${includes}`;
    }
if (day >= 10 && month < 10){
    inputURL = `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${year}-0${month}-${day}?api_token=${api_token}${includes}`;
        }
if (day < 10 && month >= 10){
    inputURL = `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${year}-${month}-0${day}?api_token=${api_token}${includes}`;
            }
if (day >= 10 && month >= 10){
    inputURL = `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${year}-${month}-${day}?api_token=${api_token}${includes}`;
                }
let url = inputURL;



request.open('GET',url,true);

request.onload = function () {
    let response = JSON.parse(this.response);
    //console.log(response.data);

    console.log(parseData(response))

    const content = document.getElementById('content');
    content.textContent = JSON.stringify(response.data,null," ");
}
request.send();
}
apiCall(1,2,2020);
