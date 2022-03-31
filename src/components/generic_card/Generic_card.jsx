import React, {useEffect, useState} from 'react';
import './generic_card.css'
import axios from 'axios';

const GenericCard = () => {

    const api = "https://api.spacex.land/rest/launches?apoapsis_km=0&block=0&cap_serial=string&capsule_reuse=string&core_flight=0&core_reuse=string&core_serial=string&customer=string&eccentricity=0&end=&epoch=&fairings_recovered=string&fairings_recovery_attempt=string&fairings_reuse=string&fairings_reused=string&fairings_ship=string&gridfins=string&id=&inclination_deg=0&land_success=string&landing_intent=string&landing_type=string&landing_vehicle=string&launch_date_local=&launch_date_utc=&launch_success=string&launch_year=string&legs=string&lifespan_years=0&longitude=0&manufacturer=string&mean_motion=0&mission_id=string&mission_name=string&nationality=string&norad_id=0&orbit=string&payload_id=string&payload_type=string&periapsis_km=0&period_min=0&raan=0&reference_system=string&regime=string&reused=string&rocket_id=string&rocket_name=string&rocket_type=string&second_stage_block=string&semi_major_axis_km=0&ship=string&side_core1_reuse=string&side_core2_reuse=string&site_id=string&site_name_long=string&site_name=string&start=&tbd=string&tentative_max_precision=string&tentative=string&limit=3"
    const [count, setCount] = useState("");

    const [rn, setRn] = useState("");
    const [ly, setLy] = useState("");
    const [id, setId] = useState("");
    const [mn, setMn] = useState("");
    const [im, setIm] = useState("");

    useEffect= () => {

        const data = axios.get("https://api.spacex.land/rest/launches?apoapsis_km=0&block=0&cap_serial=string&capsule_reuse=string&core_flight=0&core_reuse=string&core_serial=string&customer=string&eccentricity=0&end=&epoch=&fairings_recovered=string&fairings_recovery_attempt=string&fairings_reuse=string&fairings_reused=string&fairings_ship=string&gridfins=string&id=&inclination_deg=0&land_success=string&landing_intent=string&landing_type=string&landing_vehicle=string&launch_date_local=&launch_date_utc=&launch_success=string&launch_year=string&legs=string&lifespan_years=0&longitude=0&manufacturer=string&mean_motion=0&mission_id=string&mission_name=string&nationality=string&norad_id=0&orbit=string&payload_id=string&payload_type=string&periapsis_km=0&period_min=0&raan=0&reference_system=string&regime=string&reused=string&rocket_id=string&rocket_name=string&rocket_type=string&second_stage_block=string&semi_major_axis_km=0&ship=string&side_core1_reuse=string&side_core2_reuse=string&site_id=string&site_name_long=string&site_name=string&start=&tbd=string&tentative_max_precision=string&tentative=string&limit=3")
        console.log(data.data)
    };

    useEffect(async () => {
            if (count.length === 0) {
                const api_call = await fetch(api);
                const data = await api_call.json();
                setCount(data);
                console.log(data)
                console.log(api)

                setLy(data[0].launch_year);
                setMn(data[0].mission_name);
                setRn(data[0].rocket.rocket_name);
                setId(data[0].id);
                setIm(data[0].links.flickr_images[0]);
            }
        },[]
    );

    return (
        <div className="generic-card">
            <div className="generic-card-body">
                <img src={im? im:"https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"} alt="rocket image" className="card-img"/>
                <h2 className="card-title" id={id}>{mn? mn: "not found"}</h2>
                <h4 className="card-content" id={id}>Launch Year: {ly? ly: "not found"}</h4>
                <h4 className="card-content" id={id}>Rocket Name: {rn? rn: "not found"}</h4>
            </div>
        </div>
    );
};

export default GenericCard;
