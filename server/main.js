import { Meteor } from 'meteor/meteor';
import "../imports/api/ContactCollection";
import {ContactCollection} from "../imports/api/ContactCollection";

Meteor.startup(async () => {
  Meteor.publish('contacts', function () { return ContactCollection.find()});
});
