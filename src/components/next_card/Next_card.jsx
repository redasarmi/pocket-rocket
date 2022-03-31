import React, {useEffect, useState} from 'react';
import './next_card.css'

const NextCard = () => {

    const api = "https://api.spacex.land/rest/launch-next"
    const [count, setCount] = useState([]);

    useEffect(() => {
            async function getLastLaunch(){
                if (count.length === 0) {
                    const api_call = await fetch(api);
                    const data = await api_call.json();
                    setCount(data);
                }
            } getLastLaunch();

        },[]
    );

    return (
        <div className="next-card">
            <div className="next-card__body">
                <img src={count.flickr_images? count.id: "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"} alt="rocket image" className="next-card__img"/>
                <h1 className="next-card__title" id={count.id}>{count.mission_name? count.mission_name: "not found"}</h1>
                <h4 className="next-card__content" id={count.id}>Launch Year: {count.launch_year? count.launch_year: "not found"}</h4>
                <h4 className="next-card__content" id={count.id}>Rocket Name: {count.rocket_name? count.rocket_name: "not found"}</h4>
                <h4 className="next-card__content" id={count.id}>F_S Reuse Count: {count.reuse_count? count.reuse_count: "not found"}</h4>
            </div>
        </div>
    );
}

export default NextCard;
