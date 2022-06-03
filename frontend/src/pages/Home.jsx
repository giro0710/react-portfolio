import { useState } from "react"
import { FaAngleLeft, FaAngleRight, FaMapMarkerAlt, FaMobileAlt, FaFacebook, FaFacebookMessenger, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import axios from "axios"
import { toast } from "react-toastify"

function Home() {
  const [currentBSI, setCurrentBSI] = useState(0) // BSI = Background Story Index
  const backgroundStories = [
    {
      photo: require("../assets/images/bulacan-state-university.jpg"),
      story: (
        <div className="item">
          <div className="title">
            <h1><i>Graduated at</i><br/>Bulacan State University</h1>
            <p>City of Malolos, Bulacan</p>
            <h1><i>with the degree of</i><br/>Bachelor of Science in Information Technology</h1>
            <p>2014 - 2018</p>
          </div>
        </div>
      )
    },
    {
      photo: require("../assets/images/gp-nagata.jpg"),
      story: (
        <div className="item">
          <div className="title">
            <h1>GP-Nagata <span>&#40;formerly known as Gameplan Marketing Solutions Inc.&#41;</span></h1>
          </div>
          <div className="context">
            <h1>Senior Web Developer <span>&#40;July 2018 to October 2019&#41;</span></h1>
            <ul>
              <li>Developed dashboard and device monitoring tools for internal use of the operation team.</li>
              <li>Developed content management system for partners and clients use.</li>
              <li>Successfully created a new product on top of existing product that produces 2 million new revenue for the company from McDonald's, Smart, Paymaya and GCash.</li>
              <li>Successfully integrated Programmatic Advertising to company Out-of-Home &#40;OOH&#41; screens with the help of Rubicon Project &#40;SSP&#41;, The Trade Desk &#40;DSP&#41;, DataXu &#40;DSP&#41; and Group M &#40;Media Agency&#41;. The product becomes the first programmatic OOH in the Philippines.</li>
              <li>Achieved the goal of my project which is to reduce the cost consumption of the company cloud infrastucture &#40;Amazon Web Services&#41; by 50%.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      photo: require("../assets/images/gp-nagata-2.jpg"),
      story: (
        <div className="item">
          <div className="title">
            <h1>GP-Nagata</h1>
          </div>
          <div className="context">
            <h1>Product Development Lead <span>&#40;October 2019 to September 2020&#41;</span></h1>
            <ul>
              <li>Developed dashboard and device monitoring tools for internal use of the operation team.</li>
              <li>Developed content management system for partners and clients use.</li>
              <li>Created various content templates and design for sponsorship that help sales on selling and getting clients.</li>
              <li>Oversee company process from development and customization of the product to installation and selling.</li>
              <li>Participated in company annual business review and strategic planning with my projects on it.</li>
              <li>Upgrade the company product hardware device from Rasberry Pi to Android which saved 65% of the product manufacturing cost.</li>
              <li>Created a system where all company products, partners and properties are marked and explorable on the map. It presented and used by many people during the launch of the company partnership with the Japanese.</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const handleNextBGStory = () => {
    let index = currentBSI;
    if (currentBSI < backgroundStories.length - 1) {
      setCurrentBSI(index+=1)
    } else {
      setCurrentBSI(0)
    }
  }

  const handlePrevBGStory = () => {
    let index = currentBSI;
    const lastIndex = backgroundStories.length - 1;
    if (currentBSI > 0) {
      setCurrentBSI(index-=1)
    } else {
      setCurrentBSI(lastIndex)
    }
  }

  const initialEmailOption = {
    email: "",
    subject: "",
    text: ""
  }

  const [emailOptions, setEmailOptions] = useState(initialEmailOption)

  const { email, subject, text } = emailOptions

  const sendEmail = async () => {
    const response = await axios.post("/service/mailer/send", emailOptions)

    if (response.status === 200) {
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }

    setEmailOptions(initialEmailOption)
  }

  const handleEmailFieldChange = (e) => {
    setEmailOptions((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const handleSubmitEmailoptions = (e) => {
    e.preventDefault()

    if (!email || !subject || !text) {
      toast.error("Please fill all fields.")
    }

    sendEmail()
  }

  return (
    <>
      <section className="header" id="header">
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

      <section className="skills" id="skills">
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

      <section className="stacks" id="stacks">
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

      <section className="background" id="background">
        <div className="container">
          <div className="body">
            <div className="photo">
              <img src={backgroundStories[currentBSI].photo} alt="Bulacan State University" />
            </div>
            <div className="story">
              <div className="controllers">
                <button onClick={handlePrevBGStory}><FaAngleLeft /></button>
                <button onClick={handleNextBGStory}><FaAngleRight /></button>
              </div>
              { backgroundStories[currentBSI].story }
            </div>
          </div>
        </div>
      </section>

      <section className="works" id="my-works">
        <div className="container">
          <div className="body">
            <img src={require("../assets/images/work-in-progress.png")} alt="work in progress" />
            <h1>This section is currently under contruction.</h1>
            <h2>Sorry &#x1F613;</h2>
          </div>
        </div>
      </section>

      <section className="contact" id="contact-me">
        <div className="container">
          <div className="item">
            <div className="title">
              <h1>Send me an email</h1>
            </div>
            <div className="body">
              <form onSubmit={handleSubmitEmailoptions}>
                <div className="form-group">
                  <input type="email" name="email" id="email" placeholder="Please enter your email" value={email} onChange={handleEmailFieldChange}/>
                </div>
                <div className="form-group">
                  <input type="text" name="subject" id="subject" placeholder="Subject" value={subject} onChange={handleEmailFieldChange}/>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your message here..." rows="5" name="text" id="text" value={text} onChange={handleEmailFieldChange}></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-block">Send</button>
                </div>
              </form>
              <p><i>&#40;I will send my response to your given email as soon as possible.&#41;</i></p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="body">
            <div className="download">
              <h1>Thank you for visiting!</h1>
              <a className="btn btn-download" download href="/Gian Roi Calvario - resume.pdf">Download CV</a>
            </div>
            <div className="info">
              <div className="item">
                <label>Blk. 4 L. 19 Maunlad Ave. Menzyland Subd. Mojon, City of Malolos, Bulacan</label>
                <FaMapMarkerAlt />
              </div>
              <div className="item">
                <label>62 Jasmine St. San Antonio Vill. Dalig, City of Antipolo, Rizal</label>
                <FaMapMarkerAlt />
              </div>
              <div className="item">
                <label>+63 968-709-5746</label>
                <span><FaMobileAlt /></span>
              </div>
              <div className="item">
                <label>+63 936-775-1390</label>
                <FaMobileAlt />
              </div>
              <div className="item social">
                <a href="https://facebook.com/ghianrhoi/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://m.me/ghianrhoi" target="_blank" rel="noopener noreferrer"><FaFacebookMessenger /></a>
                <a href="https://www.instagram.com/girocalvario/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com/Prost_GG" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com/in/giro-calvario" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home