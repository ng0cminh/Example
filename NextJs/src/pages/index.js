import Layout from "../components/Layout"
import Blog from "../components/Blog";

export default function Home({posts}) {
  return (
    <Layout title="Home Pages">
      <section className="main-content grid">
        <Blog posts={posts} />
      </section>
    </Layout>
  )
}


export async function getStaticProps() {

  const posts = [
    {
      title: " con co be be"
    },
    {
      title: " con co be be 2"
    },
    
  ]

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      posts
    }
  }
}