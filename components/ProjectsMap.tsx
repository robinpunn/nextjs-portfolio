// import trade from '../public/assets/projects/trade.png'
import chess from "../public/assets/projects/chess.png";
import blog from "../public/assets/projects/blog.png";
import free from "../public/assets/projects/free.png";
import github from "../public/assets/projects/github.png";
import todo from "../public/assets/projects/todo.png";
import fantasy from "../public/assets/projects/fantasyPayments.png";

{
  /*Add Projects Here*/
}
const projects = [
  {
    title: "Fantasy Payments",
    tech: "Solidity/TypeScript/React/CSS",
    img: fantasy,
    link: "/fantasy",
  },
  {
    title: "Good First Issues",
    tech: "TypeScript/React/CSS",
    img: github,
    link: "/github",
  },
  {
    title: "Chess Vision Game",
    tech: "TypeScript/React/CSS",
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
    tech: "Nextjs/WordPress/GraphQl/Tailwind",
    img: blog,
    link: "/headless",
  },
  {
    title: "freeCodeCamp",
    tech: "HTML/CSS",
    img: free,
    link: "/fcc",
  },
];

export default projects;
