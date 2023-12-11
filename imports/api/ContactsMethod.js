import {ContactCollection} from "./ContactCollection";

Meteor.methods({
  'contacts.insert'({ name, email, imageUrl })  {
    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    if (!email) {
      throw new Meteor.Error('Email is required.');
    }
    if (!imageUrl) {
      throw new Meteor.Error('Image URL is required.');
    }

    return ContactCollection.insert({ name, email, imageUrl });
  }
})
