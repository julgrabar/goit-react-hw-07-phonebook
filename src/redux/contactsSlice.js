import { createSlice } from '@reduxjs/toolkit';
import { addContactRequest, deleteContactRequest, fetchContactsNames } from './contactsOperations';

const init = {
    items: [],
    filter: "",
    isLoading: false
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: init,
  reducers: {
    filterContacts(state, action){
        state.filter=action.payload;
    }
  },
  extraReducers: {
    [fetchContactsNames.fulfilled]: (state, {payload})=>({...state, items: [...payload], isLoading: false}), 
    [fetchContactsNames.pending]: (state)=>({...state, isLoading: true}),
    [deleteContactRequest.fulfilled]: (state, {payload})=>({...state ,items: state.items.filter(item=>item.id!==payload)}),
    [addContactRequest.fulfilled]: (state, {payload})=>({...state, items: [...state.items, payload]}), 
  },
});


export const contactsReducer = contactsSlice.reducer;


export const { filterContacts } = contactsSlice.actions;