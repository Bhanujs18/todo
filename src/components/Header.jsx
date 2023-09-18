import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
align-items: center;
justify-content: start;
background-color: #C0C0C0;
padding: 1rem;

img {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
`

const Header = () => {
  return (
    <Wrapper>
        <img src='./media/abc.gif' alt='img' style={{height:"6rem"}}/>
    </Wrapper>
  )
}

export default Header