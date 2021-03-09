import axios from 'axios';

export class Users {
  static all() {
    return axios.get('/users.json').then((resp: any) => resp.data);
  }
}
