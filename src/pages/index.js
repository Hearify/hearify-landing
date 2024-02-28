import * as React from "react"
import Headery from "../components/Headery"
import Content from "../components/Content"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Content2 from "../components/Content2"
import { useState } from "react"
import MediaQuery from "react-responsive"
import NavBarPosts from "../components/NavBarPosts"

const IndexPage = () => {
  const [show, setShow] = useState(true)

  const handleShow = value => {
    setShow(value)
  }

  return (
    <div>
      <div className="container">
        <Headery />
        <MediaQuery query="(max-device-width: 860px)">
          <Content />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 861px)">
          {show ? (
            <Content handleShow={handleShow} />
          ) : (
            <Content2 handleShow={handleShow} />
          )}
        </MediaQuery>
        <NavBarPosts/>

        <Footer />
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
      </div>
    </div>
  )
}

export default IndexPage
