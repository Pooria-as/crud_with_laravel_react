import axios from 'axios';
import React from 'react';

class Create extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    NameHandler = (e)=>
    {
        this.setState({name:e.target.value})
    }
    EmailHandler =(e)=>
    {
        this.setState({email:e.target.value})
    }
    PasswordHandler =(e)=>
    {
        this.setState({password:e.target.value})
    }
    SubmitHandler =(e)=>
    {
        e.preventDefault();
        const usersData={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
        }
        axios.post(`http://localhost:8000/api/user`,usersData);
        alert("success");
        this.props.history.push("/");
    }
    render() {
        return <div className='card'>
            <div className='card-header'>
                <h2>
                    New User
                </h2>
            </div>
            <div className='card-body'>
                <form onSubmit={this.SubmitHandler}>
                    <div className="form-group">
                      <label htmlFor='name'>UserName</label>
                      <input
                      onChange={this.NameHandler}
                      type="text"
                      name="name"
                        id="name"
                       className="form-control"
                        placeholder="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor='email'>Email</label>
                      <input
                      onChange={this.EmailHandler}
                      type="email"
                       name="email"
                       id="email"
                       className="form-control"
                       placeholder="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor='password'>Password</label>
                      <input
                      onChange={this.PasswordHandler}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="password" />
                    </div>
                    <div className="form-group">
                        <button
                        type='submit'
                        className='btn btn-block btn-success'>create</button>
                    </div>
                </form>
            </div>

        </div>;
    }
}

export default Create;
