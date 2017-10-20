import goAuth from 'goauth-js';

const ROOT_URL = 'http://localhost:8080';
const auth = new goAuth(ROOT_URL)

export default auth;