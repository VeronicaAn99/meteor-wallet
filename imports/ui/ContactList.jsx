import React, { memo } from "react";
import { ContactCollection } from "../api/ContactCollection";
import { useSubscribe, useFind } from "meteor/react-meteor-data";

export const ContactList = () => {
  const isLoading = useSubscribe("allContacts");
  const contacts = useFind(() => {
    return ContactCollection.find(
      {},
      {
        sort: { createdAt: -1 },
      },
    );
  });

  if (isLoading()) {
    return (
      <div className="px-6">
        <div className="mt-10">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Loading...</h3>
        </div>
      </div>
    ) 
  }

  const removeContact = (e, _id) => {
    e.preventDefault();
    Meteor.call("contacts.remove", {
      contactId: _id,
    });
  };

  const ContactItem = memo(({ person }) => {
    return (
      <li className="py-4 flex items-center justify-between space-x-3">
        <div className="min-w-0 flex-1 flex items-center space-x-3">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={person.imageUrl}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 truncate">
              {person.name}
            </p>
            <p className="text-sm font-medium text-gray-500 truncate">
              {person.email}
            </p>
          </div>
          <div>
            <a
              href="#"
              onClick={(e) => removeContact(e, person._id)}
              className="inline-flex items-center shadow-sm px-0.5 border border-grey-300 text-sm font-medium rounded-full text-gray-900"
            >
              Remove
            </a>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="px-6">
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map((person) => (
            <ContactItem key={person._id} person={person} />
          ))}
        </ul>
      </div>
    </div>
  );
};
