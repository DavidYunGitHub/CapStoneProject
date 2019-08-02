import { COL_ADD_PLANT, COL_REMOVE_PLANT, DISPLAY_COL_ITEMS} from '../actions/types';

const Initial_State = {
    collection: [],
    addedToCollection: "",
    addedToCollectionError: ""
}

let collectionReducer = (state = Initial_State, action) => {
  
    
    switch(action.type){
        case COL_ADD_PLANT:
            let test = action.payload;
            console.log(`inside collection reducer: ${test.name}`)
            return {
                ...state,
                collection: state.collection.concat({
                    plant: action.payload
                })
            }
        case DISPLAY_COL_ITEMS:
            return {
                ...state,
                collection: state.collection.map(plant =>{
                    return console.log(`display collection case: ${plant}`)
                })
            }
            
        case COL_REMOVE_PLANT:
            return  {
                ...state,
                collection: state.collection.filter((plant)=>{
                    return plant.name !== action.plant.name
                    })
            }
        default:
            return state;
    }
}

export default collectionReducer;