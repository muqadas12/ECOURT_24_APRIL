import React from "react";
import {Card,Button} from "react-bootstrap"
import "./List.css"
import list from "../../assets/Images/list.jpg";
import sign from "../../assets/Images/signup.PNG";
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
const LawyerList=()=>{
    const cardInfo=[
        {title:"Mahmood Ahmed Alwari Advocate Supreme Court",No:"+92-333-4318788",img:"https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-19-512.png"},
        {title:"Mahmood-ul-Islam Advocate-on-Record Supreme Court",No:"+92-42-37234178",img:"https://i.pinimg.com/474x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"},
        {title:"Manzoor Ahmed Malik Advocate Supreme Court",No:"+92-42-37236345",img:"https://library.kissclipart.com/20180831/trq/kissclipart-lawyer-vs-attorney-clipart-lawyer-solicitor-advoca-821edf693b230a4d.jpg"},
        {title:"Muhammad Nawaz Advocate Supreme Court",No:"+92-42-37311473",img:"https://w7.pngwing.com/pngs/403/783/png-transparent-law-firm-court-pagub%C4%83-statute-others-angle-human-cartoon.png"},
        {title:"Muqtadar Akhter Shabbir Advocate Supreme Court",No:"+92-42-37356063",img:"https://banner2.cleanpng.com/20180529/jeq/kisspng-white-collar-worker-blue-collar-worker-laborer-cli-white-collar-5b0d827d09a685.1291721215276120290395.jpg"}



    ];
    const renderCard=(card,index)=>{
        return(
            <div>

               <Card className="card-lawyer-list" key={{index}}>
        <Card.Img className="card-lawyer-images"  src={card.img}/>
      
      <Card.Body>
        <Card.Title className="card-title-lawyer-list">{card.title}</Card.Title>
        <Card.Text>
            <div className="icon-lawyer-phone">
        <span className="material-icons">
        <LocalPhoneIcon/>
</span></div>
         {card.No}
        </Card.Text>
        
      </Card.Body>
    </Card>
    
            </div>
        )
        
        
    }
    return(
        <div>
            <img className="responsive-image" src={list} />
            {cardInfo.map(renderCard)}
           
        </div>
    )
}

export default LawyerList;