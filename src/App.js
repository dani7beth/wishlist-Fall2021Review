import React, { Component } from "react";
import "./App.css";
import Wish from "./Wish";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishList: [
        { id: 1, itemName: "journal", received: true },
        { id: 2, itemName: "ipad", received: false },
        { id: 3, itemName: "tv", received: true },
        { id: 4, itemName: "camera", received: false },
      ],
    };
  }

  deleteItem = (id) => {
    let newWishlist = this.state.wishList.filter((item) => id !== item.id);
    this.setState({ wishList: newWishlist });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Wish List</h1>
        <ul>
          {this.state.wishList.map((item) => {
            return (
              <Wish item={item} key={item.id} deleteItem={this.deleteItem} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
