import React from 'react';
import Masonry from 'react-masonry-component';
class WorkItems extends React.Component {
  render(){
    return(
      <Masonry className='my-gallery-class'>
           { this.props.children }
       </Masonry>
    );
  }
}
export default WorkItems;
