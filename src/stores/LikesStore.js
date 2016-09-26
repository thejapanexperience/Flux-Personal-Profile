  import AppDispatcher from '../AppDispatcher';
  import { EventEmitter } from 'events';

  let _likes = [""];
  /* Use underscore to indicate that it's a private variable that can't be directly affected by anything other than the store. */

  const LikesStore = Object.assign({}, EventEmitter.prototype, {

    startListening(callback) {
      this.on('CHANGE', callback);
    },

    stopListening(callback) {
      this.removeListener('CHANGE', callback);
    },

    getAll() {
      return _likes;
    }
 
  });


  AppDispatcher.register(action => {

    const { type, payload } = action;
    console.log('LikesStore action: ', action);
    
    switch (type) {
      case 'CREATE_LIKE' :
        const { likes } = payload;
        _likes.push(likes);
        _likes.shift();
        LikesStore.emit('CHANGE');
        break;
    }

  });

  export default LikesStore;
