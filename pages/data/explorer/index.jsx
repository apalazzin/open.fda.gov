/* @flow */

import React from 'react'
import DataExplorer from '../../../components/DataExplorer'
import Layout from '../../../components/Layout'
import Hero from '../../../components/Hero'

export default () => (
  <Layout
    crumbs={['API', 'Data Explorer']}
    title='openFDA › API › Data Explorer'>
    <Hero
      label='API'
      title='Data Explorer'
      description='Explore all openFDA data and visualize the results.'
    />
    <section className='container clearfix marg-t-3 marg-b-3 relative'>
      <DataExplorer/>
    </section>
  </Layout>
)
