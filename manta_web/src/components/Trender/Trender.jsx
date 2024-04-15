import style from './Trender.module.css';

function Trender(props){
    return(
        props.is_positive ?
        <div className= {style.trend} id={style.pos}>
            <p>↓{props.percent}%</p>
        </div> 
        :
        <div className={style.trend}  id={style.neg}>
            <p>↑{props.percent}%</p>
        </div>
    );
}

export default Trender;