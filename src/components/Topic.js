import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAppFunctions } from '../AppFunction';

// Topic function
function Topic({ topics, onTopicClick, resultData }) {
    const { userName } = useAppFunctions();

    // State to track tooltip visibility for each topic
    const [tooltipVisibility, setTooltipVisibility] = useState({});

    const handleMouseEnter = (topicId) => {
        setTooltipVisibility((prevState) => ({
            ...prevState,
            [topicId]: true,
        }));
    };

    const handleMouseLeave = (topicId) => {
        setTooltipVisibility((prevState) => ({
            ...prevState,
            [topicId]: false,
        }));
    };

    return (
        <div id="topics">
            {topics.map((topic) => {
                const quizResults = resultData.filter(
                    (result) => result.topic === topic.heading && result.username === userName
                );
                const passed = quizResults.some((result) => result.score >= 50);
                const activeClass = quizResults.length > 0 ? 'active' : '';

                return (
                    <a
                        key={topic.id}
                        className={`topic ${activeClass} ${passed ? 'passed' : 'failed'}`}
                        onClick={activeClass ? () => {} : () => onTopicClick(topic.heading)}
                        onMouseEnter={activeClass ? () => handleMouseEnter(topic.id) : () => {}}
                        onMouseLeave={activeClass ? () => handleMouseLeave(topic.id) : () => {}}
                    >
                        <h3>{topic.heading}</h3>
                        <p>{topic.description}</p>
                        {quizResults.map((result, index) => (
                            <div key={index} id="tag-container">
                                <a onClick={() => onTopicClick(topic.heading)}>Re-take</a>
                                <p id="tag">{`${result.score}%`}</p>
                            </div>
                        ))}

                        {/* Render tooltip only if active and tooltip is visible */}
                        {activeClass && tooltipVisibility[topic.id] && (
                            <div className="tooltip">
                                {quizResults.length > 0 ? (
                                    passed ? (
                                        `${topic.heading} quiz passed with ${quizResults[0].score}%`
                                    ) : (
                                        `${topic.heading} quiz failed with ${quizResults[0].score}%`
                                    )
                                ) : null}
                            </div>
                        )}
                    </a>
                );
            })}
        </div>
    );
}

Topic.propTypes = {
    topics: PropTypes.array.isRequired,
    onTopicClick: PropTypes.func.isRequired,
    resultData: PropTypes.array.isRequired,
};

export default Topic;
