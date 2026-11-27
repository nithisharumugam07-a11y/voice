
const voicePage =
"https://nithisharumugam07-a11y.github.io/Azhagii/voice.html";

new QRCode(document.getElementById("qrcode"), {
    text: voicePage,
    width: 220,
    height: 220,
    colorDark: "#805b46",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
