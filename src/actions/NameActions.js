import AppDispatcher from '../AppDispatcher'


/*export function createName(name) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: { name: name }
    })
  }
}*/

const NameActions = {

  createName(name) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: { name: name }
    })
  } 
}

export default NameActions;
