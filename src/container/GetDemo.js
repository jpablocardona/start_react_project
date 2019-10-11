import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Demo } from '../components/Demo'

const GET_DEMO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { photo } = data

  return <Demo {...photo} />
}

export const DemoWithQuery = ({ id }) => (
  <Query query={GET_DEMO} variables={{ id }} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
