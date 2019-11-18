import styled from 'styled-components'

const Wrapper = styled.figure`
  font-family: "'Roboto', sans-serif";
  border-radius: 50%;
  flex-shrink: 0;
  height: ${prop => `${prop.size}px`};
  margin: 0px 0px 0px 0px;
  overflow: hidden;
  width: ${prop => `${prop.size}px`};
  background-color: ${props => props.selectedColor};
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: white;
    text-transform: uppercase;
    font: 400 ${props => `${props.fontSize}px`} / 30px 'Roboto', sans-serif;
  }
  img {
    height: 100%;
    max-width: auto;
  }
  .test-img {
    display: none;
  }
`

export { Wrapper }
