import React, { useState } from 'react';

export default function FAQ() { 
    const [open, setOpen] = useState(null);

    const handleOpen = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };
    return (
        <section>
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {questions.map((question, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question">
                            <span>{question.question}</span>
                            <span className="icon" onClick={() => handleOpen(index)}>
                                {open === index ? <i className='bx bx-up-arrow-alt'></i> : <i className='bx bx-down-arrow-alt'></i>}
                            </span>
                        </div>
                        {open === index && <div className="faq-answer">
                            <p>{question.answer}</p>
                        </div>}
                    </div>
                ))}
            </div>
        </section>
    );
};



const questions = [
    {
        question: 'What does Wyreflow do?',
        answer: 'Wyreflow offers a range of services including application services, ITES, mobility, cloud, big data, machine learning, and AI.'
    },
    {
        question: 'What is the future for Wyreflow?',
        answer: 'Wyreflow is constantly innovating and expanding its services to meet the needs of both US clients and government projects.'
    },
    {
        question: 'How can Wyreflow help my business grow?',
        answer: 'By leveraging cutting-edge technology, Wyreflow can provide tailored solutions that help businesses scale and succeed in their respective industries.'
    },
    {
        question: 'What industries does Wyreflow serve?',
        answer: 'Wyreflow serves various industries including healthcare, finance, manufacturing, and more.'
    }
];

