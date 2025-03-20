import React from 'react'
import Female from '/src/assets/Images/Female.png';
import Male from '/src/assets/Images/gym.png';
import Sport_1 from '/src/assets/Images/1.png';
import Sport_2 from '/src/assets/Images/2.png';
import Sport_3 from '/src/assets/Images/3.png';
import Sport_4 from '/src/assets/Images/4.png';
import Sport_5 from '/src/assets/Images/5.png';
import Sport_6 from '/src/assets/Images/6.png';
import Sport_7 from '/src/assets/Images/7.png';
import Sport_8 from '/src/assets/Images/8.png';
import Sport_9 from '/src/assets/Images/9.png';
import Sport_10 from '/src/assets/Images/10.png';
import Sport_11 from '/src/assets/Images/11.png';
import Sport_12 from '/src/assets/Images/12.png';

export default function Practise() {
  return (
    <>
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
              <button className="gender btn">
                Female
              </button>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="practise_content ps-5 m-auto d-flex flex-column align-items-center justify-content-center ">
              <div className="image two my-5">
                <img className='w-100 h-100' src={Male} alt="Male_Logo" />
              </div>
              <button className="genderTwo btn">
                Male
              </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
     </section>
      <section>
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
       </section>
       <section>
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
       </section>
    </>
  )
}
