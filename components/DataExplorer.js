/* @flow */


import React from 'react'
import cx from 'classnames'

import Hero from './Hero'
import Layout from './Layout'
import DataExplorerContainer from '../containers/DataExplorerContainer'


type tPROPS = {
  data: object;
  noun: string;
  api_query: string;
  toggleDropdownContent: Function;
  hideDropdownContent: Function;
  showDropdownContent: Function;
  activeDropdown: string;
};

const nounLinkMap: Array = [
  'device',
  'drug',
  'food'
];

const endpointLinkMap: Object = Object.freeze({
  'device': [
    'class',
    'clearance',
    'enforcement',
    'event',
    'pma',
    'recall',
    'reglist',
    'udi'
  ],
  'drug': [
    'enforcement',
    'event',
    'label'
  ],
  'food': [
    'event',
    'enforcement'
  ]
});

const DataExplorer = (props: tPROPS) => {
  const {
    data,
    noun,
    api_query,
    hideDropdownContent,
    showDropdownContent,
    toggleDropdownContent,
    activeDropdown
  } = props

  return (
    <ul className='flex-box dir-row flex-wrap'>
      <form onSubmit={props.onSubmit}>
        <div className='select-wrap'>
          <select className='select clr-primary'>
            {
              Object.keys(endpointLinkMap[noun]).map((end, i) => {
                const endpoint = endpointLinkMap[end]

                return (
                  <option
                    key={i}
                    className='marg-t-1 pad-t-1 pad-l-2 pad-r-2 b-b-1 qe-li reverse-pre relative'
                    tabIndex={0}>{endpoint}
                  </option>
                )
              })
            }
          </select>
        </div>
        <label>
          <span>Explorer Form</span>
          <input
            className='marg-b-2 font-size-5 pad-1 row'
            id='explorer-form'
            defaultValue=''
            type='text'
            placeholder='Enter your email address'
          />
        </label>
        <button
          className='block marg-b-2 bg-primary clr-white weight-700'
          onClick={props.onSubmit}>
          Search
        </button>
      </form>
    </ul>
  )
}

DataExplorer.displayName = 'component/DataExplorer'
export default DataExplorerContainer(DataExplorer)
