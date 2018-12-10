import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3", "tag4"]
  // };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  //   renderTag() {
  //     if (this.state.count === 0) return <p>there are no tags !</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  // handleIncrement = () => {
  //   console.log(this.state);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      //   <React.Fragment>
      //     <h1>Hello world</h1>
      //     <button>increment</button>
      //     </React.Fragment>
      <div>
        {/*img src={this.state.imageUrl}*/}
        {this.props.id}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatcount()}
        </span>

        <button
          style={this.styles}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>  

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.state.count === 0 && "please create a new "}
    {this.renderTag()}*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    let count = this.props.counter.value;
    return count === 0 ? "zero" :count
  }
}

export default Counter;
