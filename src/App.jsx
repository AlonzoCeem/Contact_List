import { useEffect, useState } from 'react'
import Contacts from './Contacts'
import Contact from './Contact'

function App() {
  const [contacts, setContacts] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)
  const contact = contacts.find( contact => hash === contact.id)

  useEffect(()=> {
    async function fetchContacts(){
      const data = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const contactData = await data.json();
      setContacts(contactData);
    }
    fetchContacts();
  }, [])

  useEffect(()=> {
    window.addEventListener("hashchange", ()=> {
      setHash(window.location.hash.slice(1)*1);
    })
  }, [])

  return (
    <>
      <h1>Contact List ({ contacts.length })</h1>
      <Contacts contacts={ contacts } hash={ hash }/>
      <Contact contact={ contact }/>
    </>
  )
}

export default App
