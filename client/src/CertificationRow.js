import React from 'react'
import styled from 'styled-components';
function CertificationRow({certification}) {
    console.log(certification);
    return (
        <Row>
            <div>{certification.Certification.certificationName}</div>
        </Row>
    )
}
const Row = styled.div`
    display: flex ;
    flex-direction: row-reverse;
    justify-content: space-between;
`;


export default CertificationRow
