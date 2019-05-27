
import Main  from './Main';
import Lol from './Lol';
import Game from './Game';
import Widjet from './Widjet';
import Tests from "./Tests";


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
    },{
        path : '/tests',
        component: Tests
    }

    ]

export default routes;