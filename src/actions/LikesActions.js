import AppDispatcher from '../AppDispatcher'


/*export function createName(name) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: { name: name }
    })

  }
}*/

const LikesActions = {

  createLikes(likes) {
    AppDispatcher.dispatch({
      type: 'CREATE_LIKE',
      payload: { likes: likes }
    })
  } 
  
}

export default LikesActions;
