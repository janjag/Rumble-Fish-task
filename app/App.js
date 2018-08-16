import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions';
import Results from './components/Results/Results';

class App extends Component {

    componentDidMount = () => {
        this.props.getTime();
    }

    refreshData = () => {
        this.props.getTime();
    }

    render() {
        return(
            <Results 
                time={this.props.time}
                value={this.props.value}
                loading={this.props.loading}
                refresh={this.refreshData}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
      time: state.time,
      value: state.value,
      loading: state.loading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getTime: () => dispatch(actionCreators.getTime()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);