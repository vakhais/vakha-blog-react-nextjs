import React from 'react'
import App, { Container } from 'next/app'
import axios from 'axios'
import Layout from '../components/Layout'

import '../css/bootstrap.css'
import '../css/font-awesome.css'
import '../css/offcanvas.css'
import '../css/style.css'

export default class MyApp extends App {
  categorys = []

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const result = await axios.get('http://localhost:8080/api/categorys');
    const categorys = result.data;

    return { pageProps, categorys }
  }

  render () {
    const { Component, pageProps, categorys } = this.props
    return (
      <Container>
        <Layout categorys={categorys}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}