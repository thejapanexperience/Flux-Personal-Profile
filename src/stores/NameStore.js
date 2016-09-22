  import AppDispatcher from '../AppDispatcher';
  import { EventEmitter } from 'events';

  let _names = [];
  /* Use underscore to indicate that it's a private variable that can't be directly affected by anything other than the store. */

  const NameStore = Object.assign({}, EventEmitter.prototype, {

    startListening(callback) {
      this.on('CHANGE', callback);
    },

    stopListening(callback) {
      this.removeListener('CHANGE', callback);
    },

    getAll() {
      return _names;
    }
 
  });


  AppDispatcher.register(action => {

    const { type, payload } = action;

    console.log('NameStore action: ', action);

    switch (type) {
      case 'CREATE_NAME' :
        const { name } = payload;
        _names.push(name);

        NameStore.emit('CHANGE');
        break;
    }

  });

  export default NameStore;
