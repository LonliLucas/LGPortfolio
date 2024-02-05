function ContactMe() {
    
    return (
        <div className="body-background mb-auto p-10 flex flex-col items-center">
            <h2 className="mb-4">Contact Me</h2>
            <form>
                <label htmlFor="name">Name: </label><br />
                <input type="text" id="name" placeholder="Name" className="bg-slate-100 text-black mb-4" /><br />
                <label htmlFor="email">Email Address: </label><br />
                <input type="text" id="email" placeholder="Email" className="bg-slate-100 text-black mb-4" /><br />
                <label htmlFor="message">Message: </label><br />
                <textarea id="message" placeholder="Message" rows="10" cols="50" className="bg-slate-100 text-black mb-4" /><br />
            </form>
            <button className="px-3 py-1 bg-purple-900 border-slate-900 border-2">Send</button>
        </div>
    )
}

export default ContactMe;