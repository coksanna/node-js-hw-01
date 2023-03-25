const argv = require("yargs").argv;
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const deleteContact = await contacts.deleteById(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);

invokeAction(argv);
