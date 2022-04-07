/** @jsx jsx */
import { jsx } from "theme-ui"
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"


const Homepage = () => {

  return (
    <Layout>
      <h1 sx="Kenneth Larsen"</h1>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
        <Hero />
      </section>
        <Bottom />
    </Layout>
  )
}

export default Homepage
