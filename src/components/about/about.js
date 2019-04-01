import React from 'react';
import { withRouter } from 'react-router-dom';


class About extends React.Component {
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
export default withRouter(About);
