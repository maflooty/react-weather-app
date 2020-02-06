import React from 'react'


class Weather extends React.Component {
    render() {
        return (
            <div className = 'weather_info'>
                {this.props.city && this.props.country && <p className = 'weather_key'>Location: <span className = 'weather_value'> {this.props.city}, {this.props.country}</span></p>}
                {this.props.temperature && <p className = 'weather_key'>Temperature: <span className = 'weather_value'>{this.props.temperature}</span></p>}
                {this.props.humidity && <p className = 'weather_key'>Humidity: <span className = 'weather_value'>{this.props.humidity}</span></p>}
                {this.props.description && <p className = 'weather_key'>Condition: <span className = 'weather_value'>{this.props.description}</span></p>}
                {this.props.error && <p className = 'weather_error'>{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather;