import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React App</h1>
                <Button>Click Me</Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));