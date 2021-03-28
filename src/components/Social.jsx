import React from 'react';

class Social extends React.Component {
  render(){
    return(
      <div className="kw-social">
      <ul>
        <li className="icons-list__item">
          <a href="mailto:rajeshkw2007@gmail.com" rel="nofollow" target="_blank" title="Send me an email">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            Email
          </a>
        </li>
        <li className="icons-list__item">
          <a href="http://stackoverflow.com/users/893955/rajesh-kw" rel="nofollow" target="_blank" title="See my StackOverflow profile">
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            Stack Overflow
          </a>
        </li>
        <li className="icons-list__item">
          <a href="https://github.com/rajeshkw" rel="nofollow" target="_blank" title="Look through my Github profile">
            <i className="fa fa-github" aria-hidden="true"></i>
            Github
          </a>
        </li>
        <li className="icons-list__item">
          <a href="https://twitter.com/rajeshkw/" rel="nofollow" target="_blank" title="Tweet me!">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            Twitter
          </a>
        </li>
        <li className="icons-list__item">
          <a href="https://www.linkedin.com/in/rajeshwasave" rel="nofollow" target="_blank" title="See my LinkedIn profile">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            LinkedIn
          </a>
        </li>
        <li className="icons-list__item">
          <a href="skype:rajeshkw" rel="nofollow" target="_blank" title="Call me on Skype">
            <i className="fa fa-skype" aria-hidden="true"></i>
            Skype
          </a>
        </li>
      </ul>
    </div>
    );
  }
}
export default Social;
