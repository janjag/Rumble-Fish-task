import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions';
import Layout from './components/Layout/Layout';
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
            <Layout>
                <Results 
                    time={this.props.time}
                    value={this.props.value}
                    refresh={this.refreshData}
                />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
      time: state.time,
      value: state.value
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getTime: () => dispatch(actionCreators.getTime()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);