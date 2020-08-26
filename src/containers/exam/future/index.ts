import { THeaderData } from "../before-exam/types";
import { TExamData, TQuestion, TQuestionType } from "../main-exam/types";
import { v4 as uuid } from "uuid";
// should be replaced with the api later
export const HeaderData: THeaderData = {
  systemName: "C0120",
  candidateName: "Albert Einstein",
  subject: "Mock 1",
  candidateAvatar: require("../../../assets/albert-einstein.webp"),
};

const getText = (length: number): string => {
  let veryBigText = `An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared. He many kept on draw lain song as same. Whether at dearest certain spirits is entered in to. Rich fine bred real use too many good. She compliment unaffected expression favourable any. Unknown chiefly showing to conduct no. Hung as love evil able to post at as. 

  Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that. Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do. Though or my plenty uneasy do. Friendship so considered remarkably be to sentiments. Offered mention greater fifteen one promise because nor. Why denoting speaking fat indulged saw dwelling raillery. 
  
  Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. 
  
  He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether. 
  
  Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he commanded believing dejection in by. On no am winding chicken so behaved. Its preserved sex enjoyment new way behaviour. Him yet devonshire celebrated especially. Unfeeling one provision are smallness resembled repulsive. 
  
  Rank tall boy man them over post now. Off into she bed long fat room. Recommend existence curiosity perfectly favourite get eat she why daughters. Not may too nay busy last song must sell. An newspaper assurance discourse ye certainly. Soon gone game and why many calm have. 
  
  Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. Disposal to kindness appetite diverted learning of on raptures. Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views. No so instrument discretion unsatiable to in. 
  
  By an outlived insisted procured improved am. Paid hill fine ten now love even leaf. Supplied feelings mr of dissuade recurred no it offering honoured. Am of of in collecting devonshire favourable excellence. Her sixteen end ashamed cottage yet reached get hearing invited. Resources ourselves sweetness ye do no perfectly. Warmly warmth six one any wisdom. Family giving is pulled beauty chatty highly no. Blessing appetite domestic did mrs judgment rendered entirely. Highly indeed had garden not. 
  
  Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten you the weather ferrars venture friends. Solid visit seems again you nor all. 
  
  Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity. Since might water hence the her worse. Concluded it offending dejection do earnestly as me direction. Nature played thirty all him. 
  
  
`;

  let start = Math.floor(
    Math.random() * (veryBigText.length - Math.max(120, length))
  );
  let end = start + Math.max(120, Math.floor(Math.random() * (length - 1)));
  return veryBigText.slice(start, end);
};

const generateQuestions = (
  sections: number,
  totalQuestionsPerSection: number[]
): TQuestion[][] => {
  let res: TQuestion[][] = [];
  for (let i = 0; i < sections; ++i) {
    let questions = [];
    for (let j = 0; j < totalQuestionsPerSection[i]; ++j) {
      let q: TQuestion = {
        id: uuid(),
        text: getText(300),
        type: ["mcq", "numeric"][
          Math.floor(Math.random() * 2)
        ] as TQuestionType, // Math.floor(Math.random() * 2)
        correctMarks: 0,
        incorrectMarks: 0,
      };
      q.correctMarks = [1, 2][Math.floor(Math.random() * 2)];
      if (q.type === "mcq") {
        q.choices = Array.from({ length: 4 }).map(() => getText(140));
        q.incorrectMarks = q.correctMarks === 1 ? 0.33 : 0.67;
      } else {
        q.incorrectMarks = 0;
      }
      questions.push(q);
    }
    res.push(questions);
  }
  return res;
};

export const ExamData: TExamData = {
  streamName: "Computer Science and Information Technology",
  examName: "Mock Test 2020",
  subjects: ["Computer Science and Information Technology", "Civil"],
  sections: ["General Aptitude", "Computer Science and Information Technology"],
  candidateData: {
    name: "Albert Einstein",
    avatar: require("../../../assets/albert-einstein.webp"),
    //avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg",
    rollNumber: "112122",
  },
  // questions -> is an array of questions -> question[section][questionNumber]
  // in this particular example, there are two sections
  // questions: [[""], [""]],
  questions: generateQuestions(2, [120, 65]),
  totalTimeInMinutes: 180,
  calculatorAllowed: true,
};
