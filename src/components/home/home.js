import React from 'react';
import { withRouter } from 'react-router-dom';


export default class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    this.props.history.push('/');
    return(
      <div>

      </div>
    )
  }
}
withRouter(Home);
