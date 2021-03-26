import React, {Component} from 'react'
import './App.css';

import TodoItem from './components/TodoItem/TodoItem'
import EntryInput from './components/EntryInput/EntryInput'

class App extends Component {
  state = {
    entries: ['React.js', 'Node.js'],
    inputValue: ''
  }

  inputChangedHandler = (event) => {
    // const inputValue = event.target.value;
    // const entries = [...this.state.entries];
    // entries.push(inputValue)
    // this.setState({entries: entries})
    this.setState({inputValue: event.target.value})

  }

  submitHandler = (e) => {
    e.preventDefault()
    e.target.reset() 
    const entry = this.state.inputValue
    if (entry === '') return
    const entries = [...this.state.entries];
    entries.push(entry)
    this.setState({ entries: entries })
    
  }

  deleteEntryHandler = (i) => {
    const entries = [...this.state.entries]
    entries.splice(i, 1)
    this.setState({entries: entries})
  }

  clear = () => {
    const entries = []
    this.setState({entries: entries})
  }
  
  render() {
    let entriesList = this.state.entries.map((entry, i) => {
      return <TodoItem entry={entry} delete={() => this.deleteEntryHandler(i)} />
    })

    return (
      <div className="App">
        <h1>TO-DO LIST</h1>
        <EntryInput
          changed={this.inputChangedHandler}
          submit={this.submitHandler}
        />
        {entriesList}
        <p>{this.state.entries.length} {this.state.entries.length === 1 ? 'task': 'tasks' } left!</p>
        <button className='clr' onClick={this.clear}>Clear All</button>
      </div>
    );
  }
}

export default App;
