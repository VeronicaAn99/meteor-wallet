import { Meteor } from 'meteor/meteor';
import "../imports/api/ContactCollection";
import "../imports/api/ContactsMethod";
import {ContactCollection} from "../imports/api/ContactCollection";
import "../imports/api/ContactsPublication";

Meteor.startup(async () => {
//   Meteor.publish('contacts', function () { return ContactCollection.find()});
});
