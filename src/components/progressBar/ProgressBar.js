import React from 'react'

const ProgressBar = ({currentQuestionId, totalQuestions}) => {
    return <progress value={currentQuestionId+1} max={totalQuestions+1}/>
}

export default ProgressBar