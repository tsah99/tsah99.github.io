import Body from "../components/Body";
import Header from "../components/Header";

function App() {
  return (
    <div className="flex flex-col mx-auto w-auto items-center max-w-[36rem] md:w-[36rem] md:max-w-auto md:mx-auto min-w-[24rem] pb-12">  
      <Header />
      <Body />
    </div>
  );
}

export default App;
