import React, {useState} from 'react';
import {ContactCollection} from "../api/ContactCollection";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const saveContact = () => {
    ContactCollection.insert({
      name,
      email,
      imageUrl
    });

    setName("");
    setEmail("");
    setImageUrl("");
  }

  return (
    <form>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          value={email}
          type="email"
        />
      </div>
      <div>
        <label htmlFor="imageUrl">
          Image URL
        </label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          id="imageUrl"
          type="text"
        />
      </div>
      <div>
        <button type="button" onClick={saveContact}>
          Save contacts
        </button>
      </div>
    </form>
  )
}
