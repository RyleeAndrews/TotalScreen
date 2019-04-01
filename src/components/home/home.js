import React from 'react';
import { withRouter } from 'react-router-dom';


class Home extends React.Component {
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
export default withRouter(Home);
