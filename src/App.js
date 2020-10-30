import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      {/*<Link to="/contact">Contact</Link>*/}
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      {/*<Link to="/contact">Contact</Link>*/}
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
      // <div style={{height: '300px', position: 'relative'}}>
      //     <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
      //         <Header transparent title="Title" style={{color: 'white'}}>
      //             <Navigation>
      //                 <Link to="/resume">Resume</Link>
      //                 <Link to="/aboutme">About Me</Link>
      //                 <Link to="/projects">Projects</Link>
      //                 <Link to="/contact">Contact</Link>
      //             </Navigation>
      //         </Header>
      //         <Drawer title="Title">
      //             <Navigation>
      //                 <Link to="/resume">Resume</Link>
      //                 <Link to="/aboutme">About Me</Link>
      //                 <Link to="/projects">Projects</Link>
      //                 <Link to="/contact">Contact</Link>
      //             </Navigation>
      //         </Drawer>
      //         <Content>
      //             <Main/>
      //         </Content>
      //     </Layout>
      // </div>
  );
}

export default App;
