import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Detail = ({dayArr}) => {
    const day = useParams().day

    const circles = React.useRef([])
    
    const rateCircle = (i) => {
        circles.current.forEach(a=>a.classList.remove('circle-on'))
        for(let j = 0; j <= i; j++){
            circles.current[j].classList.add('circle-on')
        }
    }
    
    const rateCircleKey = (e) =>{
        const value = e.key;

        if(value >= 1 && value <= 5){
            circles.current.forEach(a=>a.classList.remove('circle-on'))
            for(let j = 0; j < value; j++){
                circles.current[j].classList.add('circle-on')
            }
        }
    }


    React.useEffect(() => {
        const circles_ref = circles.current;

            for(let i = 0; i < circles_ref.length; i++){
                circles_ref[i].addEventListener('click',()=>{rateCircle(i)})
            }
            window.addEventListener('keydown',rateCircleKey)
        return () => {
            window.removeEventListener('keydown',rateCircleKey)
        };
      }, []);

    return (
        <Container>
                <h2>{dayArr.dayWord[dayArr.dayWordEn.indexOf(day)]}요일</h2>
                <div className='circle-wrap'>
                    <div className='circle' ref={e=>circles.current[0]=e}></div>
                    <div className='circle' ref={e=>circles.current[1]=e}></div>
                    <div className='circle' ref={e=>circles.current[2]=e}></div>
                    <div className='circle' ref={e=>circles.current[3]=e}></div>
                    <div className='circle' ref={e=>circles.current[4]=e}></div>
                </div>
                <Link to='/'>
                    <button>평점 남기기</button>
                </Link>     
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;

    h2 {
        text-align: center;
        margin: 8vh 0 4vh 0;
        font-size: 1.6em;
    }

    .circle-wrap{
        display: flex;
        width: 70%;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 3px 14px -1px rgba(0,0,0,0.1);
        padding: 30px 25px;
        border-radius: 10px;
        margin: auto;
    }

    .circle{
        width: 50px;
        height: 50px;
        background-color: #eee;
        border-radius: 50%;
        cursor: pointer;
    }

    .circle-on{
        background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
    }

    a {
        text-decoration: none;
        
    }

    button{
        display: block;
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

export default Detail;