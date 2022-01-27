import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = ({dayArr}) => {
    let day = new Date().getDay();
    
    const circles = React.useRef([]);

    React.useEffect(() => {
        const random = Array.from({length:7}).map(a=>Math.floor(Math.random()*5)+1)

        for(let i = 0; i < circles.current.length; i++){
            for(let j = 0; j < random[i]; j++){
                circles.current[i].children[j].classList.add('circle-on')
            }
        }
      }, []);


    
    return (
        <Container>
            <h1>나의 일주일은?</h1>

            <ul>
                {dayArr.dayWord.map((a,i)=>{
                    return(
                        <li key={i}>
                            <p className='day'>{dayArr.dayWord[(day+i)%7]}</p>
                            <CircleWrap ref={e => circles.current[i] = e }>
                                <div className='circle'></div>
                                <div className='circle'></div>
                                <div className='circle'></div>
                                <div className='circle'></div>
                                <div className='circle'></div>
                            </CircleWrap>
                            <Link to={`/detail/${dayArr.dayWordEn[(day+i)%7]}`}>
                                <div className='arrow'></div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    

    h1 {
        text-align: center;
        margin: 8vh 0 4vh 0;
        font-size: 1.7em;
        font-weight: 700;
    }

    ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    li {
        display: flex;
        width: 65%;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 3px 14px -1px rgba(0,0,0,0.1);
        padding: 25px 25px 20px;
        margin-bottom: 10px;
        background-color: #fff;
        border-radius: 10px;
    }

    .day {
        display: block;
        font-size: 16px;
        font-weight: 400;
        margin: 0 0 5px 0;
        
    }


    .arrow{
        background: transparent;
        border-style: solid;
        border-width: 0 10px calc(10px * 1.732) 10px;
        border-color: transparent transparent #444 transparent;
        transform: rotate(90deg) translateY(0) ;
        margin-bottom: 4px;
        cursor: pointer;      
        transition: 0.3s;
    }

    .arrow:hover{
            transform: rotate(90deg) translateY(-3px);
        }
`;

const CircleWrap = styled.div`

    display: flex;
    height: 30px;
    width: 100vw;
    max-width: 170px;
    justify-content: space-between;

    .circle{
        width: 25px;
        height: 25px;
        background-color: #eee;
        border-radius: 50%;
    }
    .circle-on{
        background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
    }
`;

export default Main;