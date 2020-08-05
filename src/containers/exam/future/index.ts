import { THeaderData } from "../before-exam/types";
import { TExamData, TQuestion, TQuestionType } from "../main-exam/types";
import { v4 as uuid } from "uuid";
// should be replaced with the api later
export const HeaderData: THeaderData = {
  systemName: "C0120",
  candidateName: "Albert Einstein",
  subject: "Mock 1",
  candidateAvatar:
    "https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg",
};

const getText = (length: number): string => {
  let veryBigText = `Ut nihil hic minus. Impedit asperiores tempore. Minima ut est et aliquam qui. Quia dolore error esse laboriosam. Cupiditate est exercitationem aut beatae cupiditate.
 
Maxime dolore reiciendis voluptatem magnam laudantium veniam. Recusandae ullam non nobis pariatur laborum. Facere nam rerum omnis repellendus autem et repudiandae corporis. Molestias ex et dolorum incidunt voluptatem sit. Ad fugiat possimus voluptatibus molestias rerum unde soluta. Consequatur excepturi quo a occaecati veritatis earum exercitationem.
 
Excepturi placeat maiores velit est labore omnis ab sint impedit. Non impedit qui enim a quo veritatis laborum. Quibusdam deserunt asperiores facilis explicabo quasi. Et alias quia et accusantium laborum facere commodi esse.
Voluptatem necessitatibus quasi aut. Molestiae accusamus dolores sit similique. Corrupti nihil vel occaecati debitis iusto et porro qui beatae. Sint dolor exercitationem ullam. Doloribus quibusdam animi. Minima est et quia.
 
Eligendi dignissimos corporis doloremque distinctio. Sit officiis ullam neque at. Aliquid eos quas aperiam odit. Ea saepe rerum et libero accusamus blanditiis. Quae perspiciatis expedita beatae aspernatur repudiandae. Inventore distinctio aut.
 
Harum vitae et nostrum fugiat qui harum. Praesentium eum est est beatae natus. Pariatur saepe quas facilis. Aut officia fugit minus. Qui id minus.
`;
  let start = Math.floor(Math.random() * (veryBigText.length - length));
  let end = start + Math.floor(Math.random() * (length - 1));
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
        ] as TQuestionType,
      };
      if (q.type === "mcq") {
        q.choices = Array.from({ length: 4 }).map(() => getText(80));
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
  subjects: ["Computer Science and Information Technology"],
  sections: ["General Aptitude", "Computer Science and Information Technology"],
  candidateData: {
    name: "Albert Einstein",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg",
    rollNumber: "112122",
  },
  // questions -> is an array of questions -> question[section][questionNumber]
  // in this particular example, there are two sections
  // questions: [[""], [""]],
  questions: generateQuestions(2, [15, 65]),
  totalTimeInMinutes: 180,
  calculatorAllowed: true,
};
