import React from 'react';
import { withRouter } from 'react-router-dom';


export default class About extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    this.props.history.push('/about');
    return(
      <div>
        hey
      </div>
    )
  }
}
withRouter(About);
