import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import Header from './components/Header';
import './App.css';

const API_KEY = '2da40d02e22c60165e0bcb627cf46a19';

class App extends React.Component {
    state = {
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        icon: '',
        startMessage: 'Enter a location to check the weather',
        error: ''
    };

    getWeather = async e => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (city && country) {
                    this.setState({
                        temperature: data.main.temp.toFixed(0),
                        city: data.name,
                        country: data.sys.country,
                        humidity: data.main.humidity,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                        startMessage: '',
                        error: ''
                    });
                } else {
                    this.setState({
                        temperature: '',
                        city: '',
                        country: '',
                        humidity: '',
                        description: '',
                        icon: '',
                        startMessage: '',
                        error: 'Please enter a City and Country'
                    });
                }
            })
            .catch(error => {
                this.setState({
                    temperature: '',
                    city: '',
                    country: '',
                    humidity: '',
                    description: '',
                    icon: '',
                    startMessage: '',
                    error:
                        'Oops! Something went wrong here. Lets try that again...Please enter a valid City and Country'
                });
            });
    };

    render() {
        return (
            <div className='pageContainer'>
                <div>
                    <Header />
                </div>
                <div className='weatherBody'>
                    <div className='formContainer'>
                        <Form getWeather={this.getWeather} />
                    </div>
                    <div className='weatherContainer'>
                        <Weather
                            temperature={this.state.temperature}
                            city={this.state.city}
                            country={this.state.country}
                            humidity={this.state.humidity}
                            description={this.state.description}
                            icon={this.state.icon}
                            startMessage={this.state.startMessage}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
