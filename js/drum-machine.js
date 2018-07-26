const elementsDrum = document.getElementsByClassName('drum-kit__drum');
const arrAudio = [];

for (let i = 0; i < elementsDrum.length; i++) {
    arrAudio.push(elementsDrum[i].getElementsByTagName('audio')[0]);
    elementsDrum[i].onclick = () => {
        arrAudio[i].play();
    };
}




