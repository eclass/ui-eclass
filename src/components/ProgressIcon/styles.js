import styled from 'styled-components'

// @Export Styled Component
const Wrapper = styled.div`
    background-color: ${({ bgcolor }) => bgcolor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ color }) => color || 'inherit'};
    height: ${({ size }) => size || '27px'};
    width: ${({ size }) => size || '27px'};

    svg {
        margin: 0;
        align-self: center;
    }
`
export default Wrapper