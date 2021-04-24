module.exports = ({Casename,PartyName,tehsil, judgename,address,message ,from}) => {
   const today = new Date();
return `
   <!doctype html>
   <html>
      <head>
         <meta charset="utf-8">
         <title>PDF Result Template</title>
         <style>
         .da{
            font-weight:bold;
         }
         .pa{
            font-weight:bold;
            font-size:20px;
            text-align:center
         }
            .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica',
            color: #555;
            }
            .margin-top {
            margin-top: 50px;
            }
            .justify-center {
            text-align: center;
            }
            .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
            }
            .invoice-box table td {
            padding: 5px;
            vertical-align: top;
            }
            .invoice-box table tr td:nth-child(2) {
            text-align: right;
            }
            .invoice-box table tr.top table td {
            padding-bottom: 20px;
            }
            .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
            }
            .invoice-box table tr.information table td {
            padding-bottom: 40px;
            }
            .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            }
            .invoice-box table tr.details td {
            padding-bottom: 20px;
            }
            .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
            }
            .invoice-box table tr.item.last td {
            border-bottom: none;
            }
            .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
            }
            @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
            }
            .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
            }
            .pa{
               font-weight:bold;
               font-size:20px;
               text-align:center
            }
            }
         </style>
      </head>
      <body>
         <div class="invoice-box">
            <table cellpadding="0" cellspacing="0">
               <tr class="top">
                  <td colspan="2">
                     <table>
                        <tr>
                           <td class="title"><img  src="https://www.vakilno1.com/wp-content/uploads/2013/03/gravel-justice.jpg"
                              style="width:100%; max-width:156px;"></td>
                           <td>
                            <p class="da"> Date:</p> ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                           </td>
                           <p class="pa">Summon Of A District Court</p>
                        </tr>
                     </table>
                  </td>
               </tr>
               <tr class="information">
                  <td colspan="2">
                     <table>
                        <tr>
                           <td>
                           <p class="da"> 
                              Case name:</p> ${Casename}
                           </td>
                           <td  colspan="2">
                           <p class="da"> 
                              From:</p> ${from}
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>
              
               <tr class="item">
                  <td> <p class="da"> Party Name:</p></td>
                  <td>${PartyName}</td>
               </tr>
               <tr class="item">
                  <td> <p class="da">Tehsil:</p></td>
                  <td>${tehsil}</td>
               </tr>
               
            <tr class="item">
               <td> <p class="da"> Address:</p></td>
               <td>${address}</td>
            </tr>
            <tr class="item">
            <td>To the above Party ${PartyName}:</td>
            
         </tr>
            </table>
            <br />
            <p>${message}</p>
            <br />
            <br />
             <p class="da"> Judge:</p>
            <br/>
            ${judgename}
<br/>

         </div>
      </body>
   </html>
   `;
};