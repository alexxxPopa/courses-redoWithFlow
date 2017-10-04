
import { Home, Login, Register, SearchList } from '../pages';

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
    path: "/",
    component: Home,
    exact:true,
  }
]

export default routes;