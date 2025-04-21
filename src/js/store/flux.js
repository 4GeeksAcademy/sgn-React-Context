const { json } = require("react-router");

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            listContacts: []
        },
        actions: {
            newUser: () => {
                fetch("https://playground.4geeks.com/contact/agendas/sebastian", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => console.log("Error creating user:", error));
            },

            GetContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/sebastian/contacts", {
                    method: "GET"
                })
                    .then((response) => {
                        if (response.status === 404) {
                            getActions().newUser();
                        }
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((data) => {
                        if (data) {
                            setStore({ listContacts: data.contacts });
                        }
                    })
                    .catch((error) => console.log("Error fetching contacts:", error));
            },

            addContactToList: (contact) => {
                const store = getStore();
                setStore({ ...store, listContacts: [...store.listContacts, contact] });
            },

            createContact: (newContact) => {
                fetch("https://playground.4geeks.com/contact/agendas/sebastian/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newContact)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        const actions = getActions();
                        actions.addContactToList(data);
                    })
                    .catch((error) => console.log("Error creating contact:", error));
            },

            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/sebastian/contacts/${id}`, {
                    method: "DELETE"
                })
                    .then((response) => {
                        if (response.ok) {
                            const store = getStore();
                            const updatedContacts = store.listContacts.filter(contact => contact.id !== id);
                            setStore({ listContacts: updatedContacts });
                            console.log(`Contact with ID ${id} deleted`);
                        } else {
                            console.log("Error deleting contact");
                        }
                    })
                    .catch((error) => console.log("Error deleting contact:", error));
            },

            editContact: (id, contact) => {
                const store = getStore();
                fetch(`https://playground.4geeks.com/contact/agendas/sebastian/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contact)
                })
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                    })
                    .then((data) => {
                        if (data) {
                            const updatedList = store.listContacts.map((contact) => {
                                if (contact.id === id) {
                                    return data;
                                }
                                return contact;
                            });
                            setStore({ listContacts: updatedList });
                        }
                    })
                    .catch((error) => console.log("Error editing contact:", error));
            }
        }
    };
};

export default getState;