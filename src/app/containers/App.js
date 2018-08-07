import React from "react";
import {connect} from "react-redux";

import  Sidebar  from "../components/Sidebar";
import  {Main}  from "../components/Main";
import { setSelectedStock } from "../actions/sidebarActions";

class App extends React.Component {
    
    handleStock = (stock) => {
        this.props.setSelectedStock(stock)
    }

    render() {
        return (
            <div className="container">
                <header>Assessment</header>
                <Sidebar stocks={this.props.stocks} onSelectStock={this.handleStock}  />
                <Main selectedStock={this.props.selectedStock} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return {
      stocks: state.sidebar.stocks,
      selectedStock: state.sidebar.selectedStock
  };
};

const mapDispatchToProps = (dispatch) => {
     return {
        setSelectedStock: (name) => {
             dispatch(setSelectedStock(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
