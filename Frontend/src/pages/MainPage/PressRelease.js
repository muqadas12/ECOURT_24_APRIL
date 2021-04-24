import React from "react"
import Press from "../../assets/Images/pres.jpg"
import m from "../../assets/Images/modulesbg.jpg"
import cms from "../../assets/Images/cmsbg.jpg"
import p from "../../assets/Images/p.jpg"
import prbg from "../../assets/Images/press3.png"

import Roll from 'react-reveal/Roll';



import pressone from "../../pdfs/Farewell_Address_by_Honorable_Justice_Faisal_Arab.pdf"
import presstwo from "../../pdfs/Freedom_of_the_Press_Mr_Justice_Qazi_Faez_Isa.pdf"
import pressthree from "../../pdfs/Declaration_of_Assets_Mr_Justice_Qazi_Faez_Isa.pdf"
import pressfour from "../../pdfs/Press_Release_34_2020.pdf"
import pressfive from "../../pdfs/Press_Release_33_2020.pdf"
import pressSix from "../../pdfs/Press_Release_31_2020.pdf"

import presssix from "../../pdfs/Tender_Notice_01_2020_2021_Photocopier_Machines.pdf"





import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';

import "./Press.css"
import FigureCaption from "react-bootstrap/esm/FigureCaption"
const PressRelease=()=>{
    return(
        <div>
    <img className="responsive-image " src={prbg} alt="My logo" /> 

            <h2 className="pr">Press Release</h2>
			 <Roll left>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    {/* Column-1 */}
    <div>
    <img className="img-1" src={p} alt="My logo" />

    <a className="press-one" href={pressone}><figcaption>FAREWELL ADDRESS BY  <br/>HONORABLE JUSTICEFAISAL ARAB</figcaption></a>
    <br/>
    <p className="date-one">November 5, 2020 </p>
   

<div className="rectangle">
<button 
 className="d-1"><a href={pressone}>Download</a></button>
<PictureAsPdfSharpIcon className="icon-1"/>
<p className="p-1">Farewell Address by<br/> Honorable Justice</p>
</div>
</div>
{/* Column-2 */}
    <div>
    <img className="img-2" src={p} alt="My logo" />
    <a className="press-one" href={presstwo}><figcaption>FREEDOM OF THE PRESS MR. JUSTICE <br/> QAZI FAEZ ESA </figcaption></a>
    <br/>
    <p className="date-one">October 23, 2020 </p>
    <div className="rectangle">
<button 
 className="d-1"><a href={pressone}>Download</a></button>
<PictureAsPdfSharpIcon className="icon-1"/>
<p className="p-1">Freedom of The Press <br/>Mr.Justice Qazi Faez Isa
</p>
</div>
<br/>
<br/>
    </div>

    {/* column-3 */}
    <div><img className="img-2" src={p} alt="My logo" />
    <a className="press-three" href={pressthree}><figcaption>DECLARATION OF ASSETS MR JUSTICE<br/> QAZI FAEZ ISA</figcaption></a>
    <br/>
    <p className="date-one">October 23, 2020 </p>
    <div className="rectangle">
<button 
 className="d-1"><a href={pressone}>Download</a></button>
<PictureAsPdfSharpIcon className="icon-1"/>
<p className="p-1">Declaration of Assets <br/>Mr.Justice Qazi Faez Isa
</p>
</div>
    </div>
    {/* columns-4 */}
    <div><img className="img-2" src={p} alt="My logo" />
    <a className="press-one" href={pressfour}><figcaption>DELEGATION OF RAWALPINDI BAR ASSOCIATION CALLS ON HCJP</figcaption></a>
    <br/>
    <p className="date-one">October 14, 2020 </p>
    <div className="rectangle">
<button 
 className="d-1"><a href={pressfour}>Download</a></button>
<PictureAsPdfSharpIcon className="icon-1"/>
<p className="p-4">
Press Release 34/2020
</p>
</div>
    
    
    </div>
    {/* colum-5 */}
    <div>
    <img className="img-2" src={p} alt="My logo" />
    <a className="press-one" href={pressfive}>
<figcaption> DELEGATION OF KARACHI BAR<br/> ASSOCIATION CALLS ON HCJP</figcaption></a>
<br/>
<p className="date-one">October 14, 2020 </p>
<div className="rectangle">
<button 
 className="d-1"><a href={pressfive}>Download</a></button>
<PictureAsPdfSharpIcon className="icon-1"/>
<p className="p-4">
Press Release 33/2020
</p>
</div>
</div>
{/* column-6 */}
    <div><img className="img-2" src={p} alt="My logo" />
    <a className="press-one" href={pressSix}>
    <figcaption>  
    CONDOLENCE OF HON’BLE CHIEF JUSTICE OF PAKISTAN AND OTHER HON’BLE JUDGES 

</figcaption></a>
<br/>
<p className="date-one">October 1, 2020 </p>
<div className="rectangle">
<button 
 className="d-1"><a href={pressSix}>Download</a></button>
<PictureAsPdfSharpIcon className="icon-1"/>
<p className="p-4">
Press Release 31/2020
</p>
</div>
<br/>


</div>

   
    
  </div>
     </Roll>

        </div>
    )
}
export default PressRelease;