import { checkSession } from './modules/auth/signin';


export default (store) => {
  let token = localStorage.getItem('token')
  if(token) {
    store.dispatch(checkSession())
  }
}