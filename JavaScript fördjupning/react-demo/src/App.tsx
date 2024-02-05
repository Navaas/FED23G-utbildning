import Clock from "./Clock";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header greeting="Hello" name="David" />
      <main
        className="flex bg-green-500  my-3"
        // style={{
        //   display: "flex",
        //   background: "blue",
        // }}
      >
        {/* Inline style, enkelt med daknar stöd för : och Media Queries*/}
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </main>
      <Clock />
      <Footer />
    </>
  );
}

export default App;
