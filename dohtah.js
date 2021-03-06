var synth = window.speechSynthesis;
var voices = [];

var doh = ['\u5200','\u5C9B','\u76D7','\u8C46','\u9661','\u515C'];//['刀','岛','盗','豆','陡','兜'];
var tah = ['\u5B83','\u5854','\u8E0F'];//['它','塔','踏'];

function isChinese(s)
{
    return s.substring(0,2) == "zh";
}

function randomElement(arr)
{
    return arr[Math.floor(Math.random() * arr.length)];
}

function loadList()
{
    voices = synth.getVoices();
    let list = document.getElementById("voiceList");
    voices = voices.filter(voice => isChinese(voice.lang));
    for(;list.firstChild;list.removeChild(list.firstChild)) {}
    voices.forEach
    (
        function(item)
        {
            let option = document.createElement("option");
            option.value = item.name;
            option.text = item.name;
            list.appendChild(option);
        }
    );
}

function sayThing()
{
    var phrase = randomElement(doh)+randomElement(tah);
    var utterance = new SpeechSynthesisUtterance(phrase);
    var selected = voices.filter(voice => voice.name == voiceList.selectedOptions[0].value)[0];
    utterance.voice = selected;
    utterance.rate = (Math.random() + 0.5);
    utterance.pitch = (Math.random() + 0.5);
    synth.speak(utterance);
}

synth.onvoiceschanged = loadList;