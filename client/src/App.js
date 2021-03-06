import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import routes from './routes';
class App extends Component{
  render(){
  return(
    <React.Fragment>
      <Router>
           {this.showContentMenus(routes)}
      </Router>
    </React.Fragment>
  );
}
showContentMenus=routes=>{
      var result=null;
      if(routes.length>0)
      {
        result=routes.map((route,index)=>{
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        });
      }
      return <Switch>{result}</Switch>
    }
}
export default App;
