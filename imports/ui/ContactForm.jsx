import React from "react";
import { Meteor } from "meteor/meteor";
import {ErrorAlert} from "./components/ErrorAlert";
import {SuccessAlert} from "./components/SuccessAlert";


export const ContactForm = () => {
  const [name, setName] = React.useState(""); // Formik
  const [email, setEmail] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [errorMessage , setErrorMessage] = React.useState("");
  const [success , setSuccess] = React.useState("");

  const saveContact = () => {
    // ContactCollection.insert({ name, email, imageUrl });  with the autopublish package we were able to insert directly into the collection from the client side
    Meteor.call('contacts.insert', { name, email, imageUrl }, (error) => {
      if(error) {
        setErrorMessage(error.error)

        setTimeout(() => {
          setErrorMessage("")
        }, 5000);

      } else {
        setName("");
        setEmail("");
        setImageUrl("");
        setSuccess("Contact saved successfully")

        setTimeout(() => {
          setSuccess("")
        }, 5000)
      }
    }); // now we need are calling the method we created on the server side

  }

  return (
    <form className="mt-6 px-6">
      {errorMessage && <ErrorAlert message={errorMessage} />}
      {success && <SuccessAlert message={success} />}
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="px-2 py-3 text-right">
        <button
          type="button"
          onClick={saveContact}
          className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Save Contact
        </button>
      </div>
    </form>
  )
}
