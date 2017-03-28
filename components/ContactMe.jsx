import React from 'react';

class ContactMe extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleSubmit(e){
    console.log(this.state.username);
    e.preventDefault();
  }
  render(){
    let page = null;
    if(this.state != null && typeof this.state.username != 'undefined' && typeof this.state.email != 'undefined'){
      page = <h3>Thank you for approaching me, i will immediately get back to you!</h3>;
    }else{
      page =
        <form name="ContactMe" onSubmit={ this.handleSubmit }>
            <div>
              <label>Your Name</label>
              <input type="text" name="username" placeholder="Name" onChange={ this.handleChange } />
            </div>
            <div>
              <label>Your Email</label>
              <input type="email" name="email" placeholder="Email" onChange={ this.handleChange } />
            </div>
            <input type="submit" />
        </form>
    }
    return(
      <div className="kw-contactme">
        { /*
          <form>
              <p>
                Or Leave your
                <input type="email" name="email" placeholder="Email" />
                 or <input type="tel" name="phone" placeholder="Phone" />
                i will contact you..</p>
              <input type="submit" />
          </form>
          */
        }
        { page }
    </div>
    )
  }
}
export default ContactMe;
