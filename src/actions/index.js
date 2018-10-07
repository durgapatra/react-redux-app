import {
  HANDLE_PEOPLE_CHECKED,
  SHOW_MODAL,
  DELETE_PEOPLE,
  SELECT_PEOPLE,
  ADD_NEW_PEOPLE
} from '../constants/people'


export const handleCheckrdPeople = (data, checked) => {
  return {
    type: HANDLE_PEOPLE_CHECKED,
    data,
    checked
  }
}

export const handleShowModal = show => {
  return {
    type: SHOW_MODAL,
    show
  }
}

export const handleDelete = () => {
  return {
    type: DELETE_PEOPLE
  }
}
export const selectPeople = peo => {
  return {
    type: SELECT_PEOPLE,
    peo
  }
}
export const addNewPeople = data => {
  return {
    type: ADD_NEW_PEOPLE,
    data
  }
}