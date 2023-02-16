import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../components/Home.css";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <div className="header-navbar">
        TEMA
        <Link to="/products">
          <button className="btnMenu">menu</button>
        </Link>
      </div>
      <div className="tn-atom" field="tn_text_1470209944682">
        О РЕСТОРАНЕ
      </div>
      <br></br>
      <div className="bl"></div>
      <div className="all">
        <input checked type="radio" name="respond" id="desktop" />
        <article id="slider">
          <input checked type="radio" name="slider" id="switch1" />
          <input type="radio" name="slider" id="switch2" />
          <input type="radio" name="slider" id="switch3" />
          <input type="radio" name="slider" id="switch4" />
          <input type="radio" name="slider" id="switch5" />
          <div id="slides">
            <div id="overflow">
              <div className="image">
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana12.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana1.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana7.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana14.jpg" />
                </article>
                <article>
                  <img src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana10.jpg" />
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
      <div className="allAbout">
        <div className="about">
          В 2015 году на конкурсе San Pellegrino Young Chef, где Эльдар Мурадов
          был участником, Дмитрий Богачев стал его наставником. В результате
          этого наставничества Эльдар стал лучшим поваром региона и поехал
          представлять родину на финале конкурса в Милане.
        </div>
        <div className="lin"></div>
        <div className="about">
          Эта история стала судьбоносной — Дмитрий и Эльдар поняли, что
          находятся на одной волне и готовы двигаться дальше в поисках
          собственного уникального пути.
        </div>
        <div className="lin"></div>

        <div className="about">
          От мысли о создании собственного ресторана до его открытия прошло 2
          года — и вот мир увидел Mr. Bo. Новый, необычный даже для искушённого
          ресторанного Питера проект, выбил 3 страйка подряд: азиатское
          направление/необычные вкусовые сочетания/смелость на грани дерзости.
        </div>
        <div className="lin"></div>

        <div className="about">
          Азия была выбрана не случайно, не в дань моде на суши, поке и рамены.
          Яркость, огромная палитра сильных и насыщенных вкусов, которыми можно
          бесконечно жонглировать, открывая новые оттенки — это неиссякаемый
          источник эмоций, которыми повар и гость обмениваются друг с другом.
        </div>
      </div>
      <div
        style={{ marginTop: "200px" }}
        className="tn-atom"
        field="tn_text_1470209944682"
      >
        МЕНЮ
      </div>
      <div class="bl"></div>
      <div class="all">
        <input checked type="radio" name="respond" id="desktop" />
        <article id="slider">
          <input checked type="radio" name="slider" id="switch1" />
          <input type="radio" name="slider" id="switch2" />
          <input type="radio" name="slider" id="switch3" />
          <input type="radio" name="slider" id="switch4" />
          <input type="radio" name="slider" id="switch5" />
          {/* <input type="radio" name="slider" id="switch6" />
          <input type="radio" name="slider" id="switch7" />
          <input type="radio" name="slider" id="switch8" />
          <input type="radio" name="slider" id="switch9" />
          <input type="radio" name="slider" id="switch10" /> */}
          <div id="slides">
            <div id="overflow">
              <div class="image">
                <article>
                  <img src="https://thumb.tildacdn.com/tild3362-6664-4437-b464-373866393734/-/format/webp/mrbooysters.jpeg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild6563-3038-4461-b937-323763356462/-/format/webp/__.jpeg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild3039-3533-4637-b031-656133623233/-/format/webp/__2.jpeg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild6565-3833-4139-b231-306263386535/-/format/webp/__67.jpeg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild6261-3861-4063-a637-616239373762/-/format/webp/0X8A3301.jpeg" />
                </article>
                {/* <article>
                  <img src="https://thumb.tildacdn.com/tild3436-3865-4161-a431-656562646661/-/format/webp/0X8A3792.jpeg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild3136-3132-4765-b637-383231623864/-/format/webp/0X8A3823.jpeg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild3534-3638-4432-b937-363665323931/-/format/webp/__.jpg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild3831-6262-4432-a530-333038326163/-/format/webp/0X8A3905.jpeg" />
                </article>
                <article>
                  <img src="https://thumb.tildacdn.com/tild3463-6235-4437-b530-383766313465/-/format/webp/0X8A9909.jpg" />
                </article> */}
              </div>
            </div>
          </div>
          <div id="controls">
            <label for="switch1"></label>
            <label for="switch2"></label>
            <label for="switch3"></label>
            <label for="switch4"></label>
            <label for="switch5"></label>
            {/* <label for="switch6"></label>
            <label for="switch7"></label>
            <label for="switch8"></label>
            <label for="switch9"></label>
            <label for="switch10"></label> */}
          </div>
          <div id="active">
            <label for="switch1"></label>
            <label for="switch2"></label>
            <label for="switch3"></label>
            <label for="switch4"></label>
            <label for="switch5"></label>
            {/* <label for="switch6"></label>
            <label for="switch7"></label>
            <label for="switch8"></label>
            <label for="switch9"></label>
            <label for="switch10"></label> */}
          </div>
        </article>
        <div className="p">
          В меню Mr. Bo нет канонических традиционных рецептов: каждое блюдо —
          результат поиска нового, экстраординарного, неожиданного. Устрицы со
          страчателлой или маракуйей, бегония и алоэ, гребешок с соусом из
          халапеньо, — читаешь меню, как захватывающий кулинарный роман.
        </div>
        <button className="btn" onClick={() => Navigate("/products")}>
          Подробнее
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
