import logo from './logo.svg';
import Header from './component/Header';
import Footer from './component/Footer';
// import Title from './component/Title';
function App() {
  let a = 10;
  return (
    <>
      <Header a ={a} />
      <Footer/>
    </>
  );
}

export default App;
