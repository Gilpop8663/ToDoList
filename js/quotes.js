const quoteSpan = document.querySelector(".qoute span:first-child");
const authorSpan = document.querySelector(".qoute span:last-child");

const quotes = [
  { quote: "자기가 자신을 못 믿으면 세상도 안믿어준다.", author: "심우철" },
  { quote: "본인에 대한 신념을 가져라", author: "전한길" },
  {
    quote: "자기를 칭찬하지 못하는 사람은 남도 칭찬하지 못한다",
    author: "이지영",
  },
  {
    quote: "자기를 컨트롤 하지 못하면 남도 컨트롤 하지 못한다",
    author: "이지영",
  },
  {
    quote: "강한자가 살아남는 것이 아니라 살아남는 자가 강한 것이다",
    author: "김유신 장군",
  },
  { quote: "배우는 사람은 모름지기 심신을 수련해야 한다", author: "퇴계 이황" },
  {
    quote: "세월을 헛되이 보내지 마라 청춘은 다시 돌아오지 않는다",
    author: "안중근 의사",
  },
  {
    quote: "그래도 살아 있으니 괜찮아",
    author: "[기억1 등장인물] 게브",
  },
  {
    quote: "절대로 고개를 떨구지 말라. 고개를 쳐들고 세상을 똑바로 바라보라",
    author: "헬렌켈러",
  },
  {
    quote: "용감한 행위는 결코 승리를 바라지 않는다",
    author: "T.플러",
  },
  {
    quote: "의를 보고 행하지 않음은 용기가 없음이다",
    author: "공자",
  },
  {
    quote: "용기에도 큰 용기와 작은 용기의 구별이 있다",
    author: "맹자",
  },
  {
    quote: "나에게 천재일우의 기회가 왔다",
    author: "삽자루",
  },
  {
    quote: "여전할 것인가 역전할 것인가",
    author: "",
  },
  {
    quote: "여러분이 걱정하고 두려워한다는 것은 공부를 안하고 있다는 반증이다",
    author: "로즈리",
  },
];

const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];

quoteSpan.innerText = quoteRandom.quote;
authorSpan.innerText = quoteRandom.author;
