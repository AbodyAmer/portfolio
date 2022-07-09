import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Hero, About, Jobs, Featured, Contact } from '@components'
import firebase from 'gatsby-plugin-firebase'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const IndexPage = ({ location }) => {
  useEffect(() => {
    if (!firebase) {
      return
    }

    firebase.analytics().logEvent('visited_homepage')
  }, [firebase])
  return (
    <Layout location={location}>
      <StyledMainContainer className='fillHeight'>
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage
