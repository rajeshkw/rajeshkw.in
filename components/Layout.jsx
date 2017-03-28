import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Layout extends React.Component {
  constructor(props){
    super(props);
    document.title = this.props.title;
  }
  render(){
    return(
      <div>
        <Header active={this.props.active} />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
export default Layout;
