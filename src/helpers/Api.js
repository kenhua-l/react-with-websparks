import Axios from 'axios';

const TASK_URL = 'data/tasks.json';

class Api {
  static getTasks() {
    return Axios.get(TASK_URL);
  }
}

export default Api;