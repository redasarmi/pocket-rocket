import React from 'react';

const Rocket = () => {
    return (
        <div className="Rocket">
            <div className="rocket-title">
                <h1>hard coded</h1>
            </div>
            <section className="rocket-media">
                <div className="rocket-img">
                    <img src="https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png" alt="rocket image"/>
                </div>
                <div className="FL-icon">
                    <img src="" alt=""/>
                </div>
            </section>
            <aside>
                <div className="rocket-article">
                    <p className="article-description">TODO</p>
                    <p><span>Date</span></p>
                    <p><span>Rocket Name</span></p>
                    <p><span>Rocket type</span></p>
                    <p><span>Launch Site</span></p>
                    <p><span>Article Link</span></p>
                </div>

            </aside>
        </div>
    );
};

export default Rocket;
