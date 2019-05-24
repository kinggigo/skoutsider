
import Main  from './Main';
import Lol from './Lol';
import Game from './Game';
import Widjet from './Widjet';


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
    },{
        path : '/widjet',
        component: Widjet
    }
    ]

export default routes;