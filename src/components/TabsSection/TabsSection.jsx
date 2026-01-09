import { useState } from "react";

const tabsData = [
    {
        id: "commitment",
        title: "Our Commitment",
        content: (
            <>
            <div>
                <h2>Fostering Lasting Connections</h2>
                <p>We prioritize a long-term perspective, cultivating lasting relationships that drive mutual growth and foster sustainable outcomes.</p>
            </div>
            <img src="../assets/images/about-image2.png" alt="Commitment Image" />
            </>
        ),
    },
    {
        id: "context",
        title: "Our Context",
        content: (
            <>
            <div>
                <h2>Shaping Future-Focused Relationships</h2>
                <p>We prioritize enduring partnerships that drive innovation, growth, and long-term success for all involved.</p>
            </div>
            <img src="../assets/images/about-image3.png" alt="Context Image" />
            </>
        ),
    },
    {
        id: "beliefs",
        title: "Our Beliefs",
        content: (
            <>
            <div>
                <h2>Committed to the Impact We Have on Every Life</h2>
                <p>Our guiding principles of integrity, excellence, and innovation drive our commitment to achieving impactful results and building lasting trust.</p>
            </div>
            <img src="../assets/images/about-image4.png" alt="Beliefs Image" />
            </>
        ),
    },
    {
        id: "roadmap",
        title: "Our roadmap",
        content: (
            <>
            <div>
                <h2>Build and Share Knowledge Pathways</h2>
                <p>Develop comprehensive knowledge pathways and facilitate their dissemination, ensuring seamless access to critical insights and expertise across your organization</p>
            </div>
            <img src="../assets/images/about-image5.png" alt="Roadmap Image" />
            </>
        ),
    },
];
try {
    if (!tabsData || !Array.isArray(tabsData)) {
        throw new Error("Tabs data is not defined or is not an array");
    }
} catch (error) {
    console.error(error);
}

const TabsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="wyreflow-section-container">

            <h1 className="wyreflow-section-title">Wyreflow at a Glance</h1>
            <div className="wyreflow-tab-container">
                {tabsData.map((tab, idx) => (
                    <div key={tab.id} className={`wyreflow-tab ${activeTab === idx ? "active" : ""}`} onClick={() => setActiveTab(idx)}>
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="wyreflow-content-container">
                {tabsData.map((tab, idx) => (
                    activeTab === idx ? tab.content : null
                ))}
            </div>
            <div className="tab-scroller">

                <div className="tab-counter">
                    <p id="starting-tab-idx">01</p>
                    <div></div>
                    <p>04</p>
                </div>

                <div className="left-right-btn">
                    <i className='bx bx-chevron-left' id="left-btn" onClick={() => setActiveTab(activeTab - 1)}></i>
                    <i className='bx bx-chevron-right' id="right-btn" onClick={() => setActiveTab(activeTab + 1)}></i>
                </div>
            </div>
        </section>
    );
};

export default TabsSection;

