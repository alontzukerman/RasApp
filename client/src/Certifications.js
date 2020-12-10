import React , { useEffect, useState , useRef } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
import styled from 'styled-components';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

function Certifications({soldierId}) {

    const selectCurrent = useRef(null);
    const [certifications,setCertifications] = useState([]);
    const [myCertifications,setMyCertifications] = useState([]);
    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
          createCertification(selectCurrent.current.value)
          setIsOpen(false);
    }
    const getCertificationsBySoldierId = async () => {
        const { data } = await axios.get(`/api/certifications/soldier/${soldierId}`);
        console.log(data);
        setMyCertifications(data);
    }
    const createCertification = async (certificationId) => {
        console.log('creating new certification')
        const newCertification = {
            certificationId: certificationId,
            soldierId: soldierId
    }
        const response = await axios.post(`/api/certifications`,newCertification);
        console.log(response);
    }
    const getInfoAbout = async () => {
        const { data } = await axios.get(`/api/certifications`);
        setCertifications(data);
    }
    useEffect(()=>{
        getCertificationsBySoldierId();
    },[])

    return (
        <ParaCon>
            <Title>הסמכות</Title>
            <Button onClick={openModal}>+</Button>
            {
            myCertifications.map((certification,i)=>{
                return <div>{certification.Certification.certificationName}</div>
            })
            }
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={()=>getInfoAbout()}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="CreateCertification"
            >
                <h2>Create New Certification</h2>
                <button onClick={()=>closeModal()}>SUBMIT</button>
                <form>
                    <select ref={selectCurrent}>
                        {
                            certifications.map((certification,i)=>{
                                return <option value={`${certification.id}`}>
                                    {certification.certificationName}
                                </option>
                            })
                        }
                    </select>
                </form>
            </Modal>
        </ParaCon>
    )
}

const ParaCon = styled.div`
    min-height: 15vh ;
    width: 90vw ;
    margin-top: 2vh ;
    border: 1px solid white ;
`;
const Title = styled.div`
    width: 100% ;
    height: 3vh ;
    background-color: #444 ;
    padding: 0.5em 0 ;
    float: right ;
    display: flex ;
    justify-content: flex-end ;
    align-items: center ;
`;

const Button = styled.button``;
export default Certifications
