import { useState } from "react";

const items = ["Vision", "Mission", "Values"];

const VisionSection = () => {
    const [activeTab, setActiveTab] = useState(items[0]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section>
            <div className="container">
                <div className="arrow-btn">
                    <img src="../assets/images/about-leftarrow.png" id="left-arrow" />
                    <img src="../assets/images/about-rightarrow.png" id="right-arrow" />
                </div>
                <div className="text-section-content">

                    <div className="text-section-container">
                        {items.map((item, index) => (
                            <div key={index} className={activeTab === item ? "text-item active" : "text-item"} onClick={() => handleTabClick(item)}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="img-content-container">
                        {items.map((item, index) => (
                            <div key={index} className="content" content-id={item} style={activeTab === item ? {} : {display: "none"}}>
                                <div className="content-box">
                                    <div className="image-container">
                                        <img id="image" src={`../assets/images/about-${item.toLowerCase()}.png`} alt={`${item} Image`} loading="lazy" />
                                    </div>

                                    <div className="content-para">
                                        <p>{`At Wyreflow, our ${item.toLowerCase()} is to ${index === 0 ? "lead the digital transformation journey by delivering best-in-class technology solutions to our stakeholders." : index === 1 ? "be an agile, customer-centric, and purpose-led company, delivering best-in-class technology solutions to our stakeholders." : "build on innovation, integrity, and long-term partnerships. We’re committed to delivering sustainable, impactful solutions while fostering continuous learning and collaboration, ensuring our clients stay ahead in the ever-evolving digital world."}`}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default VisionSection;

