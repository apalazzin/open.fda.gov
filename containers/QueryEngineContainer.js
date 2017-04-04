/* @flow */

import React from 'react'

import xhrGET from '../utils/xhr'



type tSTATE = {
  data: ?Array<Object>;
  api_query: string;
  show_results: boolean
};

// A state wrapper for the api status component
// just fetches data and then passes it down as props
const QueryEngineContainer = function (ComposedQueryEngine: ReactClass): ReactClass {
  class HOC extends React.Component {
    state: tSTATE = {
      data: null,
      api_query: "drug/label.json",
      show_results: null
    };

    componentDidMount () {
      this.get_result()
    }

    get_result (api_query) {
      const _handleResponse = data => {
        this.setState({
          data: data,
          show_results: true,
        })
      }

      xhrGET('https://api.fda.gov/' + api_query, _handleResponse)
    }

    render (): ?React.Element {
      return (
        <ComposedQueryEngine
          { ...this.props }
          { ...this.state }
          get_result={this.get_result.bind(this)}
        />
      )
    }
  }

  return HOC
}

export default QueryEngineContainer