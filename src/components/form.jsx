function Form() {
  return (
    <main>
      <div className="signupFrm">
        <div className="wrapper">
          <form action className="form">
            <h4 className="title text-center">Get In Touch</h4>
            <div className="inputContainer">
              <input type="text" className="input" placeholder="a" />
              <label htmlFor className="label">Full Name</label>
            </div>
            <div className="inputContainer">
              <input type="text" className="input" placeholder="a" />
              <label htmlFor className="label">Email</label>
            </div>
            <div className="inputContainer area">
              <textarea className=""/>
              <label htmlFor className="label">Type-Message</label>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Form;