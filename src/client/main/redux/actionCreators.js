import {DELETE_GIRAFFE, EDIT_GIRAFFE, NEW_AVIARY} from "@/client/main/redux/actions";

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
