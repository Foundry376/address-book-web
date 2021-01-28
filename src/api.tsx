import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export async function fetchContacts() {
  const resp = await axios.get<Contact[]>(
    "https://address-book-api-demo.herokuapp.com/api/contacts"
  );
  return resp.data;
}
