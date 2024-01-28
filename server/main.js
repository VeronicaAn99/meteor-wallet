import { Meteor } from 'meteor/meteor';
import "../imports/api/ContactCollection";
import "../imports/api/ContactsMethod";
import "../imports/api/WalletsCollection";
import "../imports/api/TransactionsCollection";
import "../imports/api/ContactsPublication";

Meteor.startup(async () => {
//   Meteor.publish('contacts', function () { return ContactCollection.find()});
});
