import styled from 'styled-components'

const Square = styled.div`
    width: 60px;
    height: 60px; 
    background-color: blueviolet;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: 0;
    animation: square 25s linear alternate infinite;

    @keyframes square{
        to{
            transform: translate(110vw, 110vh) 
        }
    }
`

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    opacity: 0.7;
    position: absolute;
    top: 700px;
    left: -100px;
    z-index: 0;
    animation: circle 25s linear alternate infinite;

    @keyframes circle{
        to{
            transform: translate(110vw, -100vh) 
        }
    }
`

const Rect = styled.div`
    width: 100px;
    height: 50px;
    background-color: green;
    opacity: 0.5;
    position: absolute;
    top: -300px;
    left: 800px;
    z-index: 0;
    animation: rect 25s linear alternate infinite;

    @keyframes rect{
        to{
            transform: translate(-50vw, 110vh) 
        }
    }
`

const AnimatedShapes = () => {
    return (
        <>
            <Square />
            <Rect />
            <Circle />
        </>
    )
}

export default AnimatedShapes
