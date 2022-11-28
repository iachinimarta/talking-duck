// Recupero gli elementi necessari da HTML
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const inputRange = document.querySelector('input');
const figureBox = document.querySelector('figure');

// Imposto la funzione in caso di inputTextLength > 0
function talk() {
    const inputText = textArea.value;
    const tone = inputRange.value;

    // Imposto la struttura di una frase per il sintetizzatore vocale
    const utterance = new SpeechSynthesisUtterance(inputText);

    // Imposto il tono del vocalizzatore
    utterance.pitch = tone;

    // Lo faccio parlare
    speechSynthesis.speak(utterance);

    // Imposto eventlistner per quando inizia a parlare
    utterance.addEventListener('start', function() {
        textArea.disabled = true;
        playButton.disabled = true;
        inputRange.disabled = true;

        figureBox.classList.add('active');
    })

    // Imposto enventlistner per quando finisce di parlare
    utterance.addEventListener('end', function() {
        figureBox.classList.remove('active');

        textArea.disabled = false;
        playButton.disabled = false;
        inputRange.disabled = false;
    })

}

// Imposto l'eventlistner sul button
playButton.addEventListener('click', function() {
    const inputTextLength = textArea.value.trim().length;

    if(inputTextLength > 0) {
        talk();
    }
})