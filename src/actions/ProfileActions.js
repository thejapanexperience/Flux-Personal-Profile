import AppDispatcher from '../AppDispatcher'


/*export function createName(name) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: { name: name }
    })

  }
}*/

const ProfileActions = {

  createProfile(profile) {
    AppDispatcher.dispatch({
      type: 'CREATE_PROFILE',
      payload: { profile: profile }
    })
  },

}

export default ProfileActions;
