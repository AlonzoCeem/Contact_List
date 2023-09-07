function Contacts(props) {
    const { contacts } = props
    const { hash } = props
    return (
        contacts.map((contact)=> {
            return (
              <div key={ contact.id } className={contact.id === hash ? 'selected': ''}>
                <a href={`#${contact.id}`}>{ contact.name }</a> 
              </div>
            );
        })
    )
}

export default Contacts