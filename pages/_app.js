import React from 'react'
import App, { Container } from 'next/app'
import {withMobx} from 'next-mobx-wrapper';
import {configure} from 'mobx';
import {Provider, useStaticRendering} from 'mobx-react';

import * as getStores from '../stores';
import { getCurrentUser } from '../util/APIUtils';

const isServer = !process.browser;

import axios from 'axios'
import Layout from '../components/Layout'

import '../css/bootstrap.css'
import '../css/font-awesome.css'
import '../css/offcanvas.css'
import '../css/style.css'

configure({enforceActions: 'observed'});
useStaticRendering(isServer); // NOT `true` value

const isClientOrServer = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // API 서버에서 카테고리 가져와 mobx 상태저장소에 저장
    const { categoryStore, userStore } = ctx.store
    await categoryStore.fetchCategorys();

    const categorys = categoryStore.getCategorys();

    if (isClientOrServer() === 'client') {
      getCurrentUser()
      .then(response => {
          // this.setState({
          //     currentUser: response,
          //     authenticated: true,
          //     loading: false
          // });
          console.log("test!!!!!:", response)
          userStore.setUser(response)
      }).catch(error => {
          // this.setState({
          //     loading: false
          // });
          //userStore.deleteUser()  
      });      
    }

    return { pageProps, categorys }
  }

  render () {
    const { Component, pageProps, store, categorys } = this.props

    return (
      <Container>
        <Provider {...store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withMobx(getStores)(MyApp);