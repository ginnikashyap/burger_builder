import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div>
       <Layout>
          <p>Test</p>
          <BurgerBuilder>
          </BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
