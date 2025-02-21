import './App.css';
import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './assets/AppRoutes';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
