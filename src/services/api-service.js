import axios from "axios";
axios.defaults.baseURL = "https://62812fd61020d85205867d76.mockapi.io"

export const fetchContacts = async ()=>{
    const response = await axios.get("/contacts");
    return response.data;
}

export const deleteContact = async (id) => {
    const response = await axios.delete(`contacts/${id}`);
    return response.data
}

export const addContact = async (contact) => {
    const response = await axios.post(`contacts/`, contact);
    return response.data
}