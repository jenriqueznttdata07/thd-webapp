import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    isAuth: boolean;
    jid: string;
}

const initialState: IAuthState = {
    isAuth: false,
    jid: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setJid: (state: IAuthState, action: PayloadAction<string>) => {
            state.jid = action.payload;
        },
    },
});

export const { setAuth, setJid } = authSlice.actions;

export const authReducer = authSlice.reducer;