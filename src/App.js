import React from "react";
import styled from "styled-components";
import Detail from "./Detail";
import Main from './Main';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <AppWrapper>
      <div>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/detail/:day' element={<Detail/>}/>
        </Routes>
      </div>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100vw;
    max-width: 450px;
    height: 90vh;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

`;
