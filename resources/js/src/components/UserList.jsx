import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Users extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            id:[],
            userList:[]
        }
    }

        DeleteHandler =()=>
    {

        axios.delete(`http://localhost:8000/api/user/${this.state.id}`);
        window.location.reload(true)
        //debug this for other day thanks
    }

   async componentDidMount()
    {
        const result=await axios.get('http://localhost:8000/api/user');
        this.setState({userList:result.data})
    }
    render() {
        const users=this.state.userList;
        return <div>
            <NavLink to='/create/user' className='btn btn-success'>New User</NavLink>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                  {
                       users.map(user=>{
                           return <tr key={user.id}>
                           <td scope="row">

                            <input type='checkbox' onClick={()=>this.setState({id:user.id})}/>
                               {user.id}

                           </td>
                           <td>
                               {user.name}
                           </td>
                           <td>
                               {user.email}
                           </td>
                           <td>
                              <NavLink className='btn btn-primary' to={`/user/edit/${user.id}`}>edit</NavLink>
                              <button className='btn btn-danger' onClick={this.DeleteHandler}>delete</button>
                           </td>
                       </tr>
                       })
                  }
                </tbody>
            </table>
        </div>;
    }
}

export default Users;
