const width = window.innerWidth;
const height = window.innerHeight;
const html = document.querySelector("html");
html.style.width = `${width}px`;
html.style.height = `${height}px`;

const colorData = [
    "#ffc0cb",
    "#ffc6d0",
    "#ffccd5",
    "#ffd2da",
    "#ffd9df",
    "#ffdfe5",
    "#ffe5ea",
    "#ffecef",
    "#fff2f4",
    "#fff8f9",
    "#185bc7",
    "#26c718",
    "#c72f18",
    "#c76c18",
    "#c7c418",
    "#18c7b5",
    "#a418c7",
    "#c718a7",
];
const blurData = ["5px", "10px", "2px"];

const motherText = [
    "Ngày 20/10, con không biết nói gì ngoài gửi đến mẹ lời chúc mạnh khỏe, trẻ mãi không già, luôn là người phụ nữ xinh đẹp nhất trong lòng con. Mãi yêu mẹ❤️❤️❤️",
    "Ngày Phụ nữ Việt Nam, con muốn gửi đến mẹ của con lời cảm ơn chân thành nhất. Cảm ơn mẹ đã luôn lắng nghe, luôn dang tay đón con về dù con mắc sai lầm gì đi chăng nữa. Nhân ngày 20/10, con chúc mẹ luôn hạnh phúc. Mẹ hãy tin là mẹ hoàn toàn có thể tự hào về con.❤️❤️❤️",
];

const friendText = [
    "Xin chúc toàn thể chị em phụ nữ Dù thất bại hay thành công,Dù lông bông hay đang làm việc, Dù thất nghiệp hay đang tìm việc, Đang ăn tiệc hay ở nhà, Dù già hay trẻ, Dù đang sắp đẻ hay chưa có chồng, Dù là rồng hay là tôm, Đang bia ôm hay trà đá, Hút thuốc... lá hay là không, Dù có công hay có tội, Dù bơi lội hay karate, Dù đi xe hay đi bộ... 20/10 vui vẻ hạnh phúc!❤️❤️❤️",
    "Chúc các chị em: Vui như chim sẻ. Khỏe như đại bàng. Giàu sang như chim phượng. Làm lụng như chim sâu. Sống lâu như chim đà điểu. Chúc bạn có làn da mịn màng, chúc cho môi thắm dịu dàng, chúc cho chân trắng lại càng thêm xa ❤️❤️❤️",
    "Nhân ngày 20/10. Chúc các bạn nữ hay cười như hít phải N2O, bay bổng như H2, thăng hoa như I2, bản lĩnh như N2 và hiền hậu như H2O. Mình yêu các bạn nhiều lắm ❤️❤️❤️",
];

const girlFriendText = [
    "Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này. Chúc thiên thần của anh vui vẻ, hạnh phúc và ý nghĩa trong ngày 20/10 nhé!❤️❤️❤️",
    "Trên Trái Đất có 7.000.000.000 người. Và anh không hiểu vì sao anh chỉ nhắn tin chúc mừng 20/10 cho mỗi mình em. Có lẽ vì 6.999.999.999 người còn lại không thể thay thế được em.❤️❤️❤️"
]

const root = document.querySelector("#root");
const initRoseBackground = (count) => {
    for (let i = 0; i < count; i++) {
        let chooseColor = Math.floor(Math.random() * (colorData.length));
        let chooseBlur = Math.floor(Math.random() * (blurData.length));
        let randomLeft = Math.floor(Math.random() * width - 15);
        let randomTop = Math.floor(Math.random() * height - 15);
        if (randomTop + (50 / 100) * height > height) {
            let overVh = Math.ceil(((randomTop + (50 / 100) * height - height) / height) * 100);
            randomTop = randomTop - (height / 100) * Math.floor(Math.random() * overVh + overVh);
        }
        let widthElement = Math.floor(Math.random() * 5) + 15;
        let timeAnimation = Math.floor(Math.random() * 8) + 5;
        const span = document.createElement("span");
        span.style.background = colorData[chooseColor];
        span.style.filter = `blur(${blurData[chooseBlur]})`;
        span.style.top = randomTop + "px";
        span.style.left = randomLeft + "px";
        span.style.width = widthElement + "px";
        span.style.height = widthElement + "px";
        span.style.animation = `move ${timeAnimation}s ease-out infinite`;
        span.classList.add("snow-item");
        root.appendChild(span);
    }
};
initRoseBackground(200);

const envelope = document.querySelector(".envelope-btn");
const envelopeText = document.querySelector(".envelope-text");
const secondScreen = document.querySelector(".second-screen");
const noteScreen = document.querySelector(".note-screen");
const noteLine = document.querySelector('.note-line')

;((chooseText = friendText) => {
    let randomText = Math.floor(Math.random() * (chooseText.length))
    noteLine.innerText = chooseText[randomText]
})(motherText);

const handleClickEnvelope = () => {
    envelope.classList.toggle("open");
    envelope.innerHTML = `<i class="fa-regular fa-envelope-open"></i>`;
    setTimeout(() => {
        secondScreen.classList.toggle("show");
        setTimeout(() => {
            noteScreen.classList.toggle("show");
        }, 500);
    }, 500);
};

const handleClickOutEnvelope = () => {
    noteScreen.classList.toggle("show");
    setTimeout(() => {
        secondScreen.classList.toggle("show");
        setTimeout(() => {
            envelope.innerHTML = `<i class="fa-regular fa-envelope"></i>`;
            envelope.classList.toggle("open");
        }, 500);
    }, 500);
};

envelope.onclick = handleClickEnvelope;
envelopeText.onclick = handleClickEnvelope;
noteScreen.onclick = handleClickOutEnvelope;
