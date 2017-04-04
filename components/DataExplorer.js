/* @flow */


import React from 'react'
import cx from 'classnames'

import DataExplorerContainer from '../containers/DataExplorerContainer'
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import QueryEngine from '../components/QueryEngine'
import QueryEngineContainer from '../containers/QueryEngineContainer'

type tPROPS = {
  data: object;
  noun: string;
  endpoint: string;
  fields: string;
  api_query: string;
  noun_change: Function;
  endpoint_change: Function;
  populate_fields: Function;
};

const noun_list: Array = [
  {value: 'device', label: 'Device'},
  {value: 'drug', label: 'Drug'},
  {value: 'food', label: 'Food'}
];

const endpoint_list: Object = Object.freeze({
  'device': [
    {value: 'class', label: 'Class'},
    {value: 'clearance', label: 'Clearance'},
    {value: 'enforcement', label: 'Enforcement'},
    {value: 'event', label: 'Event'},
    {value: 'pma', label: 'PMA'},
    {value: 'recall', label: 'Recall'},
    {value: 'reglist', label: 'Reglist'},
    {value: 'udi', label: 'UDI'},
  ],
  'drug': [
    {value: 'enforcement', label: 'Enforcement'},
    {value: 'event', label: 'Event'},
    {value: 'label', label: 'Label'},
  ],
  'food': [
    {value: 'event', label: 'Event'},
    {value: 'enforcement', label: 'Enforcement'}
  ]
});

const ComposedQueryEngine: ReactClass = QueryEngineContainer(QueryEngine)

const DataExplorer = (props: tPROPS) => {
  const {
    data,
    noun,
    endpoint,
    fields,
    api_query,
    noun_change,
    endpoint_change,
    populate_fields
  } = props

  return (
    <div>
    <ul className='flex-box dir-row flex-wrap'>
      <form onSubmit={props.onSubmit}>
        <label>Noun</label>
        <Select name='noun_select' options={noun_list} onChange={noun_change} value={noun}/>
        <label>Endpoint</label>
        <Select name='endpoint_select' options={endpoint_list[noun]} onChange={endpoint_change} value={endpoint}/>
        <label>Fields</label>
        <Select name='fields_select' options={fields} />
        <button
          className='block marg-b-2 bg-primary clr-white weight-700'
          onClick={props.onSubmit}>
          Search
        </button>
      </form>
    </ul>
    <div>
      <ComposedQueryEngine/>
    </div>
    </div>
  )
}

DataExplorer.displayName = 'component/DataExplorer'
export default DataExplorerContainer(DataExplorer)
