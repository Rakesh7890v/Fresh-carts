import Header from './Header';
import Home from './Home';
import Input from './Input';
import Profile from './Profile'
import {Route, Routes} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Recommendation from './Recommendation';
import About from './About';

function App() {

  const [incomes, setIncomes] = useState({income:''})
  const [limits, setLimits] = useState({
    health: '', shopping: '', family: '', transportation: '',
    food: '', loans: '',insurance: '',phone: '',utilities: '',
    others: ''
  })

  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const handleSaveRecommendation = (selectedRecommendation) => {
    setSelectedRecommendation(selectedRecommendation);

    localStorage.setItem('selectedRecommendation', JSON.stringify(selectedRecommendation));
  }

  useEffect(() => {

    const storedSelectedRecommendation = localStorage.getItem('selectedRecommendation');
    if (storedSelectedRecommendation) {
      setSelectedRecommendation(JSON.parse(storedSelectedRecommendation));
    }

    const storedIncome = localStorage.getItem('income');
    if (storedIncome) {
      setIncomes({income: storedIncome});
    }

    Object.keys(limits).forEach((key) => {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setLimits((prevLimits) => ({...prevLimits, [key]: storedValue}));
      }
    })
  }, [limits]);
  
  const handleInputChange =(e) => {
    const {name, value} = e.target;
    if (name === 'income') {
      setIncomes({income: value});
      localStorage.setItem('income', value);
    } else {
      setLimits((prevLimits) => ({...prevLimits, [name]: value}));
      localStorage.setItem(name,value);
    }
  };

  const parsedLimits = {
    ...limits,
    health: parseInt(limits.health, 10),
    shopping: parseInt(limits.shopping, 10),
    family: parseInt(limits.family, 10),
    transportation: parseInt(limits.transportation, 10),
    food: parseInt(limits.food, 10),
    loans: parseInt(limits.loans, 10),
    insurance: parseInt(limits.insurance, 10),
    phone: parseInt(limits.phone, 10),
    utilities: parseInt(limits.utilities, 10),
    others: parseInt(limits.others, 10)
  };
  const parsedIncome = { ...incomes, income: parseInt(incomes.income, 10)}

  const totalLimits = Object.values(parsedLimits).reduce((acc, value) => acc + value ,0)
  const totalIncome = Object.values(parsedIncome).reduce((acc, value) => acc + value ,0)
  const balance = totalIncome - totalLimits;

  return (
    <div className="App">
      <Header/>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/input' element={<Input limits={limits} incomes={incomes} handleInputChange={handleInputChange} />}/>
          <Route path='/profile' element={<Profile limits={limits} incomes={incomes} balance={balance} selectedRecommendation={selectedRecommendation} />}/>
          <Route path='/recommendation' element={<Recommendation incomes={incomes} parsedLimits={parsedLimits} balance={balance} onSaveRecommendation={handleSaveRecommendation} />}/>
          <Route path='/about' element={<About />}/>
          </Routes>
    </div>
  );
}

export default App;
