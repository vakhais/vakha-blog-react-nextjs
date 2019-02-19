import {BaseStore, getOrCreateStore} from 'next-mobx-wrapper';
import {observable, action, flow} from 'mobx';
//import fetch from 'fetch';

class Store extends BaseStore {
  @observable userRegistry = new Map();
  @observable currentUser = {}
  @observable authenticated = false

  setUser = flow(function*(user) {
    // if (this.userRegistry.has(id)) {
    //   return;
    // }

    // const userPromise = yield fetch(`https://api.domain.com/users/${id}`).then(
    //   response => response.json(),
    // );
    //this.userRegistry.set(id, userPromise.data.user);
    this.currentUser = user
    this.authenticated = true
  });

  // setUser = (user) => {
  //   console.log("qeqwe12:setUser")
  //   this.currentUser = user
  //   this.authenticated = true
  // }

  deleteUser = () => {
    this.currentUser = {}
    this.authenticated = false
  }

  getUser = () => {
    return {
      currentUser: this.currentUser,
      authenticated: this.authenticated
    }
  }

  getUserById = id => {
    return this.userRegistry.get(id);
  };
}

// Make sure the store’s unique name
// AND must be same formula
// Example: getUserStore => userStore
// Example: getProductStore => productStore
export const getUserStore = getOrCreateStore('userStore', Store);