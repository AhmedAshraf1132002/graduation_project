import React, { useEffect, useState } from "react";
import HomeLogo from "/src/assets/Images/logo.png";
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  //stateFull Component not StateLess          // fy el onClick(prperty) wnta bt3ml call l2y function msh bt7ot =>>> () lazem tkhleha arrow Function 34an t3rf t7ot ();

  // 1.. ay hook dakhel react bybtdy bklma => use
  // 2.. elhooks bnstkhdmha feh el function component not class coponent
  // 3.. ay hook bt3mlha minf3sh tstkhdmha dakhel ay statments lazm tstkhdmha dakhel el function Direct  for Example => if and loops

  //   const [count, setCount] = useState(0); // return array with two indeces for example => [count => this the variable between Bracitse in usestate (0) , Function of count ya3ny el function ely h3dl feha ay data htt8ir hena (.....)]
  // //[..0.. , ..1..]
  //   const [userName, setUserName] = useState("Mohamed"); // <h1>{userName}</h1>  =>>> Data Binding bnktb dakhel el {......javascript......}
  //   const [userAge, setuserAge] = useState(); //undefined ya3ny userAge msh mtkhzn feh data

  //  const [products, setproducts] = useState([         //products hya array fadya
  //   {
  //     name: "samsoung",
  //     cate: "second",
  //     desc: "very good",
  //     type: "10T",
  //     hasSale: true,
  //     Count : 5
  //   },
  //   {
  //     name: "opp",
  //     cate: "second",
  //     desc: "very good",
  //     type: "10T",
  //     hasSale: false,
  //     Count : 5
  //   },
  //   {
  //     name: "apple",
  //     cate: "second",
  //     desc: "very good",
  //     type: "10T",
  //     hasSale: true,
  //     Count : 5
  //   },
  // ]);

  






// *- Component Life Cycle :

// 1- Mounting Phase
// 2- Updating Phase
// 3- UnMounting Phase


  // 1- component did mount =>> ya3ny lw 3ayz tnfez haga awl ma el website yft7 3latol lazm t7otha f el useEffect

  // useEffect(() => {
  // component did Mount => fetch Api
  // aktr haga bnstkhdmha 34an n3ml fetch l Api ya3ny awl ma el website yft7 3latol kol el m3lomat f el Api tzhr
  // console.log("Mount");
  // } , [ products]) // =>>>>>> hena m3anha mttb3sh klmt Mount 8er lma y7sl ta8yeer f el products 8er keda msh hytb3 [ya3ny hena f el array btt7add el haga ely anta 3ayzha]

   
  // 2- component will UnMount =>> ya3ny bttnfz lma tt3 bara el haga ely anta mwagood feha msln lw anta mshet mn el home ro7t el about hytb3tlk message deh >> ("You are leaving home component")

  // useEffect(() => {          // bnstkhdmha aktr haga msln bt2olo lw anta msh8l haga f home btwa2fha aw bt2flha bmogarad ank btro7 l about
  //                             >>> ex: lw msh8l music msln deh esmha 3mlyt Cleaning Up
  //  return () => {            
  //   console.log("You are leaving home component");
  //  }
  // })


  // 3- component did Update => ya3ny lw msh 7att array fady ba3d el , ay update hy7sl f el website hyktblk f el console Component did update
                                   // f el bdaya htsht8l mara wa7da(awl ma tft7 el website) b3d keda m3 ay update gded htfdl tsht8l
  // useEffect(() => {
  //   console.log("Component did update");
  // })

 // useEffect(() => {
   //   console.log("Update");
  // } , [ products]) // =>>>>>> hena m3anha mttb3sh klmt Mount 8er lma y7sl ta8yeer f el products 8er keda msh hytb3 [ya3ny hena f el array btt7add el haga ely anta 3ayzha]


 

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="Home">
        <div className="layer"></div>
        <div className="container  vh-100 d-flex flex-column justify-content-center align-content-center">
          <div className="Caption text-white">
            <div className="homePhoto">
              <img className="w-100" src={HomeLogo} alt="Home-Logo" />
            </div>
            <h2 className="meta">Meta gym</h2>
            <h1 className="my-5 title">Scan For Your Muscles </h1>
            <button className="btn">
              Qr code.. <i className="fa-solid fa-qrcode text-black"></i>
            </button>
          </div>
        </div>
      </div>

  
    </>
  );
}
