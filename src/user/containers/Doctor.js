import React from 'react';
import CardDoctor from '../components/CardDoctor';


const docterdata = [
    {
        "id": 1,
        "name": "Dr.Divyesh",
        "time": 8,
        "addres":"simda" ,
        "desc": "As a doctor, it is often important for others around you to know who you are. While a resume effectively lists your credentials, it may not represent your complete history, expertise and values that let you impress people around you. A profile may better explain who you are and what you can offer others. In this article, "
    },
    {
        "id": 2,
        "name": "Dr.yesh",
        "time": 7,
        "addres":"kamej" ,
        "desc": "A profile of a doctor is an effective personal marketing tool that doctors utilise to showcase their specialisation, qualifications and expertise. Creating a profile is beneficial for doctors as it ensures that others around them know their background and the services they offer. A doctor's profile primarily includes the professional details about the doctor,"
    },
    {
        "id": 3,
        "name": "Dr.meet",
        "time": 6,
        "addres":"simda" ,
        "desc": "Convincing profiles can have various styles, but they generally have some components in common. Some ways you can create a convincing doctor profile include:"
    },
    {
        "id": 4,
        "name": "Dr.kano",
        "time": 9,
        "addres":"vasu" ,
        "desc": "Begin creating your profile with your name. Next, add your speciality and mention your highest qualification. You can decide on the style and format of the profile as you want. While deciding on your profile structure, keep in mind that structure can help you organise information in a way that is easy to read and understandable for readers. The common format uses a series of headings and subheadings to systematically organise the information."
    },
]

function Doctor() {
    return (
        <>
            {
               docterdata.map((v,i)=>(
                    // <>
                    // <p>{v.name}</p>
                    // <p>{v.time}</p>
                    // </>
                    
                    <CardDoctor  info={v} />
                   
               )) 
            }
        </>
    );
}

export default Doctor;