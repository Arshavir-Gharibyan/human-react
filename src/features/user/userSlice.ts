import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface UserState {
    users: any[];
}

const initialState: UserState = {
    users: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        adduser: (state, action: PayloadAction<object>) => {
            return {...state, users: [...state.users, action.payload]}
        },

        editUser: (state, action: PayloadAction<{ id: number, name: string }>,) => {
            return {
                ...state,
                users: state.users.map((user) => user.id === action.payload.id ? {
                    ...user, name: action.payload.name
                } : user)

            }
        },

        deleteUser: (state, action: PayloadAction<number | undefined>) => {
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        }
    },
});

export const {adduser, deleteUser, editUser} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user.users;

export default userSlice.reducer;