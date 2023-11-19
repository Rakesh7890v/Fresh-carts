import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Recommendation = ({incomes, parsedLimits, balance, onSaveRecommendation }) => {

  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();
    
  useEffect(() => {

    let utilities = parsedLimits.utilities;
    let shopping = parsedLimits.shopping;
    let food = parsedLimits.food;
    let loans = parsedLimits.loans;
    let phone = parsedLimits.phone;
    let others = parsedLimits.others;

    let UtilitiesLimit;
    let ShoppingLimit;
    let FoodLimit;
    let LoansLimit;
    let PhoneLimit;
    let OtherLimit;
    
    let percentage1 = 0;
    let percentage2 = 0;
    let percentage3 = 0;
    let percentage4 = 0;
    let percentage5 = 0;
    let percentage6 = 0;

    let balance1 = 0;
    let balance2 = 0;
    let balance3 = 0;
    let balance4 = 0;
    let balance5 = 0;
    let balance6 = 0;

    let utility;
    let foods;
    let shop;
    let loan;
    let phones;
    let other;

    let small = 800;
    let medium = 1000;
    let big = 1500;

    if (utilities >= 5000 && utilities <= 6000) {
      UtilitiesLimit = utilities - small;
      console.log(UtilitiesLimit);
    } else if (utilities >= 6000 && utilities <= 7000) {
      UtilitiesLimit = utilities - medium;
            console.log(UtilitiesLimit);
    } else if (utilities >=7000) {
      UtilitiesLimit = utilities - big;
            console.log(UtilitiesLimit);

    } else {
      UtilitiesLimit = utilities;
    }

    if (shopping >= 4000 && shopping <= 5000) {
      ShoppingLimit = shopping - small;
    } else if (shopping >= 5000 && shopping <= 6000) {
      ShoppingLimit = shopping - medium;
    } else if (shopping >= 7000) {
      ShoppingLimit = shopping - big;
    } else {
      ShoppingLimit = shopping;
    }

    if (food >= 7000 && food <= 7500) {
      FoodLimit = food - small;
    } else if (food >= 7000 && food <= 9000) {
      FoodLimit = food - medium;
    } else if (food >= 9000) {
      FoodLimit = food - big;
    } else {
      FoodLimit = food;
    }

    if (loans >= 2000 && loans <=2500) {
      LoansLimit = loans - small;
    } else if (loans >= 2500 && loans <= 4000) {
      LoansLimit = loans - medium;
    } else if (loans >=4000) {
      LoansLimit = loans - big;
    } else {
      LoansLimit = loans;
    }

    if (phone <= 2000 && phone >=3000) {
      PhoneLimit = phone - small;
    } else if (phone <= 3000 && phone >= 4000) {
      PhoneLimit = phone - medium;
    } else if (phone >=4000) {
      PhoneLimit = phone - big;
    } else {
      PhoneLimit = phone;
    }

    if (others <= 2000 && others >=3000) {
      OtherLimit = others - small;
    } else if (others <= 3000 && others >= 4000) {
      OtherLimit = others - medium;
    } else if (others >= 4000) {
      OtherLimit = others - big;
    } else {
      OtherLimit = others;
    }

    const reduce1 = () => {
      utility = parsedLimits.utilities - UtilitiesLimit;
      foods = parsedLimits.food - FoodLimit;
      balance1 = balance + utility + foods;
      percentage1 = ((balance1 / incomes.income) * 100).toFixed(2);
    }
    const reduce2 = () => {
      shop = parsedLimits.shopping - ShoppingLimit;
      loan = parsedLimits.loans - LoansLimit;
      balance2 = balance + shop + loan;
      percentage2 = ((balance2 / incomes.income) * 100).toFixed(2);
    }
    const reduce3 = () => {
      phones = parsedLimits.phone - PhoneLimit;
      other = parsedLimits.others - others;
      utility = parsedLimits.utilities - UtilitiesLimit;
      balance3 = balance + phones + other + utility;
      percentage3 = ((balance3 / incomes.income) * 100).toFixed(2);
    }
    const reduce4 = () => {
      shop = parsedLimits.shopping - ShoppingLimit;
      utility = parsedLimits.utilities - UtilitiesLimit;
      foods = parsedLimits.food - FoodLimit;
      balance4 = balance + utility + foods + shop;
      percentage4 = ((balance4 / incomes.income) * 100).toFixed(2);
    }
    const reduce5 = () => {
      other = parsedLimits.others - others;
      phones = parsedLimits.phone - PhoneLimit;
      loan = parsedLimits.loans - LoansLimit;
      balance5 = balance + other + phones + loan;
      percentage5 = ((balance5 / incomes.income) * 100).toFixed(2);
    }
    const reduce6 = () => {
      foods = parsedLimits.food - FoodLimit;
      phones = parsedLimits.phone - PhoneLimit;
      loan = parsedLimits.loans - LoansLimit;
      balance6 = balance + foods + phones + loan;
      percentage6 = ((balance6 / incomes.income) * 100).toFixed(2);
    }

    reduce1 ();
    reduce2 ();
    reduce3 ();
    reduce4 ();
    reduce5 ();
    reduce6 ();

    setRecommendations([{
        id: 1,
        UtilitiesLimit,
        FoodLimit,
        balance: balance1,
        percentage: percentage1
      },
      {
        id: 2,
        ShoppingLimit,
        LoansLimit,
        balance: balance2,
        percentage: percentage2
      },
      {
        id: 3,
        PhoneLimit,
        OtherLimit,
        UtilitiesLimit,
        balance: balance3,
        percentage: percentage3
      },
      {
        id: 4,
        ShoppingLimit,
        UtilitiesLimit,
        FoodLimit,
        balance: balance4,
        percentage: percentage4
      },
      {
        id: 5,
        OtherLimit,
        PhoneLimit,
        LoansLimit,
        balance: balance5,
        percentage: percentage5
      },
      {
        id: 6,
        FoodLimit,
        PhoneLimit,
        LoansLimit,
        balance: balance6,
        percentage: percentage6
      }
    ])

  },[incomes, parsedLimits, balance, recommendations]);
  

  const handleSave = (id) => {
    const selectedRecommendation = recommendations.find(recommendation => recommendation.id === id);
    onSaveRecommendation(selectedRecommendation);
    navigate('/profile');
  }

  return (
    <div>
      <div className="command">
        <p><b>Note: </b>You have to choose any one which will be suitable for increase your savings. Just click the save it will move on to the your profile. if you want to change the recommendation in profile means you have to click required recommendation it will save to your profile.</p>
      </div>
        <div className="recommendation-container">
            {recommendations && recommendations.map (recommendation => <div className="recommended" key={recommendation.id}>
                <div className="reduce-expense">
                   <div className="reduce-limits">  
                      {recommendation.UtilitiesLimit && <p>Utilities: {isNaN(recommendation.UtilitiesLimit) ? 0 : recommendation.UtilitiesLimit}</p>}
                      {recommendation.FoodLimit && <p>Food: {isNaN(recommendation.FoodLimit) ? 0 :recommendation.FoodLimit}</p>}
                      {recommendation.PhoneLimit && <p>Phone: {isNaN(recommendation.PhoneLimit) ? 0 : recommendation.PhoneLimit}</p>}
                      {recommendation.ShoppingLimit && <p>Shopping: {isNaN(recommendation.ShoppingLimit) ? 0 : recommendation.ShoppingLimit}</p>}
                      {recommendation.LoansLimit && <p>Loan: {isNaN(recommendation.LoansLimit) ? 0 : recommendation.LoansLimit}</p>}
                      {recommendation.OtherLimit && <p>Others: {isNaN(recommendation.OtherLimit) ? 0 : recommendation.OtherLimit}</p>}
                      {recommendation.balance && <b>Balance: {isNaN(recommendation.balance) ? 0 : recommendation.balance}</b>}
                      <button onClick={() => handleSave(recommendation.id)}>Save</button>  
                   </div>
                </div>
                <div className="percent-circle">
                  <svg>
                    <circle cx='70' cy='70' r='70'></circle>
                    <circle cx='70' cy='70' r='70' style={{strokeDashoffset: `calc(440 - (440 * ${isNaN(recommendation.percentage) ? 0 : recommendation.percentage}) / 100)`}}></circle>
                  </svg>
                  <div className="percentage-center">
                    <p>{isNaN(recommendation.percentage) ? 0 : recommendation.percentage}<span>%</span></p>
                  </div>
                </div>
            </div>)}

        </div>
    </div>
  )
}

export default Recommendation