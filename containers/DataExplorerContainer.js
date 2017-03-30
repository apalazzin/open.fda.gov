/* @flow */

import React from 'react'
import xhrGET from '../utils/xhr'

type tSTATE = {
  data: ?Array<Object>;
  noun: string;
  api_query: ?Array<Object>;
};

// A state wrapper for the api status component
// just fetches data and then passes it down as props
const DataExplorerContainer = function (ComposedDataExplorer: ReactClass): ReactClass {
  class HOC extends React.Component {
    state: tSTATE = {
      data: null,
      noun: null,
      api_query: null,
      showMobileNav: false,
      showResult: false
    };

    componentDidMount () {
      this._getResult()
    }

    _getResult () {
      const _handleResponse = data => {
        this.setState({
          data,
          showResult: true,
        })
      }

      xhrGET('https://api.fda.gov/' + api_query, _handleResponse)
    }

    render (): ?React.Element {
      return (
        <ComposedDataExplorer
          data={this.state.data}
          noun={this.state.data}
        />
      )
    }
  }

  return HOC
}

export default DataExplorerContainer