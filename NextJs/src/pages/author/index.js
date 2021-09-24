import Layout from "../../components/Layout"
import Blog from "../../components/Blog";
import Sidebar from "../../components/Sidebar";


export default function Category({posts}) {
  return (
    <Layout title="Author Pages">
      <section className="main-content list">
        <Blog posts={posts} />

        <Sidebar />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {

  // Get external data from the file system, API, DB, etc.
  const posts = [
    {
      title: " con co be be"
    },
    {
      title: " con co be be 2"
    },
    
  ]

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      posts
    }
  }
}