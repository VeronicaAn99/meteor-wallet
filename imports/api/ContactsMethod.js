import { ContactCollection } from "./ContactCollection";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    if (!name) {
      throw new Meteor.Error("Name is required.");
    }
    if (!email) {
      throw new Meteor.Error("Email is required.");
    }
    if (!imageUrl) {
      throw new Meteor.Error("Image URL is required.");
    }

    return ContactCollection.insert({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    // We can check if this is a simultaion on minimongo for Optimistic UI:
    // if(this.isSimulation) {
    // ContactCollection.remove(contactId)
    // } else {
    // console.log("This contact was not removed")
    // }
    return ContactCollection.remove(contactId);
  },
  "contacts.archive"({ contactId }) {
    check(contactId, String);
    ContactCollection.update({ _id: contactId }, { $set: { archived: true } });
  },
});
