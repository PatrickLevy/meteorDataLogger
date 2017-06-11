import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const TempReadings = new Mongo.Collection('TempReadings');
export const Settings = new Mongo.Collection('Settings');

if (Meteor.isServer) {
    Meteor.publish('tempReadings', function tempReadingsPub() {
        return TempReadings.find();
    });

    Meteor.publish('settings', function settingsPub() {
        return Settings.find();
    })
}