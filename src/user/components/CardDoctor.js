import React from 'react';
import style from  '../components/card/Card.module.css'
function CardDoctor({info}) {
    return (
        <div>
            <>
            {(
                <div className={style.information}>
                    <div className={style.card}>
                        <p className={style.data}><b>ID:</b> {info.id}</p>
                        <p className={style.data}><b>Name: </b>{info.name}</p>
                        <p className={style.data}><b>Address:</b> {info.addres}</p> 
                        <p className={style.data}><b>Description:</b> {info.desc}</p> 
                    </div>
                </div>
            )}
            </>
        </div>
    );
}

export default CardDoctor;