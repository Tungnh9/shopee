import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import HeaderOnly from '../layouts/HeaderOnly';
import { IRouter } from '../model/IRouter';

const publicRoutes: IRouter[] = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }