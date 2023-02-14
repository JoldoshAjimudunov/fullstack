import React from "react";
import "../components/Home.css";

const Home = () => {
  return (
    <>
      <div class="tn-atom" field="tn_text_1470209944682">
        О РЕСТОРАНЕ
      </div>
      <br></br>
      <div class="bl"></div>
      <div class="all">
        <input checked type="radio" name="respond" id="desktop" />
        <article id="slider">
          <input checked type="radio" name="slider" id="switch1" />
          <input type="radio" name="slider" id="switch2" />
          <input type="radio" name="slider" id="switch3" />
          <input type="radio" name="slider" id="switch4" />
          <input type="radio" name="slider" id="switch5" />
          <div id="slides">
            <div id="overflow">
              <div class="image">
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana2.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana2.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana2.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana2.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana2.jpg" />
                </article>
              </div>
            </div>
          </div>
          <div id="controls">
            <label for="switch1"></label>
            <label for="switch2"></label>
            <label for="switch3"></label>
            <label for="switch4"></label>
            <label for="switch5"></label>
          </div>
          <div id="active">
            <label for="switch1"></label>
            <label for="switch2"></label>
            <label for="switch3"></label>
            <label for="switch4"></label>
            <label for="switch5"></label>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
