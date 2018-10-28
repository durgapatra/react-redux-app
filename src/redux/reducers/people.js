import {
  HANDLE_PEOPLE_CHECKED,
  SHOW_MODAL,
  DELETE_PEOPLE,
  SELECT_PEOPLE,
  ADD_NEW_PEOPLE
} from '../constants/people'

const people = (
  state = {
    showModal: false,
    selectPeople: null,
    peopleData: [
      {
        "id": "people1",
        "name": "Andrew Amernante",
        "rating": 3,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      },
      {
        "id": "people2",
        "name": "Frank Wang",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
        "Likes": [
          "Frank",
          "Manchester United",
          "Football",
          "Programming"
        ],
        "Dislikes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ]
      },
      {
        "id": "people3",
        "name": "Sissi Chen",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems.",
        "Likes": [
          "Cats",
          "the beach",
          "Chopin",
          "Blue things"
        ],
        "Dislikes": [
          "Birds"
        ]
      },
      {
        "id": "people4",
        "name": "Diego Garcia",
        "rating": 2,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad.",
        "Likes": [
          "Talking Spanish",
          "Spanish food",
          "Spanish things",
          "Football"
        ],
        "Dislikes": [
          "Not talking spanish",
          "Chopin"
        ]
      },
      {
        "id": "people5",
        "name": "Fuad Rashid",
        "rating": 4,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case HANDLE_PEOPLE_CHECKED: {
      let peopleData = state.peopleData;
      if (action.data === 'selectAll') {
        peopleData.forEach((pro, index) => {
          pro.checked = action.checked;
          return pro
        })
      } else {
        peopleData.forEach((pro, index) => {
          pro.name === action.data && (pro.checked = !pro.checked);
          return pro
        })
      }
      return {
        ...state,
        peopleData
      }
    }
    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.show
      }
    case DELETE_PEOPLE: {
      let peopleData = state.peopleData
      peopleData = peopleData.filter((peo) => !peo.checked)
      let selectPeople = { ...state.selectPeople }
      if (selectPeople.checked) {
        selectPeople = null
      }
      return {
        ...state,
        peopleData,
        selectPeople
      }
    }
    case SELECT_PEOPLE:
      return {
        ...state,
        selectPeople: action.peo
      }
    case ADD_NEW_PEOPLE:
      return {
        ...state,
        peopleData: [...state.peopleData, action.data]
      }
    default:
      return state
  }
}

export default people
