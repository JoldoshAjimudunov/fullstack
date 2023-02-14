import React from "react";
import cl from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <h2 className={cl.title}>Контакты</h2>
      <hr />
      <div className={cl.map_cont}>
        <div className={cl.map__left}>
          <div>
            <ul className={cl.cont__item}>
              <li className={cl.item__text}>
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className={cl.item__text}>Время работы : 12:00-23:00</li>
              <li className={cl.item__text}>Телефон: +7 (969) 711-24-24</li>
              <li className={cl.item__text}>Резерв: Yclients</li>
            </ul>
            <ul>
              <li className={cl.item__text}>
                Присоединиться к нам - makers@gmail.com
              </li>
              <li className={cl.item__text}>
                Коммерческие предложения - makers.com@mail.ru
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="400"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=munchen&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://2yu.co"></a>
              <style>
                .mapouter
                {"position:relative;text-align:right;height:400px;width:600px"}
              </style>
              {/* <a href="https://embedgooglemap.2yu.co">html embed google map</a> */}
              <style>
                .gmap_canvas{" "}
                {
                  "overflow:hidden;background:none!important;height:400px;width:600px"
                }
              </style>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.bottom}>Makers </div>
    </div>
  );
};

export default Footer;
