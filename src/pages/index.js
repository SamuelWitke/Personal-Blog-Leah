import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import 'semantic-ui-css/semantic.min.css'


export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}