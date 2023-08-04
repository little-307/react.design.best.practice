import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'lightblue', padding: '10px'  }}>{name}</h1>;
}

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: 'coral', padding: '10px'  }}>{message} !</h1>;
}

const today = new Date().toLocaleDateString();
console.log(today)

const Today = ({ date }) => {
  return <h1 style={{ backgroundColor: 'lightgreen', padding: '10px' }}>{date}</h1>
}


function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3} dateWeight={1}>
      <LeftHandComponent name="Trevor"/>
      <RightHandComponent message="Hello there"/>
      <Today date={today} />
    </SplitScreen>
  );
}

export default App;
