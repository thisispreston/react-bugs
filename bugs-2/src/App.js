import React from 'react';
import Item from './Item';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryList: ['apples', 'bread', 'milk', 'cheese']
    };
  }

  render() {
    const items = this.state.groceryList.map(item => {
      return <Item key={item} item={item} />;
    });

    return (
      <div className="">
        <h1>Grocery List</h1>
        {items}
      </div>
    );
  }
}
