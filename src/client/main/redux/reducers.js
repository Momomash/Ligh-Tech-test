import {NEW_GIRAFFE, EDIT_GIRAFFE, DELETE_GIRAFFE, NEW_AVIARY, TRANSFER_GIRAFFE} from './actions';

export default function reducer(state, action) {
    let newGiraffes;
    switch (action.type) {
        //     case NEW_GIRAFFE: return { value: action.value_1 };
        case EDIT_GIRAFFE:
            const indexGiraffe = state.giraffes.findIndex( giraffe => giraffe.id === action.id );
            state.giraffes[indexGiraffe] = action.giraffe;
            newGiraffes = state.giraffes.slice();
            return { ...state, giraffes: newGiraffes};
        case DELETE_GIRAFFE:
            newGiraffes = state.giraffes.filter(giraffe => giraffe.id !== action.id);
            return { ...state, giraffes: newGiraffes };
        case NEW_AVIARY:
            const id = action.id;
            const newAviarys = state.aviarys.concat({id: id});
            return { ...state,  aviarys: newAviarys };
        //     case TRANSFER_GIRAFFE: return { value: action.value_2 };
        default:
            return state;
    }
}
