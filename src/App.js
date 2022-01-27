import React from "react";
import styled from "styled-components";
import Detail from "./Detail";
import Main from './Main';
import {Routes, Route} from 'react-router-dom'
import NotFound from "./NotFound";

function App() {

  const [day,] = React.useState({
    dayWord:['일','월','화','수','목','금','토'], 
    dayWordEn:['sun','mon','tue','wed','thu','fri','sat']
  })

  return (
    <AppWrapper>
      <div>
        <Routes>
          <Route path='/' element={<Main dayArr={day}/>}/>
          <Route path='/detail/:day' element={<Detail dayArr={day}/>}/>
          <Route path='/*' element={<NotFound/>}/>
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
