import { createStore } from 'redux';
import reducer from '../reducer';

const store = createStore(reducer);

const storeTemplate = {
  apiKey: '9c2f796d45e91e5c01a2ae26f1613625',
  cityDefault: 'Moscow',
}

export default store;
