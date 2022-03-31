import React, {useState} from 'react';
import './home.css'

const Home = () => {

    const api = "https://api.spacex.land/rest/launches?apoapsis_km=0&block=0&cap_serial=string&capsule_reuse=string&core_flight=0&core_reuse=string&core_serial=string&customer=string&eccentricity=0&end=&epoch=&fairings_recovered=string&fairings_recovery_attempt=string&fairings_reuse=string&fairings_reused=string&fairings_ship=string&gridfins=string&id=&inclination_deg=0&land_success=string&landing_intent=string&landing_type=string&landing_vehicle=string&launch_date_local=&launch_date_utc=&launch_success=string&launch_year=string&legs=string&lifespan_years=0&longitude=0&manufacturer=string&mean_motion=0&mission_id=string&mission_name=string&nationality=string&norad_id=0&orbit=string&payload_id=string&payload_type=string&periapsis_km=0&period_min=0&raan=0&reference_system=string&regime=string&reused=string&rocket_id=string&rocket_name=string&rocket_type=string&second_stage_block=string&semi_major_axis_km=0&ship=string&side_core1_reuse=string&side_core2_reuse=string&site_id=string&site_name_long=string&site_name=string&start=&tbd=string&tentative_max_precision=string&tentative=string&limit=3"
    const [rockets, setRockets] = useState([]);

    const getLastLaunch = async () => {
        if (rockets.length === 0) {
            const api_call = await fetch(api);
            const data = await api_call.json();
            setRockets(data);
        }
    }

    const renderRocket = (rocket) => {
            return (
                <div>
                    {rocket.details}
                </div>)
    }

    const renderRockets = () => {
        if (rockets.length > 0) {
            return rockets.map(rocket => renderRocket(rocket))
        }
    }
    return (
        <div>
            <div onClick={getLastLaunch}>
                <p>data</p>
            </div>
            {renderRockets()}
        </div>
    );
};

export default Home;