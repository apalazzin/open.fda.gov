/* @flow */

import React from 'react'

import xhrGET from '../utils/xhr'
import mapFields from '../utils/mapFields'
import flattenFields from '../utils/flattenFields'

import device_class_fields from '../pages/device/classification/_fields.yaml'
import device_clearance_fields from '../pages/device/510k/_fields.yaml'
import device_enforcement_fields from '../pages/device/enforcement/_fields.yaml'
import device_event_fields from '../pages/device/event/_fields.yaml'
import device_pma_fields from '../pages/device/pma/_fields.yaml'
import device_recall_fields from '../pages/device/recall/_fields.yaml'
import device_reglist_fields from '../pages/device/registrationlisting/_fields.yaml'
import device_udi_fields from '../pages/device/udi/_fields.yaml'
import drug_enforcement_fields from '../pages/drug/enforcement/_fields.yaml'
import drug_event_fields from '../pages/drug/event/_fields.yaml'
import food_enforcement_fields from '../pages/food/enforcement/_fields.yaml'
import food_event_fields from '../pages/food/event/_fields.yaml'



type tSTATE = {
  data: ?Array<Object>;
  noun: string;
  endpoint: string;
  fields: Array;
  api_query: ?Array<Object>;
};

// A state wrapper for the api status component
// just fetches data and then passes it down as props
const DataExplorerContainer = function (ComposedDataExplorer: ReactClass): ReactClass {
  class HOC extends React.Component {
    state: tSTATE = {
      data: null,
      noun: null,
      endpoint: null,
      fields: [],
      api_query: null,
      showResult: false
    };

    componentDidMount () {
      this._getResult()
    }

    noun_change (value: Object) {
      console.log(value['value'])
      console.log(this.state.noun)
      this.setState({
        noun: value['value']
      })
    }

    endpoint_change (value: Object) {
      console.log(value['value'])
      console.log(this.state.endpoint)
      this.setState({
        endpoint: value['value']
      })
      console.log("time to populate")
      this.populate_fields(value['value'])
    }

    populate_fields (ep) {
      console.log("populate")
      const _handleResponse = data => {
        let fields_array = []
        console.log(data['results'][0])
        iterate(data['results'][0], fields_array, "")
        console.log("fields_array is: ", fields_array)
        this.setState({
          fields: fields_array
        })
      }
      function iterate(obj, array, stack) {
        for (let prop in obj) {
          console.log("prop: ", prop, "type: ", typeof obj[prop], "stack: ", stack)
          if ((obj.hasOwnProperty(prop)) && (isNaN(prop))) {
            if (typeof obj[prop] == "object") {
              iterate(obj[prop], array, stack + '.' + prop);
            } else {
              console.log("prop: ", prop + "   " + obj[prop]);
              array.push(stack + prop)
            }
          }
        }
      }

      xhrGET('https://api.fda.gov/' + this.state.noun + '/' + ep + '.json', _handleResponse)
    }

    _getResult () {
      const _handleResponse = data => {
        this.setState({
          data,
          showResult: true,
        })
      }

      xhrGET('https://api.fda.gov/' + this.state.noun + '/' + this.state.endpoint + '.json', _handleResponse)
    }

    render (): ?React.Element {
      return (
        <ComposedDataExplorer
          { ...this.props }
          { ...this.state }
          noun_change={this.noun_change.bind(this)}
          endpoint_change={this.endpoint_change.bind(this)}
          populate_fields={this.populate_fields.bind(this)}
        />
      )
    }
  }

  return HOC
}

export default DataExplorerContainer