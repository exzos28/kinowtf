import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import queryString from 'query-string'

import { VideoList, Button } from '../components/common'

import { Header, Sidebar } from '../containers'

import { getShortVideos } from '../api/short'

export default function Home(props) {
  const [loader, setLoader] = useState(false)
  const [pageData, setPageData] = useState(props.pageData)

  const { asPath } = useRouter()

  const getCurrentPage = () => {
    const queryParse = queryString.parse(asPath.split("/?")[1])
    const page = Number(queryParse.page || 1)
    return page
  }


  async function fetchData(params = {}) {
    setLoader(true)
    const response = await getShortVideos(params)
    setPageData(response)
    setLoader(false)
  }

  useEffect(() => {
    fetchData({ page: getCurrentPage() })
  }, [props])


  const _renderHeader = () => {
    if (pageData.current_page > 1)
      return (
        <Navigation>
          <Button onClick={() => Router.push(`/?page=${pageData.current_page - 1}`)}>
            Показать предыдущие
          </Button>
        </Navigation>
      )
  }

  const _renderFooter = () => {
    if (pageData.current_page !== pageData.last_page)
      return (
        <Navigation>
          {/* <Button onClick={() => Router.push(`/?page=${pageData.current_page + 1}`)}>
            Показать ещё
          </Button> */}
          <Link href="/" as={`/?page=${getCurrentPage() + 1}`}>
            <a>
              Показать ещё
            </a>
          </Link>
        </Navigation>
      )
  }

  const _renderContent = () => {
    if (loader)
      return <h2>Загружаю...</h2>
    else
      return (
        <>
          <VideoList data={pageData.data} />
        </>
      )
  }


  return (
    <Container className="container-lg">
      <Header />
      {_renderHeader()}
      {_renderContent()}
      {_renderFooter()}
    </Container>
  )
}



const Container = styled.div`
  padding-bottom: 50px
`

const Navigation = styled.div`
  padding-top: 30px
  padding-bottom: 50px
  display: flex
  justify-content: center
`

Home.getInitialProps = async function ({ query }) {
  const page = query.page || 1
  const pageData = await getShortVideos({ page })
  return { pageData, query }
}