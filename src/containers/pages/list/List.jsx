import React, {useState, useEffect} from 'react';
import './list.css';



const List = () => {

    const api = "https://api.spacex.land/rest/launches-past-result?apoapsis_km=0&block=0&cap_serial=string&capsule_reuse=string&core_flight=0&core_reuse=string&core_serial=string&customer=string&eccentricity=0&end=&epoch=&fairings_recovered=string&fairings_recovery_attempt=string&fairings_reuse=string&fairings_reused=string&fairings_ship=string&gridfins=string&id=&inclination_deg=0&land_success=string&landing_intent=string&landing_type=string&landing_vehicle=string&launch_date_local=&launch_date_utc=&launch_success=string&launch_year=string&legs=string&lifespan_years=0&longitude=0&manufacturer=string&mean_motion=0&mission_id=string&mission_name=string&nationality=string&norad_id=0&orbit=string&payload_id=string&payload_type=string&periapsis_km=0&period_min=0&raan=0&reference_system=string&regime=string&reused=string&rocket_id=string&rocket_name=string&rocket_type=string&second_stage_block=string&semi_major_axis_km=0&ship=string&side_core1_reuse=string&side_core2_reuse=string&site_id=string&site_name_long=string&site_name=string&start=&tbd=string&tentative_max_precision=string&tentative=string&limit=1"
    const [count, setCount] = useState([]);

    useEffect(() => {
            async function getLastLaunch(){
                if (count.length === 0) {
                    const api_call = await fetch(api);
                    const data = await api_call.json();
                    setCount(data);
                    console.log(data)
                }
            } getLastLaunch();

        },[]
    );

    return (
        <div className="card">
            <div className="card__body">
                <img src={count.flickr_images? count.id: "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"} alt="rocket image" className="nextcard__img"/>
                <h4 className="card__title" id={count.id}>{count.mission_name? count.mission_name: "not found"}</h4>
                <p className="card__content" id={count.id}>Launch Year: {count.launch_year? count.launch_year: "not found"}</p>
                <p className="card__content" id={count.id}>Rocket Name: {count.rocket_name? count.rocket_name: "not found"}</p>
            </div>
        </div>
    );
};

export default List;
