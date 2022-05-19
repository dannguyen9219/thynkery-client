import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import "./SignUpForm.css";

export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: ""
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ""
        })
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const formData = {...this.state};
          delete formData.error;
          delete formData.confirm;
          const user = await signUp(formData)
          this.props.setUser(user)
        } catch (error) {
          this.setState({ error: "Sign Up Failed"})
        }
    };
    // Hello
    
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div className="signupContainer">
            <div className="mb-3 form-floating">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label className="form-label">Name</label>
                <input className="form-control form-control-lg" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label className="form-label">Email</label>
                <input className="form-control form-control-lg" type="email" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="name@example.com" />
                <label className="form-label">Password</label>
                <input className="form-control form-control-lg" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label className="form-label">Confirm Password</label>
                <input className="form-control form-control-lg" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button className="btn btn-outline-primary" type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <h1 className="error-message">&nbsp;{this.state.error}</h1>
          </div>
        );
    };
};