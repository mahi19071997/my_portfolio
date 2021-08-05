import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://drive.google.com/file/d/1y1MLnmROge729QLPBw7pvdjY85wxlCur/view?usp=sharing" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="https://npm-assets.fiverrcdn.com/assets/layout/fiverr-og-logo.99c4dbf.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Fiverr Clone</h3>
                      <p>Fiverr is an Israeli online marketplace for freelance services.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://drive.google.com/file/d/1y1MLnmROge729QLPBw7pvdjY85wxlCur/view?usp=sharing" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/mahi19071997/project_kaveri" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                      <i className="devicon-javascript-plain colored technology" />
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://drive.google.com/file/d/10shx-fhO4Ts8WMQd9_i0TVrSzMx18txG/view?usp=sharing" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="https://images.ctfassets.net/k0lk9kiuza3o/6GX3BEB2StTLRWYuFW9UBj/23d815c203c7f9dbd25a024ce1842ee8/Homepage.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Calendly Clone</h3>
                      <p>Calendly is an app for scheduling appointments, meetings, and events.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://drive.google.com/file/d/10shx-fhO4Ts8WMQd9_i0TVrSzMx18txG/view?usp=sharing" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/ajmalmiyan/Calendly-Clone" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                      <i className="devicon-javascript-plain colored technology" />
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://drive.google.com/file/d/1Yoma26V1fNVjjt8o3yjd8ktxCfBZLN33/view?usp=sharing" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Indiegogo_logo.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Indiegogo Clone</h3>
                      <p>Indiegogo is an American crowdfunding website founded in 2008.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://drive.google.com/file/d/1Yoma26V1fNVjjt8o3yjd8ktxCfBZLN33/view?usp=sharing" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/mahi19071997/Nitrogen-IndieGogo" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://drive.google.com/file/d/1H5Cc6DvjQsPesGhFzpdjP2sUqPTwXXPL/view?usp=sharing" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="https://storage.googleapis.com/arabclicks-morexa.appspot.com/2020/12/adv_strawberrynet_big.png" alt="js-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Strawberrynet Clone</h3>
                      <p>Strawberrynet is a online cosmetic shopping app.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://drive.google.com/file/d/1H5Cc6DvjQsPesGhFzpdjP2sUqPTwXXPL/view?usp=sharing" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/mahi19071997/strawberry_net_clone" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/mahi19071997/" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
