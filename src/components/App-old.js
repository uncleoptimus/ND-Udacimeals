import React, { Component } from 'react';
import '../App.css';

import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }

  componentDidMount () {
    const { store } = this.props

    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      }
    }))

    this.input.value = ''
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          ref={(input) => this.input = input}
          placeholder="Monday's breakfast"
        />
        <button onClick={this.submitFood}>
          submit
        </button>

        <pre>
          Monday's breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
