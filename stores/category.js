import {BaseStore, getOrCreateStore} from 'next-mobx-wrapper';
import {observable, action, flow} from 'mobx';
import axios from 'axios'
//import fetch from 'fetch';

class Store extends BaseStore {
  @observable categoryRegistry = new Map();
  @observable categorys = []

  fetchCategorys = flow(function*() {
    if (this.categorys.length > 0) {
      return;
    }
    const userPromise = yield axios.get(`http://localhost:5000/api/categorys`).then(
      response => response.data
    )

    this.categorys = userPromise;
  });

  getCategorys = () => {
    return this.categorys;
  };

  getCategoryIdByNm = (categoryNm) => {
    if (this.categorys.length <= 0) return

    let id = undefined

    this.categorys.map((category) => {
      if (category.nm === categoryNm) id = category.id
    })
    console.log("q1111:",categoryNm)

    return id
  }
}

// Make sure the store’s unique name
// AND must be same formula
// Example: getUserStore => userStore
// Example: getProductStore => productStore
export const getCategoryStore = getOrCreateStore('categoryStore', Store);