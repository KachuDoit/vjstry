const quotes = [
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가",
        author: "이드리스 샤흐",
    },
    {
        quote: "인생은 곱셈이다. 어떤 찬스가 와도 내가 제로면 아무런 의미가 없다.",
        author: "나카무라 미츠루",
    },
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L.론허바드",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.",
        author: "제임스 딘",
    },
    {
        quote: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤",
    },
    {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author: "오손 웰스",
    },
    {
        quote: "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
        author: "루소",
    },
    {
        quote: "불확실성을 환영하게 되면 당신은 더 이상 인생으로부터 숨지 않게 될 것이다.",
        author: "개리 비숍",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 