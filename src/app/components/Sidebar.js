import React from "react";

//export const Sidebar = (props) => {
 class Sidebar extends React.Component {
    handleStockClick = (name) => {
        this.props.onSelectStock(name);            
    }
    render(){
    return (
        <div className="sidenav">
            {this.props.stocks.map((name, index) => {
                return <a key={index}  onClick={()=>this.handleStockClick(name)} >{name}</a>
            })}
        </div>
    );
}
}
export default Sidebar
