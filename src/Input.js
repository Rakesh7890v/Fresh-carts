import { Link } from "react-router-dom";
const Input = ({incomes, limits, handleInputChange}) => {

  return (
    <div>
        <div className="monthly-income">
            <h4>Monthly Income</h4>
            <input type="text" name='income' placeholder="Monthly Income" value={incomes.income} onChange={handleInputChange}/>
        </div>
        <div className="input-container">
            <div className="inputs">
                <h4>Health</h4>
                <input type='number' name='health' placeholder='Enter Amount' value={limits.health} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Shopping</h4>
                <input type='number' name='shopping' placeholder='Enter Amount' value={limits.shopping} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Family</h4>
                <input type='number' name='family' placeholder='Enter Amount' value={limits.family} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Transportation</h4>
                <input type='number' name='transportation' placeholder='Enter Amount' value={limits.transportation} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Food</h4>
                <input type='number' name='food' placeholder='Enter Amount' value={limits.food} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Loans</h4>
                <input type='number' name='loans' placeholder='Enter Amount' value={limits.loans} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Insurance</h4>
                <input type='number' name='insurance' placeholder='Enter Amount' value={limits.insurance} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Phone</h4>
                <input type='number' name='phone' placeholder='Enter Amount' value={limits.phone} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Utilities</h4>
                <input type='number' name='utilities' placeholder='Enter Amount' value={limits.utilities} onChange={handleInputChange}/>
            </div>
            <div className="inputs">
                <h4>Others</h4>
                <input type='number' name='others' placeholder='Enter Amount'value={limits.others} onChange={handleInputChange}/>
            </div>
        </div>
        <Link to='/profile' className='button'>Proceed</Link>
    </div>
  )
}

export default Input