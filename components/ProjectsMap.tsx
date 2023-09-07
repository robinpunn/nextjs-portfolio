// import trade from '../public/assets/projects/trade.png'
import chess from "../public/assets/projects/chess.png";
import blog from "../public/assets/projects/blog.png";
import ztm from "../public/assets/projects/ztm.png";
import free from "../public/assets/projects/free.png";
import email from "../public/assets/projects/email.png";
import todo from "../public/assets/projects/todo.png";
import fantasy from "../public/assets/projects/fantasyPayments.png";

{
  /*Add Projects Here*/
}
const projects = [
  {
    title: "Fantasy Payments",
    tech: "React/CSS",
    img: fantasy,
    link: "/fantasy",
  },
  {
    title: "Chess Vision Game",
    tech: "React/CSS",
    img: chess,
    link: "/chess",
  },
  {
    title: "Todo App",
    tech: "React/Vanilla CSS",
    img: todo,
    link: "/todo",
  },
  {
    title: "Headless WordPress",
    tech: "NextJs/WordPress/GraphQl/Tailwind",
    img: blog,
    link: "/headless",
  },
  {
    title: "freeCodeCamp",
    tech: "HTML/CSS",
    img: free,
    link: "/fcc",
  },
  {
    title: "Email Developer",
    tech: "HTML Email Frameworks",
    img: email,
    link: "/email",
  },
];

export default projects;
