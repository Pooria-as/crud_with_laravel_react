import React  from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch,Route } from "react-router-dom";
import UserList from "./components/UserList";
import Create from "./components/Create";
import Edit from "./components/Edit";


class App extends React.Component {
constructor(props)
{
    super(props);
}
    render() {
        return <div>
            <Switch>
                <Route exact path='/' render={(renderProps)=><UserList {...renderProps}/>}/>
                <Route exact path='/create/user' render={(renderProps)=> <Create {...renderProps}/> } />
                <Route exact path='/user/edit/:id' render={(renderProps)=> <Edit id={renderProps.match.params.id} {...renderProps}/>}/>
            </Switch>
        </div>;
    }
}

export default App;
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
,document.querySelector("#root"));
