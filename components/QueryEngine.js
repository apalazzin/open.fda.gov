/* @flow */


import React from 'react'
import cx from 'classnames'

import QueryEngineContainer from '../containers/QueryEngineContainer'
import Select from 'react-select';
import Highlight from 'react-highlight'

import 'react-select/dist/react-select.css';

type tPROPS = {
  data: object;
  api_query: string;
  get_result: Function;
  show_results: boolean;
};

const QueryEngine = (props: tPROPS) => {
  const {
    data,
    show_results,
    api_query
  } = props

  return (
    show_results &&
    <Highlight>
    {data}
    </Highlight>
  )
}

QueryEngine.displayName = 'component/QueryEngine'
export default QueryEngineContainer(QueryEngine)
