
import { Home, Login, Register, SearchList, MyPage, Confirmation } from '../pages';
import { withAuthentication } from '../enhancers/';

const routes = [
  {
    path: "/search/:term",
    component: SearchList,
    exact:true,
  },
  {
    path: "/register",
    component: Register,
    exact:true,
  },
  {
    path: "/login",
    component: Login,
    exact:true,
  },
  {
    path: "/myPage",
    component: withAuthentication(MyPage),
    exact:true,
  },
  {
    path: "/confirmation",
    component: Confirmation,
    exact:true,
  },
  {
    path: "/",
    component: Home,
    exact:true,
  },
]

export default routes;