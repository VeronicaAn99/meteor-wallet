import { ContactCollection } from "./ContactCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish("allContacts", function publishAllContacts() {
  return ContactCollection.find(); // Livw Query / Cursor
});

Meteor.publish("contacts", function publishAllContacts() {
  return ContactCollection.find({ archived: { $ne: true } }); // Livw Query / Cursor
});
