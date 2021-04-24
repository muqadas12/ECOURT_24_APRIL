import React from "react"
import {Table} from "react-bootstrap"
import affidavitone from "./pdfs/Affidavit_h.pdf"
import affidavittwo from "./pdfs/Affidavit_a.pdf"
import affidavitthree from "./pdfs/Affidavit_f.pdf"
import affidavitfour from "./pdfs/Affidavit_d.pdf"
import affidavitfive from "./pdfs/Affidavit_mn.pdf"
import rec from "./assets/Images/re.png";
import vakalatnamaone from "./pdfs/vakalat_kundi.pdf"

import vakalatnamatwo from "./pdfs/vakalat_amjad.pdf"
import vakalatnamathree from "./pdfs/vakalat_tanveer.pdf"
import vakalatnamafour from "./pdfs/vakalat_imran.pdf"
import vakalatnamafive from "./pdfs/vakalat_afnan.pdf"

import witnesstwo from "./pdfs/Witness_2_services.pdf"
import witnessfive from "./pdfs/Witness_afnan_5.pdf"








import pdf from "./assets/Images/pdf.PNG"
import {Link} from "react-router-dom"
const CaseRecord=()=>{
    return(
        <div>
          <img className="rec-img" src={rec}/>
            <Table striped bordered hover>
  <thead>
    <tr>
     
      <th className="heading-table-one">Affidavit</th>
      <th className="heading-table-one">Vaqalat nama</th>
      <th className="heading-table-one">Witness Testimony</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      
      <td><a href={affidavitone}><img className="pdf-affi" src={pdf}/></a></td>
      <td><a href={vakalatnamaone}><img className="pdf-affi" src={pdf}/></a></td>
      <td><a href={witnesstwo}><img className="pdf-affi" src={pdf}/></a></td>

      {/* <td><a href={witnessone}><img className="pdf-affi" src={pdf}/></a></td> */}

      
     



    </tr>
    <tr>
      <td>2</td>
      
      <td><a href={affidavittwo}><img className="pdf-affi" src={pdf}/></a></td>
      <td><a href={vakalatnamatwo}><img className="pdf-affi" src={pdf}/></a></td>
      <td><a href={witnesstwo}><img className="pdf-affi" src={pdf}/></a></td>



     
     
    </tr>
    <tr>
      <td>3</td>
     
      <td><a href={affidavitthree}><img className="pdf-affi" src={pdf}/></a></td>
      <td><a href={vakalatnamathree}><img className="pdf-affi" src={pdf}/></a></td>

      <td><a href={witnesstwo}><img className="pdf-affi" src={pdf}/></a></td>

    </tr>
    <tr>
      <td>4</td>
     
      <td><a href={affidavitfour}><img className="pdf-affi" src={pdf}/></a></td>

      <td><a href={vakalatnamafour}><img className="pdf-affi" src={pdf}/></a></td>

      <td><a href={witnessfive}><img className="pdf-affi" src={pdf}/></a></td>
    </tr>
    <tr>
      <td>5</td>
     
      <td><a href={affidavitfive}><img className="pdf-affi" src={pdf}/></a></td>

      <td><a href={vakalatnamafive}><img className="pdf-affi" src={pdf}/></a></td>
      <td><a href={witnessfive}><img className="pdf-affi" src={pdf}/></a></td>


      
    </tr>
  </tbody>
</Table>

        </div>

    )
}
export default CaseRecord;