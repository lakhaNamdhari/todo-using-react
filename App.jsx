import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      data: [
        {
          id: 10,
          name: "lakha singh",
          age: 29
        },
        {
          id: 20,
          name: "piara singh",
          age: 27
        },
        {
          id: 30,
          name: "Inder Singh",
          age: 25
        }
      ]
    }
  }

  increment() {
    this.setState({
      counter: ++this.state.counter
    })
  }

  render() {
    return (
      <div>
        <Header count={this.state.counter} />
        <button onClick={this.increment.bind(this)} >Click me</button>
        <table>
          <tbody>
            { this.state.data.map((person, i) => <TableRows data={person} key={i} />) }
          </tbody>
        </table>
      </div>
    );
  }
}



class Header extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');

    return true;
  }

  componentWillUpdate() {
    console.log('componentwillUpdate');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return(
      <header>
        <h1>Heading 1</h1>
        <h2>Count : {this.props.count}</h2>
        <p> Sex : {this.props.sex} status : {this.props.status ? 'True' : 'False'} </p>
      </header>
    );
  }
}

Header.propTypes = {
  sex: React.PropTypes.string.isRequired,
  status: React.PropTypes.bool
}

Header.defaultProps = {
  sex: 'male',
  status: true
};

class TableRows extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
