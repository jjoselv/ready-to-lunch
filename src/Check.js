import React from 'react';

class Check extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <label>
                <input type="checkbox" value={this.state.value} onChange={this.handleChange} /> {this.props.name}
            </label>
        );
    }
}

export default Check;