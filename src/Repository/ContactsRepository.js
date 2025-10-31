const { uuid } = require("uuidv4");

let contacts = [
  {
    id: uuid(),
    name: "Matheus",
    email: "matheus@gmail.com",
    phone: "2313133",
    category: uuid(),
  },
  {
    id: uuid(),
    name: "Josep",
    email: "josep@gmail.com",
    phone: "345525",
    category: uuid(),
  },
];

class ContactController {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const contact = contacts.find((contact) => contact.id === id);
      resolve(contact);
    });
  }
}

module.exports = new ContactController();
