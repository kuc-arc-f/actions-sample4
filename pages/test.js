import React from 'react'

import Layout from '../components/layout'
import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import TopHeadBox from '../components/TopHeadBox'
import IndexRow from './IndexRow';
//
function Page(data) {
// console.log(data.blogs)
  var items = data.blogs
  return (
    <Layout>
      <div className="body_main_wrap">
        <div className="container">
          <h1>Test:</h1>
          <hr />
          <ul>
          {items.map((item, index) => {
            return (<IndexRow key={index} id={item.id} 
              title={item.title} date={item.created_at} />       
            )
          })}          
          </ul>
        </div>
      </div>
    </Layout>
    )
}
export const getStaticProps = async context => {
//console.log( process.env.BASE_URL )
  return {
    props : {
      blogs: [],
    }
  };
}
export default Page
