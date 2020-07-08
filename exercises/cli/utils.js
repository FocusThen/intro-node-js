const fs = require("fs");
const path = require("path");

// this path needs to be relative to work with fs
const contactsLocation = "contacts.json";

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const getData = fs.readFileSync(path.join(__dirname, "/contacts.json"), {
    encoding: "utf-8",
  });

  return JSON.parse(getData);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  fs.writeFileSync(
    path.join(__dirname, "/contacts.json"),
    JSON.stringify(contacts),
    (err) => console.log(err)
  );
  console.log("saved");
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts,
};
