import React from 'react'
import Head from 'next/head';

import Layout from '../components/layout'
import TopHeadBox from '../components/TopHeadBox'
import PagingBox from '../components/PagingBox'
import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import IndexRow from './IndexRow';
import PagesRow from './PagesRow';
//
function Page(data) {
  var items = data.blogs
  var page_items = data.page_items
  var category_items = data.category_items
  var paginateDisp = data.display
// console.log( category_items )
  return (
  <Layout>
    <Head><title key="title">{data.site_name}</title></Head>      
    <TopHeadBox site_name={data.site_name} />
    <div className="body_main_wrap">
      <div className="container">Test
     
      </div>
    </div>
  </Layout>
  )
}
export const getStaticProps = async context => {
// console.log( process.env.site_id )
  
  return {
    props : {
      blogs: [],
    }
  };
}  
export default Page
  