import React from 'react';
import PropTypes from 'prop-types';
import data from '../../Data.json';
import './Container.css';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
      loading: 'true',
    }
  }
    componentDidMount() {
    console.log("data", data);
    this.setState({
      data: data,
      loading: false,
    });
  }

  render() {
     const { data, loading } = this.state;
     const { filterData, isFilterList } = this.props;
     console.log("inside container", filterData);
     let content = [];
     if( loading) {
         content = [
             <div className="loaderWrapper">
                 <div className="loader" />
                 <div className="loadingStatus">
                     loading.....
                 </div>
             </div>
         ];
     }
     else if (isFilterList && filterData.length > 0) {
       content = [
           filterData.map((items) => {
                   const imageUrl = items.image.map((img) => (
                       img.label
                   ));
                   const image = imageUrl.pop();
                   return (
                       <div className="detailCard">
                           <div className="cardWrapper">
                               <div className="imageWrapper">
                                   <img alt="coverPic" src={image} className="image"/>
                               </div>
                               <div className="detailWrapper">
                                   <div className="title">{items.name.label}</div>
                                   <div className="artistName">
                                       {items.artist.label.toLowerCase()}
                                   </div>
                                   <div className="genre">{items.category.attributes.label}</div>
                                   <div className="showMoreLink">
                                       <a target="_blank" href={items.link.attributes.href}
                                          className="showMoreLink"> Show more.. </a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   );
               }
           )
       ];
     }
     else {
       content = [
           data.entry.map((items) => {
                   const imageUrl = items.image.map((img, i) => (
                       img.label
                   ));
                   const image = imageUrl.pop();
                   return (
                       <div className="detailCard">
                           <div className="cardWrapper">
                               <div className="imageWrapper">
                                   <img alt="coverPic" src={image} className="image"/>
                               </div>
                               <div className="detailWrapper">
                                   <div className="title">{items.name.label}</div>
                                   <div className="artistName">
                                       <span className="artistTitle">Artist: </span>{items.artist.label}
                                   </div>
                                   <div className="genre">
                                       <span className="categoryTitle"> Category: </span> {items.category.attributes.label}
                                        </div>
                                   <div className="showMoreLink">
                                       <a target="_blank" href={items.link.attributes.href}
                                          className="showMoreLink"> Show more.. </a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   );
               }
           )
       ];
     }
    return (

      <div>
          {content}
      </div>
    );
  }
}

Container.propTypes = {
    filterData: PropTypes.array,
    isFilterList: PropTypes.bool,
};
Container.defaultProps = {
    filterData: [],
    isFilterList: false,
};

export default Container;
