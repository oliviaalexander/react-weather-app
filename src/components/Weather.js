import React from 'react';

function Weather(props) {
    const startMessage = {
            textAlign: 'center',
            fontSize: '28px'
        },
        weatherInfo = {
            color: '#EDEDF0',
            display: 'block',
            width: '90%',
            margin: '0 auto',
            backgroundColor: '#635F7B',
            textAlign: 'center',
            borderRadius: '10px'
        },
        location = {
            fontSize: '35px',
            paddingTop: '10px'
        },
        temperature = {
            fontsize: '35px'
        },
        weatherData = {
            fontSize: '18px'
        },
        icon = {
            fontSize: '36px'
        },
        error = {
            fontSize: '20px',
            color: '#640A16',
            padding: '50px 10px',
            display: 'block',
            borderRadius: '25px',
            width: '80%',
            height: '50vh',
            margin: '0 auto',
            backgroundColor: '#635F7B',
            textAlign: 'center'
        };

    if (!props.city) {
        weatherInfo.display = 'none';
    }

    return (
        <div>
            <div style={weatherInfo}>
                {props.city && props.country && (
                    <p style={location}>
                        {' '}
                        {props.city}, {props.country}
                    </p>
                )}
                {props.temperature && (
                    <p style={temperature}>{props.temperature}&#176;F</p>
                )}
                {props.description && (
                    <p style={weatherData}>{props.description}</p>
                )}
                {props.humidity && (
                    <p style={weatherData}>{props.humidity}% humidity</p>
                )}
                {props.icon && (
                    <img
                        alt='weather icon'
                        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
                        style={icon}
                    />
                )}
            </div>
            <div style={startMessage}>
                {props.startMessage && <p>{props.startMessage}</p>}
            </div>
            <div>{props.error && <h1 style={error}> {props.error}</h1>}</div>
        </div>
    );
}

export default Weather;
