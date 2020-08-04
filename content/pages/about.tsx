import { Layout } from 'gatsby-theme-potato'
import React, { FC } from 'react'

const About: FC<{ uri: string }> = ({ uri }) => {
  return (
    <Layout url={uri} title="About this blog">
      <h1>Acerca de nuestro grupo</h1>
      <p>
        Lorem ipsum...{' '}
        <strong>Si vis pacem, para bellum</strong> 🥔
      </p>
    </Layout>
  )
}

export default About
