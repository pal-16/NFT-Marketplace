import React, { useState, useEffect, createRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from "react-router";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/base/Button";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useMobile } from "../hooks/isMobile";
import { hotDropsData } from "../constants/MockupData";
import NFTCard from "../components/NFTCard";
import { useARStatus } from "../hooks/isARStatus";



const NFTDetail = () => {
  const isMobile = useMobile();

  const [colors, setColors] = useState([]);

  const [isLike, setIsLike] = useState(false);



  const like = () => setIsLike(!isLike);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    setColors([]);
  }, [state]);

  const isARSupport = useARStatus(state.item.src);



  //!! aciklama karakter sayisi sinirlanmali.
  //!! scroll sorununa cozum bulunmali.

  return (
    <div>
      <Header />
      <div id="nft-detail-card-wrapper">
        <Card
          width={isMobile ? "100%" : "65vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
              {isARSupport ? <model-viewer ar-scale="auto" ar ar-modes="webxr scene-viewer quick-look" id="arDetail" loading="eager" camera-controls auto-rotate src={state.item.src} > </model-viewer>
                : <> <ColorExtractor getColors={getColors}>
                  <img id="detail-image" src={state.item.src} />
                </ColorExtractor></>}

              <div id="detail-info" style={{}}>
                <div id='detail-info-container'>
                  <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                    <img src="https://drive.google.com/file/d/1L5wv67xIgxrCc73kgO1_Q7ijA-oK1Bph/view?usp=sharing
" width="20px" height="20px"></img>
                  </div>
                  <p id="name"> {state.item.name} </p>
                  <p id="description" > {state.item.description} </p>
                  <p className="collection"> {"CID : QmPrkAWbChHpsiMHvnDG2ncBXknz"} </p>
                  <p className="collection"> {"Contract : 689R34Y9ptnnnZKF8ZGod5JfKho6v8"} </p>
                  <p className="collection"> {"Creator : 0x9dC36499A0aB380eeaC69De6"} </p>
                  <p className="collection"> {"Storage : IPFS"} </p>


                </div>
                <div id="detail-controls">
                  <Button
                    width={"50%"}
                    height="30px"
                    child={
                      <div id="button-child">
                        <p className="content">View Artist Portfolio</p>
                      </div>
                    }
                  ></Button>
                </div>
                <br></br>
                <div id="detail-controls">
                  <Button
                    width={"50%"}
                    height="30px"
                    child={
                      <div id="button-child">
                        <FaEthereum size="14px" />
                        <p className="content">1254</p>
                      </div>
                    }
                  ></Button>

                  <div className="like-container">
                    <button className="like" onClick={like}>
                      {!isLike ? (
                        <AiOutlineHeart size="14" color="white" />
                      ) : (
                        <AiFillHeart
                          size="28"
                          style={{
                            stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`,
                          }}
                          color="#00f5c966"
                        />
                      )}
                    </button>
                    <p className="like-count">123</p>
                  </div>

                </div>

              </div>
            </div>
          }
        />

      </div>

    </div>
  );
};

export default NFTDetail;
