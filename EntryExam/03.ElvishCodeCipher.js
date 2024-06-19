function decipherMessage(message, shift) {
    let decipheredMessage = '';
    for (let i = 0; i < message.length; i++) {
        decipheredMessage += String.fromCharCode(message.charCodeAt(i) - shift);
    }
    console.log(decipheredMessage);
}


decipherMessage('Uifsf!jt!b!tfdsfu"', 1);
// decipherMessage('Wkurz#lw#lq#wkh#iluh$', 3);
// decipherMessage("Fwfltws", 5);

