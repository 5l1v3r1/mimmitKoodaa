import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    indexOfCurrentCat: 0,
    contentType: "mainPage",
    catPictures: [
      "https://cdn2.thecatapi.com/images/196.gif",
      "https://cdn2.thecatapi.com/images/bok.jpg",
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
      "https://www.rd.com/wp-content/uploads/2018/04/shutterstock_728421994-760x506.jpg"
    ],
    liked:[],
    likedTooMuch:[],
  };

  addSooMuchLiked = () => {
    this.setState(function(state) {
      this.state.likedTooMuch.push(state.indexOfCurrentCat);
      const newIndex = state.indexOfCurrentCat + 1;
      if (newIndex < this.state.catPictures.length) {
        return { indexOfCurrentCat: newIndex };
      }
      return { indexOfCurrentCat: 0 };
    });
  }

  addLiked = () => {
    this.setState(function(state) {
      this.state.liked.push(state.indexOfCurrentCat);
      const newIndex = state.indexOfCurrentCat + 1;
      if (newIndex < this.state.catPictures.length) {
        return { indexOfCurrentCat: newIndex };
      }
      return { indexOfCurrentCat: 0 };
    });
  }

  showLiked = () => {
    this.setState(function(state) {
      return { contentType: "liked" };
    });
    console.log(this.state.liked);
  }

  showSooMuchLiked = () => {
    this.setState(function(state) {
      return { contentType: "sooLiked" };
    });
  }

  showMainPage = () => {
    this.setState(function(state) {
      return { contentType: "mainPage" };
    });
  }

  createContent = () => {
    if (this.state.contentType==="mainPage"){
      return (
          <div>
            <img src={this.state.catPictures[this.state.indexOfCurrentCat]} alt="logo" />
            <div>
              <button onClick={this.addLiked}>Like</button>
              <button onClick={this.addSooMuchLiked}>Soo Cute</button>
            </div>
          </div>
      );
    } else if ( this.state.contentType==="liked") {
      return (
        <div className="App">
          {this.state.liked.map(like => {
            return (
              <div>
                <img src={this.state.catPictures[like]} alt="logo" />
              </div>
            );
          })}
        </div>
      )
    } else if ( this.state.contentType==="sooLiked") {
      return (
        <div className="App">
          {this.state.likedTooMuch.map(like => {
            return (
              <div>
                <img src={this.state.catPictures[like]} alt="logo" />
              </div>
            );
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.createContent()}
          <div>
          <button onClick={this.showLiked}>All liked cats</button>
          <button onClick={this.showSooMuchLiked}>All soooo cute cats</button>
          <button onClick={this.showMainPage}>Main Page</button>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
