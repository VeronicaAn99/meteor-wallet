import React from 'react';
import { ContactForm } from "./ContactForm";
import {ContactList} from "./ContactList";
import {Header} from "./Headers";

export const App = () => (
  <div >
    <Header />
    <ContactForm />
    <ContactList />
  </div>
);
