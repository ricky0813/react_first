import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {

    const navigate = useNavigate();
     
    return (
        <Container>
          <h2>페이지를 찾을 수 없습니다!</h2>  
          <button onClick={() => navigate(-1) }>뒤로가기</button>
        </Container>
    );
};


const Container = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;

    h2 {
        margin: 8vh 0 4vh 0;
    }

    button{
        display: inline-block;
        border: 0;
        width: 25%;
        height: 5.7%;
        border-radius: 5px;
        font-size: 16px;
        background-color: #45474a;
        color: #fff;
        font-weight: 300;
        transition: 0.2s;
        cursor: pointer;
        margin: 3vh auto 0;

    }

    button:hover{
       background-color: #606870;
    }
`;

export default NotFound;
