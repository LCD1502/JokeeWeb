import logo from "./logo.png";
import sunflower from "./sunflower.jpg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="headerWrapper">
        <img src={logo} className="logo" alt="logo" />
        <div className="infoWrapper">
          <div className="info">
            <div className="title">Handicrafted by</div>
            <div className="name">Jim HLS</div>
          </div>
          <img src={sunflower} className="avatar" alt="sunflower" />
        </div>
      </div>
      <div className="headingWrapper">
        <h2 className="heading1">A joke a day keeps doctor away</h2>
        <h5 className="heading2">
          If you joke wrong away, your teeth have to pay. (Serious)
        </h5>
      </div>
      <div className="jokeWrapper">
        <p className="jokeContent">
          A child asked his father, "How were people born?" So his father said,
          "Adam and Eve made babies, then their babies became adults and made
          babies, and so on." The child then went to his mother, asked her the
          same question and she told him, "We were monkeys then we evolved to
          become like we are now." The child ran back to his father and said,
          "You lied to me!" His father replied, "No, your mom was talking about
          her side of the family."
        </p>
        <div className="btnWrapper">
          <button className="btn btnLike">This is funny!</button>
          <button className="btn btnDislike">This is not funny.</button>
        </div>
      </div>
      <div className="footer">
        <p className="footerText">
          This website is created as part of HLsolutions program. the materials
          contained on this website are provided for general
          <br />
          information only and do not constitute any from of advice. HLS assumes
          no responsibility for the accuracy of any particular statement and
          <br />
          accept no liability for any loss damage which may arise from reliance
          on the information contained on this website
        </p>
        <div className="copyright">Copyright 2021 HLS</div>
      </div>
    </div>
  );
}

export default App;
