/* @flow */

import React from 'react'
import xhrGET from '../utils/xhr'

type tSTATE = {
  data: ?Array<Object>;
  api_query: ?Array<Object>;
};

// A state wrapper for the api status component
// just fetches data and then passes it down as props
const DataExplorerContainer = function (ComposedDataExplorer: ReactClass): ReactClass {
  class HOC extends React.Component {
    state: tSTATE = {
      data: null,
      api_query: null
    };

    componentDidMount () {
      this._getResult()
    }

    _getResult () {
      const _handleResponse = data => {
        this.setState({
          data,
        })
      }

      xhrGET('https://api.fda.gov/' + api_query, _handleResponse)
    }

    render (): ?React.Element {
      if (!this.state.data) {
        return (
          <section
            className='flex-box font-size-2 just-center align-center'
            style={{
              minHeight: '50vh',
            }}>
            Loading..
          </section>
        )
      }

      return (
        <ComposedDataExplorer
          data={this.state.data}
        />
      )
    }
  }

  return HOC
}

export default DataExplorerContainer