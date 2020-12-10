import React from 'react'
import styled from 'styled-components';
function ExamRow({exam}) {
    console.log(exam)
    return (
        <Row>
            <div>{exam.Exam.examName}</div>
            <div>{exam.mark}</div>
        </Row>
    )
}
const Row = styled.div`
    display: flex ;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

export default ExamRow
