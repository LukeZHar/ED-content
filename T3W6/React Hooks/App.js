import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { DiceResults } from './components/DiceResults';
import { DiceRollPage } from './components/DiceRollPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diceRollResults: []
        }

        this.setState = this.setState.bind(this);
    }

    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dice">Dice Results</Link>
                        </li>
                        <li>
                            <Link to="/dice/20">Roll a D20</Link>
                        </li>
                        <li>
                            <Link to="/dice/6">Roll a D6</Link>
                        </li>
                        <li>
                            <Link to="/dice/custom">Roll a Custom Dice Size</Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route exact path='/' element={<DiceResults diceResults={this.state.diceRollResults} />} />
                        <Route path='/dice' element={<Outlet />} >
                            <Route index element={<DiceResults diceResults={this.state.diceRollResults} />} />
                            <Route path='custom' element={<DiceRollPage addRollToResults={this.setState} />} />
                            <Route path='6' element={<DiceRollPage diceSize={6} addRollToResults={this.setState} />} />
                            <Route path='20' element={<DiceRollPage diceSize={20} addRollToResults={this.setState} />} />
                        </Route>
                    </Routes>

                </BrowserRouter>
            </div>
        );
    }
}

export default App;