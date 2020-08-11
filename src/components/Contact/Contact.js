import React, {Component} from "react";

class Contact extends Component {
constructor(props){
    super(props);

    this.state = {
        submitted: false,
        formData: {
            firstName: "",
            lastName: "",
        }

    }

}

handleChange = (event) => {
    const formData = {...this.state.fomData};
    formData[event.target.name] = event.target.value;

    this.setState({formData})
}


render(){
    return(
        <div className="Contact">
            <form>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input 
                    type="text" 
                    name="first name" 
                    value={this.state.formData.firstName} 
                    onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input 
                    type="text" 
                    name="last name" 
                    value={this.state.formData.lastName} 
                    onChange={this.handleChange}
                    />
                </div>

                <button>Submit Form</button>
            </form>

            <div>
                {this.state.formData.firstName}
                <br/>
                {this.state.formData.lastName}
            </div>
        </div>
    )
}
}

export default Contact;