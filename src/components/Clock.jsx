import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
font-size: 4rem;
`

const Clock = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    setInterval(()=>{
        let time = new Date().toLocaleTimeString();
        setCtime(time);
    },1000)

  return (
    <Wrapper>{ctime}</Wrapper>
  )
}

export default Clock;