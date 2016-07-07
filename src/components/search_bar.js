import React, { Component } from 'react';// need to translate jsx into normal js, so need to import react for those files have jsx
//{Component} here means the declearing action of "const Component = React.Component;"

//class based Component
// keep track of the info which need to be updated
class SearchBar extends Component {
  //each class based Component have it's own state object
  //initialize state in react
  constructor(props) {
    // called whenever a instance of this class called,
    // like do some initial variables
    super(props);// super to call from {Component (the parent)} method

    this.state = { term: '' };    //property term/ search term (this.state.term to be the value of string instead on empry string)
    //term can be renamed here, can use any name else
    //manipulate state in consructor
    //this.state = xxx can only be used here in the consructor, other places need to use the this.setState
  }

  //must have a render method for the class which extends the react Components
  render() {
    //using .setState here in other places except the consructor to update the state of current class or consructor
    //normal js code wrap in {}
    //should not assign value to term
    //value of the input will be : {this.state.term}
    //this.state.term  no need to use the jquery to select the value
    return (
      <div className="search-bar">
        <input
          value={this.state.term}//controlled element, change when the state changes
          //onChange={event => this.setState({ term: event.target.value})} />
          onChange={event => this.onInputChange(event.target.value)} />//input value pass in here
      </div>
    );
    //(1)input tell the state what it(the state) should be
    //(2) when user change the inpit, it donot update the value directly
    //just trigger a set state event to make the input value be the update value
    //---here the input event triggers state changes, then cause re-render of class, which cause the class to be print out the new value of state term
    //then make the update
    //-------------------------
    //return <input onChange={(event) => console.log(event.target.value)} />;
    //return <input onChange={this.onInputChange} />  //imp: {} here is to wrap the normal js(this.fucntions), inside the jsx code
    //return <input />;
  }

  onInputChange(term) {
    this.setState({term});//set state
    this.props.onSearchTermChange(term);//fire off the call back to allow index to update the search term change
  }
  //event handler and the function to handle the event
  /*
  onInputChange(event) { //method name (imp)
    var eventValue = event.target.value;
    event.persist//which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
    setTimeout(function() {
      console.log('1..'+event.target.value);//check for the events inside the react docs about different kind of events
      console.log('2..'+eventValue);
    }, 0);
  }
  */
}


//const SearchBar = () => {// function Component
//  return <input />; //React.createElement, try to create a element of input to the user
//};
//class based Component
export default SearchBar;//any file which import the searc_bar will have this SearchBar Component available
