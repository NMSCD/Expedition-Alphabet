import React from "react";

import { DarkModeToggle } from "../components/common/darkModeToggle";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { BasicInternalLink, BasicLink } from "../components/core/link";
import * as route from "../constants/route";
import { site } from "../constants/site";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <section id="whatStarted" className="main style1">
          <div className="container">
            <div className="row gtr-150">
              <div className="col-6 col-12-medium">
                <header className="major">
                  <h2>Want to use this font in your own projects?</h2>
                </header>
                <p>
                  Follow the instructions{" "}
                  <a
                    href="https://github.com/NMSCD/Expedition-Alphabet"
                    title="Expedition Alphabet readme.md"
                  >
                    here
                  </a>{" "}
                  to import the stylesheet and font files into your project! 💪
                  Font designed by{" "}
                  <BasicLink href={site.seontonppa.website}>
                    {site.seontonppa.nickName}
                  </BasicLink>{" "}
                  🎉
                </p>
                <BasicLink
                  href="https://raw.githubusercontent.com/NMSCD/Expedition-Alphabet/main/public/assets/font/nms-alphabet.ttf"
                  additionalClassNames="button"
                >
                  Download .ttf
                </BasicLink>
              </div>
              <div className="col-6 col-12-medium imp-medium">
                <span className="image fit">
                  <img src="assets/font/example.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="currentInfo" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Examples of where the font has been used</h2>
            </header>
            <div className="row gtr-150" style={{ justifyContent: "center" }}>
              <div className="col-4 col-12-medium">
                <span className="image fit">
                  <img src="assets/img/pioneer.png" alt="" />
                </span>
                <h3>Pioneers</h3>
                <p>
                  Season 1 of Expeditions, which ran from <b>31st March 2021</b>{" "}
                  to <b>16 May 2021</b>
                </p>
                <ul className="actions special">
                  <li>
                    <BasicLink
                      href="https://www.nomanssky.com/expeditions-update/"
                      additionalClassNames="button"
                    >
                      View on nomanssky.com
                    </BasicLink>
                  </li>
                </ul>
              </div>
              <div className="col-4 col-12-medium">
                <span className="image fit">
                  <img src="assets/img/beachhead.png" alt="" />
                </span>
                <h3>Beachhead</h3>
                <p>
                  Season 2 of Expeditions, which is currently running as of{" "}
                  <b>17 May 2021</b>
                </p>
                <ul className="actions special">
                  <li>
                    <BasicLink
                      href="https://www.nomanssky.com/2021/05/no-mans-sky-expedition-2/"
                      additionalClassNames="button"
                    >
                      View on nomanssky.com
                    </BasicLink>
                  </li>
                </ul>
              </div>
              <div className="col-4 col-12-medium">
                <span className="image fit">
                  <img src="assets/img/rayRenoldsFirstSentence.jpg" alt="" />
                </span>
                <h3>@RayReynoldsNMS</h3>
                <p>Ray Renolds translated an entire sentence!</p>
                <ul className="actions special">
                  <li>
                    <BasicLink
                      href="https://twitter.com/RayReynoldsNMS/status/1394259724317646852/photo/1"
                      additionalClassNames="button"
                    >
                      View on Twitter
                    </BasicLink>
                  </li>
                </ul>
              </div>
              <div className="col-4 col-12-medium">
                <span className="image fit">
                  <img src="assets/img/nolindor.png" alt="" />
                </span>
                <h3>Nolindor</h3>
                <p>No Man's Sky Decryption Youtube Video</p>
                <ul className="actions special">
                  <li>
                    <BasicLink
                      href="https://www.youtube.com/watch?v=YpfpN9iX2WA"
                      additionalClassNames="button"
                    >
                      View on Youtube
                    </BasicLink>
                  </li>
                </ul>
              </div>
              <div className="col-4 col-12-medium">
                <span className="image fit">
                  <img src="assets/img/nmsMessage.jpg" alt="" />
                </span>
                <h3>@NoMansSky</h3>
                <p>
                  NMS tweeted a longer sentence, giving us a few missing
                  characters!
                </p>
                <ul className="actions special">
                  <li>
                    <BasicLink
                      href="https://twitter.com/NoMansSky/status/1395371596764876808"
                      additionalClassNames="button"
                    >
                      View on Twitter
                    </BasicLink>
                  </li>
                </ul>
              </div>
              <div className="col-4 col-12-medium">
                <span className="image fit">
                  <img src="assets/img/jackpotninja.png" alt="" />
                </span>
                <h3>@JackPotNinja1</h3>
                <p>
                  JackPotNinja getting us the letter V and possibly 9 &amp; 0
                </p>
                <ul className="actions special">
                  <li>
                    <BasicLink
                      href="https://twitter.com/JackPotNinja1/status/1395378352140214276"
                      additionalClassNames="button"
                    >
                      View on Twitter
                    </BasicLink>
                  </li>
                </ul>
              </div>
              <div className="col-4 col-12-medium">
                <span className="image fit">
                  <img src="assets/img/captStevePanel.jpg" alt="" />
                </span>
                <h3>@NCaptainsteve</h3>
                <p>Captain Steve sharing a screenshot from update 3.5</p>
                <ul className="actions special">
                  <li>
                    <BasicLink
                      href="https://twitter.com/NCaptainsteve/status/1400042909546782721"
                      additionalClassNames="button"
                    >
                      View on Twitter
                    </BasicLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="viewCurrentAlphabet" className="main style1">
          <div className="container">
            <div className="row gtr-150">
              <div className="col-6 col-12-medium imp-medium">
                <span className="image fit">
                  <img src="assets/img/currentlyKnown.png" alt="" />
                </span>
              </div>
              <div className="col-6 col-12-medium">
                <header className="major">
                  <h2>View currently known alphabet</h2>
                </header>
                <p>
                  Thanks to the community we now know all the characters used in
                  the Expedition Alphabet!
                </p>

                <ul className="actions special">
                  <li>
                    <BasicInternalLink
                      href={route.alphabet}
                      additionalClassNames="button"
                    >
                      View alphabet
                    </BasicInternalLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <DarkModeToggle />
    </>
  );
};
