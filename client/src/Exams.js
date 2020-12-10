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

function Exams({soldierId}) {

    const selectCurrent = useRef(null);
    const inputMark = useRef(null);
    const [exams,setExams] = useState([]);
    const [myExams,setMyExams] = useState([]);
    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
          createExams(selectCurrent.current.value,inputMark.current.value)
          setIsOpen(false);
    }
    const getExamsBySoldierId = async () => {
        const { data } = await axios.get(`/api/exams/soldier/${soldierId}`);
        setMyExams(data);
    }
    const createExams = async (examId,mark) => {
        console.log('creating new exam')
        const newExam = {
            examId: examId,
            soldierId: soldierId,
            mark: mark
    }
        const response = await axios.post(`/api/exams`,newExam);
        console.log(response);
    }
    const getInfoAbout = async () => {
        const { data } = await axios.get(`/api/exams`);
        setExams(data);
    }
    useEffect(()=>{
        getExamsBySoldierId();
    },[])
    return (
        <ParaCon>
            <Title>בחנים</Title>
            <Button onClick={openModal}>+</Button>
            {
            myExams.map((exam,i)=>{
                return <div>{exam.examName}</div>
            })
            }
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={()=>getInfoAbout()}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="CreateExam"
            >
                <h2>Create New Exam</h2>
                <button onClick={closeModal}>SUBMIT</button>
                <form>
                    <select>
                        {
                            exams.map((exam,i)=>{
                                return <option value={`${exam.examName}`}>
                                    {exam.examName}
                                </option>
                            })
                        }
                    </select>
                    <input ref={inputMark} placeholder="mark"></input>
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
export default Exams
