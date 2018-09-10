import React, { Component } from 'react';
import Header from './Header/Header';
import data from '../Data.json';
import Container from './Container/Container';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: '',
      filterData: [],
        updatedList: [],
      isFilterList: false,
    };
    this.updateList = this.updateList.bind(this);
  }
  updateList(e){
    this.setState({value: e.target.value,
        isFilterList: !this.state.isFilterList,
        filterData: data.entry.filter(item =>
            item.artist.label.toLowerCase().includes(e.target.value.toLowerCase())
    )
  });
  }
  render() {
    return (
      <div className="app">
         <Header updateList={evt =>this.updateList(evt)}  value={this.state.value}/>
          <div className="contentWrapper">
              <Container
                  filterData={this.state.filterData}
                  isFilterList={this.state.isFilterList}
              />
          </div>
      </div>
    );
  }

}


export default App;

