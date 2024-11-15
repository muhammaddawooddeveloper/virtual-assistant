
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector(".voice1");
console.log(voice);
function speak(text){
    // voice.classList.add("voice")
    let text_speak = new SpeechSynthesisUtterance(text);   // get text were speach
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);     //speach the text
}

function wishme(){
    let day = new Date();
    let hourse = day.getHours();
    console.log(hourse)
    if (hourse  >= 0 && hourse < 12){
        speak("good morning sir! ")
    }
    else if (hourse > 12 && hourse < 16){
        speak("good afternoon sir!");
    }
    else{
        speak("good evening sir!");
    }

}

window.addEventListener('load' , function(e){
    wishme();
});

let speechrecognition = window.SpeechRecognition || window.webkitSpeechRecognition;   
let recognition = new speechrecognition();  // 
recognition.onresult = function(event){
    voice.classList.remove("active")
    btn.style.display = "inline";
    let currentindex =  event.resultIndex
    let transcript = event.results[currentindex][0].transcript
    content.innerHTML = transcript
    console.log(transcript);
    takecommad(transcript);
}

function takecommad(message) {
    if (message.includes("hello" || "hi" )) {
        speak("Hello sir, i am virtual assistant created by muhammad dawood what I can help you ?" );
    } 
    else if (message.includes("who are you")) {
        speak("i am virtual assistant created by muhammad dawood what I can help you ?");
    }
    else if (message.includes("open YouTube")) {
        speak("Opening youtube");
        window.open("https://www.youtube.com");
    }
    else if (message.includes("open Instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com");
    }
    else if (message.includes("open Facebook")) {
        speak("Opening facebook");
        window.open("https://www.facebook.com");
    }
    else if (message.includes("open google")) {
        speak("Opening google");
        window.open("https://www.google.com");
    }
    else if(message.includes("open calculator")){
        speak("Open calculator");
        window.open("calculator://");
    }
    else if(message.includes("open WhatsApp")){
        speak("Opening whatsapp");
        window.open("whatsapp://");
    }
    else if(message.includes("open server")){
        speak("Opening Wampserver");
        window.open("http://localhost/phpmyadmin");
    }
    else if(message.includes("what is time")){
     let time = new Date().toLocaleString(undefined ,{hour:"numeric", minute:"numeric"})
     speak(time)
    }
    else if(message.includes("what is date")){
        let day = new Date().toLocaleString(undefined ,{day:"numeric", month:"short", year:"numeric"});
        speak(day)
    }
    else if(message.includes("who is Talha")){
        speak("talha is game developer and student")
    }
    else if(message.includes("who is Kamran")){
        speak("kami is haaraami");
    }
    else{
        let fmessage = message.replace('jarves' , "");
        speak(fmessage)
        window.open(`https://www.google.com/search?q=${fmessage}`)
    }
}

btn.addEventListener("click", function(){
    voice.classList.add("active");
    btn.style.display = "none";
    // btn.classList.add("none")
    console.log(voice)
    recognition.start();
});



