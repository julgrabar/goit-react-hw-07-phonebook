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
    addContact({items}, action) {
      items.push(action.payload)
    },
    filterContacts(state, action){
        state.filter=action.payload;
    }
  },
  extraReducers: {
    [fetchContactsNames.fulfilled]: (state, {payload})=>({...state, items: [...payload]}), 
    [fetchContactsNames.pending]: (state)=>({...state, isLoading: true}),
    [deleteContactRequest.fulfilled]: (state, {payload})=>({...state ,items: state.items.filter(item=>item.id!==payload)}), 
    // [deleteContactRequest.pending]: (state)=>({...state, isLoading: true})
    [addContactRequest.fulfilled]: (state, {payload})=>({...state, items: [...state.items, payload]}), 
  },
});


export const contactsReducer = contactsSlice.reducer;


export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;