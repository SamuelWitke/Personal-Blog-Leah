import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"
import { Grid, Image } from 'semantic-ui-react'
import { gsap, MotionPathPlugin } from "gsap/all";
import Typography from '../../static/Typography.svg'

class Header extends React.Component {

  componentDidMount() {
    //register the plugin
    gsap.registerPlugin(MotionPathPlugin);

    gsap.set(".ball", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50%, 50%"
    })
    const timeline = gsap.timeline()
    timeline
      .to(".ball", {
        duration: 10,
        motionPath: {
          path: ".loop",
          align: ".loop",
        },
      }, 5.1)
      .add(() => timeline.play(0), 8.2)
  }
  render() {
    const props = this.props
    return <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <Grid columns={2} divided  columns='equal'>
            <Grid.Row >
              <Grid.Column computer="12" >
                <Image size="medium" centered>
                  <Typography />
                </Image>
              </Grid.Column>
              <Grid.Column computer="12">
                <Image
                  circular
                  size="small"
                  src={
                    props.image.publicURL
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Link>
        <div>
          <h1>
            <Link
              to={
                props.page === 'info'
                  ? "/"
                  : "/info"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'info'
                ? "close"
                : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  }
}

export default Header