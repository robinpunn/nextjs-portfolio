import trade from '../public/assets/projects/trade.png'
import blog from '../public/assets/projects/blog.png'
import ztm from '../public/assets/projects/ztm.png'
import free from '../public/assets/projects/free.png'
import email from '../public/assets/projects/email.png'
import todo from '../public/assets/projects/todo.png'
    
{/*Add Projects Here*/}
const projects = [
    {
        title: 'Headless WordPress',
        tech: 'NextJs/WordPress/GraphQl/Tailwind',
        img: blog,
        link: '/headless'
    },
    {
        title: 'Todo App',
        tech: 'React/Vanilla CSS',
        img: todo,
        link: '/todo'
    },
    {
        title: 'TradeBot Landing Page',
        tech: 'HTML/CSS',
        img: trade,
        link: '/tradebot'
    },
    {
        title: 'ZeroToMastery',
        tech: 'JavaScript/Node/React/Bootstrap/SQL',
        img: ztm,
        link: '/ztm'
    },
    {
        title: 'freeCodeCamp',
        tech: 'HTML/CSS',
        img: free,
        link: '/fcc'
    },
    {
        title: 'Email Developer',
        tech: 'HTML Email Frameworks',
        img: email,
        link: '/email'
    },
]

export default projects