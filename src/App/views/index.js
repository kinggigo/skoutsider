
import Main  from './Main';
import Lol from './Lol';
import Game from './Game';


const routes = [
    {
        path : '/',
        component: Main
    },{
        path : '/Lol',
        component: Lol
    },{
        path : '/Game',
        component: Game
    }
    ]

export default routes;