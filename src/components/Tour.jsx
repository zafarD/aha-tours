import { useState } from "react";

const Tour = ({id, image, info, name, price, removeTour}) => {
    const [more, setMore] = useState(false)
    const pr = parseInt(price.replace(",", "")) * 70
    return <article className="single-tour">
        <img src={image} alt={name} className="img"/>
        <span className="tour-price">INR {pr}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p>{more ? info : `${info.substring(0, 180)} ...`}
            <button type="button" className="info-btn" onClick={() => setMore(!more)}>
                {more ? " show less": "read more"}
            </button>
            </p>
            <button type="button" className="btn btn-block delete-btn" onClick={() => removeTour(id)}>
                not interested
            </button>
        </div>
    </article>
}

export default Tour;