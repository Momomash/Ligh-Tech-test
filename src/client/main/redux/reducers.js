import {NEW_GIRAFFE, EDIT_GIRAFFE, DELETE_GIRAFFE, NEW_AVIARY} from './actions';

export default function reducer(state, action) {
    let newGiraffes;
    let newUpdates;
    switch (action.type) {
        case NEW_GIRAFFE:
            newGiraffes = state.giraffes;
            newGiraffes.unshift(action.giraffe);
            return { ...state, giraffes:  newGiraffes};

        case EDIT_GIRAFFE:
            const indexGiraffe = state.giraffes.findIndex( giraffe => giraffe.id === action.id );
            state.giraffes[indexGiraffe] = action.giraffe;
            newGiraffes = state.giraffes.slice();
            return { ...state, giraffes: newGiraffes};

        case DELETE_GIRAFFE:
            newGiraffes = state.giraffes.filter(giraffe => giraffe.id !== action.id);
            newUpdates = state.updates.filter(update => update.giraffeId !== action.id);
            return { ...state, giraffes: newGiraffes, updates: newUpdates };

        case NEW_AVIARY:
            const id = action.id;
            const newAviarys = state.aviarys.concat({id: id});
            return { ...state,  aviarys: newAviarys };

        default:
            return state;
    }
}
