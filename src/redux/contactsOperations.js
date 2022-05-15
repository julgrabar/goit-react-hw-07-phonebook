import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "services/api-service";

export const fetchContactsNames = createAsyncThunk("contacts/fetchContacts", 
async (_, {rejectWithValue})=>{
    try{
        const contacts = await fetchContacts();
        return contacts
    } catch (error){
        return rejectWithValue(error)
    }
}
)

export const deleteContactRequest = createAsyncThunk("contacts/deleteContact",
async (id, {rejectWithValue})=>{
    try{
        const response = await deleteContact(id)
        return response.id;
    }catch(error){
        return rejectWithValue(error)
    }
}
) 

export const addContactRequest = createAsyncThunk("contacts/addContact",
async (contact, {rejectWithValue})=>{
    try{
        const response = await addContact(contact)
        return response;
    }catch(error){
        return rejectWithValue(error)
    }
}
) 