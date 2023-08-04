// import styled from 'styled-components' ($ npm install styled-components)
import styled from 'styled-components'

// create styled component called 'Container' 
// Thes will resemble CSS a bit using the `backticks: to-contain;` our style rules.
const Container = styled.div`
    display: flex;
`;


const Pane = styled.div`
    display: flex;
    flex: ${props => props.weight}; 
    justify-content: center;
`;

export const SplitScreen = ({ 
    // create props
    children,
    leftWeight = 1,
    rightWeight = 1,
    dateWeight = 1,
}) => {
    const [left, right, date] = children;
    return(
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
            <Pane weight={dateWeight}>
                {date}
            </Pane>
        </Container>
    );
}