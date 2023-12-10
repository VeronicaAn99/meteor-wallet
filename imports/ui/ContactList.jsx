import React from 'react';
import {ContactCollection} from "../api/ContactCollection";
import {useTracker, useFind} from "meteor/react-meteor-data";

export const ContactList = () => {
  const contacts = useTracker( () => {
    Meteor.subscribe('contacts');
    return  ContactCollection.find({}).fetch();
  })

  return (
    <>
      <h2>Contact List</h2>
      {contacts.map(contact => (
        <li key={contact._id}>{contact.name} - {contact.email}</li>
      ))}

    </>
  )
}