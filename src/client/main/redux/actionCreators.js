import {DELETE_GIRAFFE, EDIT_GIRAFFE, NEW_AVIARY, NEW_GIRAFFE} from "@/client/main/redux/actions";

export const newAviary = (value) => {
    return {
        type: NEW_AVIARY,
        id: value
    };
};

export const deleteGiraffe = (value) => {
    return {
        type: DELETE_GIRAFFE,
        id: value
    };
};

export const editGiraffe = (value) => {
    return {
        type: EDIT_GIRAFFE,
        giraffe: value,
        id: value.id
    }
};
export const newGiraffe = (value) => {
    return {
        type: NEW_GIRAFFE,
        giraffe: value
    }
};
