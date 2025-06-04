import HomeLogo from "/src/assets/Images/logo.png";
import HomeVideo from "/src/assets/Videos/home.mp4";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <section>

        <div className="Home position-relative min-vh-100 d-flex align-items-center justify-content-center text-white">
          {/* 🔁 Background Video */}
          {/* <video className="background-video" autoPlay loop muted playsInline>
            <source src={HomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          {/* Dark Overlay */}
          <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          {/* Content */}
          <div className="container mb-5 position-relative z-1">
            <div className="Caption text-center">
              <div className="homePhoto mx-auto" style={{ maxWidth: "400px" }}>
                <img
                  className="img-fluid w-100"
                  src={HomeLogo}
                  alt="Home-Logo"
                />
              </div>

              <h1 className="title display-4 fw-bold">{t("ScanTitle")}</h1>

              <button className="btn btn-light mt-3">
                {t("QrButton")}{" "}
                <i className="fa-solid fa-qrcode text-dark ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
