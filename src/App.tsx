import React from 'react';
import logo from './assets/images/partly-cloudy-day.svg';
import './App.css';
import {SearchInput} from "./components/SearchInput";

function App() {

    const options = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes'];


    return (
        <div className="container mx-auto flex flex-col items-center py-8 gap-y-16 w-8/12">
            <div className="flex justify-center items-center gap-x-4">
                <img className="h-20" src={logo}/>
                <h2 className="text-2xl font-semibold text-blue-900">Weather App</h2>
            </div>

            <SearchInput options={options} />

        </div>
    );
}

export default App;
