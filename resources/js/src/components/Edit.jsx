import axios from 'axios';
import React from 'react';

class Edit extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
   async componentDidMount()
    {
        let result=await axios.get(`http://localhost:8000/api/user/${this.props.id}`);
        let resultData=result.data;
        this.setState({
            name:resultData.name,
            email:resultData.email,
            password:resultData.email}
            );

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
        const UserUpdateData={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        axios.put(`http://localhost:8000/api/user/${this.props.id}`,UserUpdateData);
        alert("updated");
        this.props.history.push('/');

    }
    render() {

        return <div className='card'>
            <div className='card-header'>
                <h2>
                    Update User
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
                        value={this.state.name}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor='email'>Email</label>
                      <input
                      onChange={this.EmailHandler}
                      type="email"
                       name="email"
                       id="email"
                       className="form-control"
                      value={this.state.email} />
                    </div>
                    <div className="form-group">
                      <label htmlFor='password'>Password</label>
                      <input
                      onChange={this.PasswordHandler}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <button
                        type='submit'
                        className='btn btn-block btn-primary'>Edit</button>
                    </div>
                </form>
            </div>

        </div>;
    }
}

export default Edit;
