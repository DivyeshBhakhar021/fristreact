import React from 'react';
import style from  '../card/Card.module.css'

function Crad({ data }) {
    return (
        <div>
            
            { (
               <div className={style.main} >
                    <div className={style.card}>
                        <p className={style.data}><b>ID:</b> {data.id}</p>
                        <p className={style.data}><b>Name: </b>{data.name}</p>
                        <p className={style.data}><b>Price:</b> {data.price}</p>
                        <p className={style.data}><b>Expiry:</b> {data.expiry}</p>
                        <p className={style.data}><b>Description:</b> {data.desc}</p>


                        <p className={style.data}><b>ID:</b> {data.Drid}</p>
                        <p className={style.data}><b>Name: </b>{data.Drname}</p>
                        <p className={style.data}><b>Address:</b> {data.addres}</p> 
                        <p className={style.data}><b>Description:</b> {data.drdesc}</p> 
                    </div>
                </div>
            )}
        </div>
    );
}

export default Crad;




// function Crad({ data ,info}) {
//     return (
//         <>
//             <div className="main">
//             {data && (
               
//                     <div className={style.card}>
//                         <p className={style.data}><b>ID:</b> {data.id}</p>
//                         <p className={style.data}><b>Name: </b>{data.name}</p>
//                         <p className={style.data}><b>Price:</b> {data.price}</p>
//                         <p className={style.data}><b>Expiry:</b> {data.expiry}</p>
//                         <p className={style.data}><b>Description:</b> {data.desc}</p>
//                     </div>
                
//             )}
//             {info &&(
//                 <div className={style.information}>
//                     <div className={style.card}>
//                         <p className={style.data}><b>ID:</b> {info.id}</p>
//                         <p className={style.data}><b>Name: </b>{info.name}</p>
//                         <p className={style.data}><b>Address:</b> {info.addres}</p> 
//                         <p className={style.data}><b>Description:</b> {info.desc}</p> 
//                     </div>
//                 </div>
//             )}
//             </div>
//         </>
//     );
// }

