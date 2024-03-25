import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import { DarkModeToggle } from "../components/common/darkModeToggle";
import { Footer } from "../components/common/footer";
import { BasicImage } from "../components/core/image";
import { LightBox } from "../components/core/lightbox";
import { BasicLink } from "../components/core/link";
import { Tooltip } from "../components/core/tooltip";
import { AppImage } from "../constants/appImage";
import {
  IAlphabetCharacters,
  alphabetCharacters,
  keyboardDropdownOpts,
} from "../constants/characters";
import { site } from "../constants/site";

const queryString = require("query-string");

const getCharObjsFromKeyboardId = (keyboardId: string) => {
  let newAlphabetCharacters = [];
  const newOrder = (
    keyboardDropdownOpts.find((kdo) => kdo.id === keyboardId) ??
    keyboardDropdownOpts[0]
  )?.layout;
  for (const newOrderChar of newOrder) {
    for (const alphaChar of alphabetCharacters) {
      if (alphaChar.name === newOrderChar) {
        newAlphabetCharacters.push(alphaChar);
        continue;
      }
    }
  }
  return newAlphabetCharacters;
};

export const AlphabetPage: React.FC = () => {
  const defaultAlphaChars = getCharObjsFromKeyboardId(
    keyboardDropdownOpts[0].id
  );
  const [typedChars, setTypedChars] = useState<string>("");
  const [alphabetCharacters, setAlphabetCharacters] =
    useState<Array<IAlphabetCharacters>>(defaultAlphaChars);
  const [images, setImages] = useState<Array<string>>([]);
  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location?.search ?? "");
    if (parsed.text != null) {
      setTypedChars(parsed.text.split(""));
    }
    // eslint-disable-next-line
  }, []);

  const changeCharacterOrder = (selectEvent: any) => {
    selectEvent?.persist?.();
    const newValue = selectEvent?.target?.value;
    const newAlphabetCharacters = getCharObjsFromKeyboardId(newValue);
    setAlphabetCharacters(newAlphabetCharacters);
  };

  const onChange = (e: any) => {
    const target = e.target ?? {};
    const value = target?.value ?? "";
    setTypedChars(value);
  };

  const onImageClick = (character: string) => () => {
    const newText = typedChars + character;
    setTypedChars(newText);
  };

  const tooltipClick = (character: string) => () => {
    const imagesToShow = [];
    for (const imageUses of AppImage.usage) {
      if (imageUses.translation.replace(/ /g, "").includes(character)) {
        imagesToShow.push(imageUses.image);
      }
    }

    if (imagesToShow.length > 0) {
      setImages(imagesToShow);
      return;
    }

    Swal.fire({
      title: "No images found",
      text: "There seems to be no evidence of the character being used",
      icon: "warning",
    });
  };

  const lightboxCloseClick = () => setImages([]);

  return (
    <>
      <div className="wrapper">
        <section id="header">
          <div className="inner">
            <h1>Expedition alphabet</h1>
            <p>Currently known alphabet</p>
          </div>
        </section>
        <section className="main style1 no-padding ta-center">
          <div className="keyboard" style={{ display: "none" }}>
            <span>Keyboard Layout</span>
            <select id="keyboard-dropdown" onChange={changeCharacterOrder}>
              {keyboardDropdownOpts.map((keyOpts) => {
                return (
                  <option key={keyOpts.id} value={keyOpts.id}>
                    {keyOpts.name}
                  </option>
                );
              })}
            </select>
          </div>
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            Hover over a character and click on the question icon to view the
            places we got the characters from
          </p>
          <div className="alphabet-grid">
            {alphabetCharacters.map((charObj: IAlphabetCharacters) => {
              return (
                <div
                  key={`all-${charObj.name}`}
                  className="alphabet-block no-select"
                >
                  <p>{charObj.display ?? charObj.name}</p>
                  {charObj.unknown === true ? (
                    <BasicImage
                      imageUrl={charObj.img}
                      fallbackSrc={`/${AppImage.unknownImage}`}
                      classNames="alphabet pointer"
                      imageName={charObj.display ?? charObj.name}
                      onClick={onImageClick("?")}
                    />
                  ) : (
                    <h1
                      className="alphabet expedition-font pointer"
                      onClick={onImageClick(charObj.name)}
                    >
                      {charObj.name}
                    </h1>
                  )}

                  <Tooltip content="View usage" classNames="view-usage">
                    <BasicImage
                      imageUrl={`/assets/img/uses.png`}
                      fallbackSrc={`/${AppImage.unknownImage}`}
                      classNames="tiny pointer"
                      imageName={charObj.display ?? charObj.name}
                      onClick={tooltipClick(charObj.name)}
                    />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </section>
        {images.length > 0 && (
          <LightBox images={images} onClose={lightboxCloseClick} />
        )}
        <section className="main style3" style={{ paddingTop: "4em" }}>
          <div className="row">
            <div className="col-12 ta-center mb1">
              <span>Type something!</span>
              <br />
              <span className="expedition-font">{typedChars}</span>
            </div>
            <div className="col-12 ta-center">
              <input
                type="text"
                id="sentence"
                name="sentence"
                style={{ width: "80%", margin: "0 auto" }}
                placeholder="Secret text..."
                value={typedChars}
                onChange={onChange}
              />
            </div>
          </div>
        </section>
        <section className="main style1">
          <div className="inner ta-center">
            <h2>If you have evidence of other characters</h2>
            <p style={{ margin: 0 }}>Please mention one of us on Twitter</p>
            <ul>
              <li style={{ display: "block" }}>
                <BasicLink
                  href={site.nmsassistant.twitter}
                  additionalClassNames="mt1"
                >
                  @AssistantNMS
                </BasicLink>
              </li>
              <li style={{ display: "block" }}>
                <BasicLink
                  href="https://twitter.com/RayReynoldsNMS"
                  additionalClassNames="mt1"
                >
                  @RayReynoldsNMS
                </BasicLink>
              </li>
              <li style={{ display: "block" }}>
                <BasicLink
                  href="https://twitter.com/JackPotNinja1"
                  additionalClassNames="mt1"
                >
                  @JackPotNinja1
                </BasicLink>
              </li>
              <li style={{ display: "block" }}>
                <BasicLink
                  href="https://twitter.com/Ja77Punk"
                  additionalClassNames="mt1"
                >
                  @Ja77Punk
                </BasicLink>
              </li>
            </ul>
            <p>
              Or talk about the alphabet in the{" "}
              <a
                href="https://forums.atlas-65.com/t/expeditions-alphabet/7618"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atlas forum
              </a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
      <DarkModeToggle />
    </>
  );
};
