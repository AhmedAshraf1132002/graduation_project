import React, { useState } from 'react'
import Female from '/src/assets/Images/Female.png';
import Male from '/src/assets/Images/gym.png';
import Sport_1 from '/src/assets/Images/1.png';
import Sport_2 from '/src/assets/Images/2.png';
import Sport_3 from '/src/assets/Images/3.png';
import Sport_4 from '/src/assets/Images/4.png';
import suuu from '/src/assets/Videos/suuu.mp4';
import Calf  from '/src/assets/Images/Calf .png';
import Front_1 from '/src/assets/Images/Front_1.png';
import Back_1 from '/src/assets/Images/Back (1).png';
import Back_2 from '/src/assets/Images/Back (2).png';
import Triceps  from '/src/assets/Images/Triceps .png';
import Biceps from '/src/assets/Images/Biceps.png';
import Shoulders from '/src/assets/Images/Shoulders.png';
import Chest from '/src/assets/Images/Chest.png';
import { Helmet } from 'react-helmet-async';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function Practise() {


const navigate = useNavigate();
 const [selectedGender , setSelectedGender] = useState(null);
 
// const handleGoToChest = () => {
//     navigate('/Graduation-Project/practise/chest');

// };
  return (
    <>
           <Helmet>
        <title>Practise</title>
      </Helmet>

       {/* <h1>Practise</h1>
       <div>
        <ul>
          <li>
            <NavLink to={"chest"}>Chest</NavLink>
          </li>
          <li>
            <NavLink to={"shoulder"}>Shoulder</NavLink>
          </li>
        </ul>
       </div> */}

      
   
     <section>
     <div className="practise bg-black vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="container m d-flex flex-column justify-content-center align-items-center">
          <h2 className='text-white title'>Practise</h2>
          <div className="row">
            <div className="col-md-6 ">
              <div className="practise_content pe-5 m-auto  d-flex flex-column align-items-center justify-content-center ">
              <div className="image my-5">
                <img className='w-100 h-100' src={Female} alt="Female_Logo" />
              </div>
              <button onClick={() => setSelectedGender("icons") } className="gender btn">
                Female
              </button>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="practise_content ps-5 m-auto d-flex flex-column align-items-center justify-content-center ">
              <div className="image two my-5">
                <img className='w-100 h-100' src={Male} alt="Male_Logo" />
              </div>
              <button onClick={() => setSelectedGender("icons") } className="genderTwo btn">
                Male
              </button>
              </div>
             
            </div>
          </div>

          { selectedGender == "icons" && <div className="iconsOfMuscles d-flex justify-content-center align-items-center my-5 gap-5">

      <button className='shoulders'>
        <Link to={"shoulders"}><img className='w-100' src={Shoulders} alt="shoulders_Icon" /></Link>
      </button>
       
       
       <button className='Chest'>
       <Link to={"chest"}><img className='w-100' src={Chest} alt="Chest_logo" /></Link>
       </button>
         

          <button className='Triceps'>
          <Link to={"triceps"}><img className='w-100' src={Triceps} alt="Triceps_logo" /></Link>
         </button>
      
         <button className='Biceps'>
           <Link to={"biceps"}><img className='w-100' src={Biceps} alt="Biceps_logo" /></Link>
         </button>
    
        
        <button className='Back_1'>
           <img className='w-100' src={Back_1} alt="Back_1_logo" />
        </button>
         
         <button className='Back_2'>
           <img className='w-100' src={Back_2} alt="Back_2_logo" />
         </button>
       
         <button className='Front_1'>
          <img className='w-100' src={Front_1} alt="Front_1_logo" />
         </button>
 
          <button className='Calf'>
         <img className='w-100' src={Calf } alt="Calf _logo" />
          </button>
       

          {/* <video width={440} height={350} controls playsInline poster={Chest} className='pb-5 bg-danger'>
            <source src={suuu} type='video/mp4' />
             Your browser does not support the video tag.
          </video> */}
      
         </div> }

            
        
        </div>

      </div>
     </section>
<section>
  
       <div className="outlet bg-black">
            <div className="container bg-danger text-center">
              <Outlet/>
            </div>
          </div>
</section>
     
      {/* <section>
        {selectedGender == "female" && (
          <div className="secondSection bg-black py-5">
          <form>       
                <input type="search" className="form-control w-75 m-auto mb-5" placeholder="Search..."/> 
            </form>
          <div className="container d-flex flex-column justify-content-center align-items-center">
           <div className="row">
            <div className="col-md-4">
              <div className="aboutPractise d-flex flex-column justify-content-center align-items-center">
                <div className="practiseImage">
                  <img className='w-100' src={Sport_1} alt="Sport_1" />
                </div>
                <p className='text-center mt-3 text-white'>تمارين الاثقال ﻿اثناء ﻿الجلوس :
                ﻿﻿ اجلسي بدون كرسي جاعلة ظهرك مستندا الى الحائط بشكل مستقيم واجعلي ركبتيك متوازيتين مع قدميك مع حمل الاثقال في هذه الوضعية.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutPractise d-flex flex-column justify-content-center align-items-center">
                <div className="practiseImage">
                  <img className='w-100' src={Sport_2} alt="Sport_2" />
                </div>
                <p className='text-center mt-3 text-white'>
                تمارين ﻿القفز﻿:
                 ﻿﻿ قفي بشكل مستقيم وابدئي بفتح القدمين والذراعين مع القفز المتراصل
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutPractise d-flex flex-column justify-content-center align-items-center">
                <div className="practiseImage">
                  <img className='w-100' src={Sport_3} alt="Sport_3" />
                </div>
                <p className='text-center mt-3 text-white'>
                تمارين ﻿الجري
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutPractise d-flex flex-column justify-content-center align-items-center">
                <div className="practiseImage">
                  <img className='w-100' src={Sport_4} alt="Sport_4" />
                </div>
                <p className='text-center mt-3 text-white'>تمارين ﻿السكوات:
                ﻿﻿ السكوات معروف لشده لعضلات المؤخرة وصقل عضلات المعدة ويمكنك القيام به من خلال القرفصة مع إبقاء الركبتين متوازيتين مع القدمين والمؤخرة مشدودة الى الوراء. مدي ذراعيك وارتفعي ثم اهبطي مع الحفاظ على ركبتيك بمستوى قدميك.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutPractise d-flex flex-column justify-content-center align-items-center">
                <div className="practiseImage">
                  <img className='w-100' src={Sport_5} alt="Sport_5" />
                </div>
                <p className='text-center mt-3 text-white'>تمارين ﻿الكرانشز
                ﻿ ﻿﻿ هذه افضل التمارين الفضلى للمعدة. استلقي على ظهرك واثني قدميك ثم ضعي يديك على راسك مع تشكيل زاوية ٤٥ درجة بذراعيك بشكل مفتوح ثم حاولي رفع جذعك من ناحيته العليا مع الراس والهبوط من جديد، لا تثني ذراعيك ولا تجهدي رقبتك بل شدي على معدتك في خلال هذا التمرين</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutPractise d-flex flex-column justify-content-center align-items-center">
                <div className="practiseImage">
                  <img className='w-100' src={Sport_6} alt="Sport_6" />
                </div>
                <p className='text-center mt-3 text-white'>تمارين ﻿﻿الضغط﻿﻿:
                ﻿﻿﻿ لا نكتفي بالحديث عن فوائدها، انها تمارين الضغط. استلقي على بطنك ثم استقيمي بواسطة ذراعيك والقدمين، اجعلي ظهرك مستقيما وشدي عضلات المؤخرة ثم ابدئي بالصعود والهبوط بشكل مستقيم</p>
              </div>
            </div>
           </div>
          </div>
          </div>
        )}
       </section> */}
       {/* <section>
        {selectedGender == "male" && (
        <div className="thirdSection bg-black">
        <form>       
              <input type="search" className="form-control w-75 m-auto mb-5" placeholder="Search..."/> 
          </form>
          <div className="container d-flex flex-column justify-content-center align-items-center">
           <div className="row">
            <div className="col-md-4">
              <div className="thirdContent d-flex flex-column justify-content-center align-items-center">
                <div className="Img">
                  <img className='w-100' src={Sport_7} alt="Sport_7" />
                </div>
                <p className=' text-white text-center mt-3'>تمرين القفز بالحبل :
                امسك الحبل بكلتا اليدين واقفز بانتظام مع تدوير الحبل حول جسمك</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thirdContent d-flex flex-column justify-content-center align-items-center">
                <div className="Img">
                  <img className='w-100' src={Sport_8} alt="Sport_8" />
                </div>
                <p className=' text-white text-center mt-3'>تمرين البلانك :
                ابدا بوضعية الضغط مع استناد الساعدين علي الارض وحافظ ع جسمك ف وضع مستقيم من الرأس الي الكتفين
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thirdContent d-flex flex-column justify-content-center align-items-center">
                <div className="Img">
                  <img className='w-100' src={Sport_9} alt="Sport_9" />
                </div>
                <p className=' text-white text-center mt-3'>تمارين ﻿الضغط :
                 ابدا بوضعية اللوح الخشبي مع وضع يدك تحت الكتفين واخفض جسمك ثم ادفعه للاعلي 
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thirdContent d-flex flex-column justify-content-center align-items-center">
                <div className="Img">
                  <img className='w-100' src={Sport_10} alt="Sport_10" />
                </div>
                <p className=' text-white text-center mt-3'>تمرين البنش برس :
                استلقي ع مقعد وقوم برفع الباربل بكلتا اليد فوق صدرك 
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thirdContent d-flex flex-column justify-content-center align-items-center">
                <div className="Img">
                  <img className='w-100' src={Sport_11} alt="Sport_11" />
                </div>
                <p className=' text-white text-center mt-3'>تمرين القرفصاء:
                قف مع مباعدة قدميك بعرض الكتفين واثني ركبتيك وادفع وركيك للخلف كما لو كنت تجلس علي كرسي مع الحفاظ علي ظهرك مستقيم
                 </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thirdContent d-flex flex-column justify-content-center align-items-center">
                <div className="Img">
                  <img className='w-100' src={Sport_12} alt="Sport_12" />
                </div>
                <p className=' text-white text-center mt-3'>تمرين الرفعة الميتة:
                قف مع قدميك تحت الباربل بيديك وانحني عند الوركين والركبتين لالتقاط الباربل بيدك
                </p>
              </div>
            </div>
           </div>
          </div>
        </div>
        )}
       </section> */}
 

    </>
  )
}
