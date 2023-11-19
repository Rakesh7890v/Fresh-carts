import React from 'react';
import balanceamt from './images/balance.png';

const Profile = ({limits, incomes,balance, selectedRecommendation}) => {

  const percentage = ((balance / incomes.income) * 100).toFixed(2);
  return (
    <div>
       <div className='profile-container'>
          {incomes.income && <div className="profile-detail">
            <table className='profile-table'>
              <thead>
                <tr>
                  <th><h3>Monthly Income</h3></th>
                  <th><p>Health</p></th>
                  <th><p>Shopping</p></th>
                  <th><p>Family</p></th>
                  <th><p>Transportation</p></th>
                  <th><p>Food</p></th>
                  <th><p>Loans</p></th>
                  <th><p>Insurance</p></th>
                  <th><p>Phone</p></th>
                  <th><p>Utilities</p></th>
                  <th><p>Others</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h3>{incomes.income}</h3></td>
                  <td><p>{limits.health}</p></td>
                  <td><p>{limits.shopping}</p></td>
                  <td><p>{limits.family}</p></td>
                  <td><p>{limits.transportation}</p></td>
                  <td><p>{limits.food}</p></td>
                  <td><p>{limits.loans}</p></td>
                  <td><p>{limits.insurance}</p></td>
                  <td><p>{limits.phone}</p></td>
                  <td><p>{limits.utilities}</p></td>
                  <td><p>{limits.others}</p></td>
                </tr> 
              </tbody> 
            </table>
          </div>}

          <div className="balance-savings">

          <div className="profile-balance">
            <img src={balanceamt} alt='balance-amount-icons'></img>
            <div className="percentage">
              <h2>Balance Amount</h2>
              <p>${isNaN(balance) ? 0 : balance}</p>
              <div className="percent-circle">
                <svg>
                  <circle cx='70' cy='70' r='70'></circle>
                  <circle cx='70' cy='70' r='70' style={{strokeDashoffset: `calc(440 - (440 * ${isNaN(percentage) ? 0 : percentage}) / 100)`}}></circle>
                </svg>
                <div className="percentage-center">
                  <h2>{isNaN(percentage) ? 0 :percentage}<span>%</span></h2>
                </div>
              </div>
            </div>
          </div>

          {selectedRecommendation && <div className="recommended" key={selectedRecommendation.id}>
                <div className="reduce-expense">
                   <h4>Excess Cost:</h4>
                   <div className="reduce-limits">
                      {selectedRecommendation.UtilitiesLimit && <p>Utilities: {isNaN(selectedRecommendation.UtilitiesLimit) ? 0 : selectedRecommendation.UtilitiesLimit}</p>}
                      {selectedRecommendation.FoodLimit && <p>Food: {isNaN(selectedRecommendation.FoodLimit) ? 0 :selectedRecommendation.FoodLimit}</p>}
                      {selectedRecommendation.PhoneLimit && <p>Phone: {isNaN(selectedRecommendation.PhoneLimit) ? 0 : selectedRecommendation.PhoneLimit}</p>}
                      {selectedRecommendation.ShoppingLimit && <p>Shopping: {isNaN(selectedRecommendation.ShoppingLimit) ? 0 : selectedRecommendation.ShoppingLimit}</p>}
                      {selectedRecommendation.LoansLimit && <p>Loan: {isNaN(selectedRecommendation.LoansLimit) ? 0 : selectedRecommendation.LoansLimit}</p>}
                      {selectedRecommendation.OtherLimit && <p>Others: {isNaN(selectedRecommendation.OtherLimit) ? 0 : selectedRecommendation.OtherLimit}</p>}
                      {selectedRecommendation.balance && <b>Balance: {isNaN(selectedRecommendation.balance) ? 0 : selectedRecommendation.balance}</b>}
                   </div>
                </div>
                <div className="percent-circle">
                  <svg>
                    <circle cx='70' cy='70' r='70'></circle>
                    <circle cx='70' cy='70' r='70' style={{strokeDashoffset: `calc(440 - (440 * ${isNaN(selectedRecommendation.percentage) ? 0 : selectedRecommendation.percentage}) / 100)`}}></circle>
                  </svg>
                  <div className="percentage-center">
                    <p>{isNaN(selectedRecommendation.percentage) ? 0 : selectedRecommendation.percentage}<span>%</span></p>
                  </div>
                </div>
            </div>}

          </div>  

       </div>
    </div>
  )
}

export default Profile