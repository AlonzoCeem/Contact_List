function Contact(props){
    const { contact } = props
    return (
        contact ? (
            <div>
              <h2>{contact.name}</h2>
              <p>Username: { contact.username }</p>
              <p>Phone: { contact.phone }</p>
              <p>Email: { contact.email }</p>
            </div>
        ) : null
    )
}

export default Contact