import React from 'react'

function Home() {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="title">
            <h1>Gian Roi Calvario</h1>
            <h2>&lt;Web Developer /&gt;</h2>
          </div>
          <div className="body">
            <p>
              Professional <b>web developer</b> with more than two years of experience in creating tools for the company, partners and clients. Involved in <b>product development</b>, <b>resource management</b>, <b>leading operations</b>, <b>sales support</b>, and <b>creating new business opportunities</b> for the company.
            </p>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <div className="body">
            <div className="item">
              <img src={require("../assets/images/web-development.png")} alt="web development" />
              <h1>Web</h1>
              <p>Develop fast, user-friendly, and easily accesible website for your business, blog, and advertisement.</p>
            </div>
            <div className="item">
              <img src={require("../assets/images/mobile-development.png")} alt="mobile development" />
              <h1>Mobile</h1>
              <p>Create mobile applications with the power of web technologies that can run in both Android and iOS using the same code.</p>
            </div>
            <div className="item">
              <img src={require("../assets/images/api-development.png")} alt="api development" />
              <h1>API</h1>
              <p>Helps you manage and create RESTful API to support your web and mobile applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stacks">
        <div className="container">
          <div className="body">
            <div className="stack">
              <div className="description">
                <h1>Technologies that I Know<span>: </span></h1>
              </div>
              <div className="technologies">
                <div className="item">
                  <img src={require("../assets/images/html.png")} alt="html" />
                  <label>HTML</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/css.png")} alt="css" />
                  <label>CSS</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/js.png")} alt="javascript" />
                  <label>JavaScript</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/jquery.png")} alt="jquery" />
                  <label>JQuery</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/php.png")} alt="php" />
                  <label>PHP</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/mysql.png")} alt="mysql" />
                  <label>MySQL</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/mongodb.png")} alt="mongodb" />
                  <label>MongoDB</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/nodejs.png")} alt="nodejs" />
                  <label>NodeJS</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/express.png")} alt="express" />
                  <label>Express</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/jwt.png")} alt="jwt" />
                  <label>JWT</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/bootstrap.png")} alt="bootstrap" />
                  <label>Bootstrap</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/sass.png")} alt="sass" />
                  <label>SASS</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/react.png")} alt="react" />
                  <label>React</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/react-native.png")} alt="react native" />
                  <label>React Native</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/redux.png")} alt="redux" />
                  <label>Redux</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/aws.png")} alt="amazon web services" />
                  <label>AWS</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/heroku.png")} alt="heroku" />
                  <label>Heroku</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/git.png")} alt="git" />
                  <label>Git</label>
                </div>
              </div>
            </div>
            <div className="stack">
              <div className="description">
                <h1>Tools that I'm Using<span>: </span></h1>
              </div>
              <div className="technologies">
                <div className="item">
                  <img src={require("../assets/images/vscode.png")} alt="vs code" />
                  <label>VS Code</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/postman.png")} alt="postman" />
                  <label>Postman</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/github.png")} alt="github" />
                  <label>Github</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/expo.png")} alt="expo" />
                  <label>Expo</label>
                </div>
                <div className="item">
                  <img src={require("../assets/images/photoshop.png")} alt="photoshop" />
                  <label>Photoshop</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="background">
        <div className="container">
          <h1>Background</h1>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <h1>My Works</h1>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h1>Contact Me</h1>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="body">
            <h1>Footer</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home