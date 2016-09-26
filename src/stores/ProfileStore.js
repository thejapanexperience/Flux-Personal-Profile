  import AppDispatcher from '../AppDispatcher';
  import { EventEmitter } from 'events';

  let _profiles = [""];
  /* Use underscore to indicate that it's a private variable that can't be directly affected by anything other than the store. */

  const ProfileStore = Object.assign({}, EventEmitter.prototype, {

    startListening(callback) {
      this.on('CHANGE', callback);
    },

    stopListening(callback) {
      this.removeListener('CHANGE', callback);
    },

    getAll() {
      return _profiles;
    }
 
  });


  AppDispatcher.register(action => {

    const { type, payload } = action;
    console.log('ProfileStore action: ', action);

    switch (type) {
      case 'CREATE_PROFILE' :
        const { profile } = payload;
        _profiles.push(profile);
        _profiles.shift();
        ProfileStore.emit('CHANGE');
        break;
    }

  });

  export default ProfileStore;
