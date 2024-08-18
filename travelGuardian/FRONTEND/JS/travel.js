/*

// THIS IS A CONCEPT PROTOTYPE OF A SAFTEY TRAVELLING WEBSITE 
// ITS PRIORITY IS TO MAKE YOU INFORMED OF THE CURRENT STATE OF A COUNTRY
// MAY IT FOR YOU TO AVOID ANY HEALTH PROBLEMS OR COMPLICATIONS
// OR FOR YOUR GENERAL SAFETY AND BUDGET 


// ALL THE USED DATA BELOW ARE RESEARCHED
// DUE TO API LIMITATIONS A LOCAL DATABASE IS USED
// SOURCES: WORLDBANK.ORG, NUMBEO

*/
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const resultsContainer = document.querySelector('.results-container');
const results = document.querySelector('.results');

searchBtn.addEventListener('click', () => {
    const country = searchBar.value.trim();
    if (infoData[country]) {
        resultsContainer.style.display = 'block';
        results.innerHTML = ''; 

        setTimeout(() => {
            const data = infoData[country];
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <div class="info">
                    <h2>${country}</h2>
                    <h2> General Information </h2>
                    <p>Temperature: ${data.temperature}</p>
                    <p>Weather: ${data.weather}</p>
                    <h2> Security Information </h2>
                    <p>Danger Levels: ${data.dangerLevels}</p>
                    <p>Inflation Rate: ${data.inflationRate}</p>
                    <p>Restrictions: ${data.restrictions}</p>
                    <p>Dangerous News: ${data.dangerousNews}</p>
                    <h2> Pollution Information </h2>
                    <p>Air Pollution: ${data.airPollution}</p>
                    <p>Land Pollution: ${data.landPollution}</p>
                    <p>Water Pollution: ${data.waterPollution}</p>
                    <h2> Other Information </h2>
                    <p>Ratings: ${data.ratings}</p>
                    <p>Expensiveness: ${data.expensiveness}</p>
                </div>
            `;
            results.appendChild(resultItem);
        }, 300); 
    } else {
        resultsContainer.style.display = 'block';
        results.innerHTML = ''; 

        setTimeout(() => {
            const data = infoData[country];
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <div class="info">
                    <h2>No data have been Found</h2>
                    <p> Please Check for spelling </p>
                    <p> Use Capital for the First letter of the country Eg. "Canada" </p>
                </div>
            `;
            results.appendChild(resultItem);
        }, 300); 
    }
});

//NOT ALL COUNTRIES ARE ADDED DUE TO LACK OF RESOURCES AND FILE CAPACITY 

const infoData = {
    "United States": {
        "temperature": "15°C",
        "weather": "Clear",
        "dangerLevels": "Moderate",
        "inflationRate": "3.1%",
        "restrictions": "Travel restrictions apply",
        "dangerousNews": "Recent protests in major cities",
        "airPollution": "60 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.5/5",
        "expensiveness": "High"
    },
    "Canada": {
        "temperature": "-5°C",
        "weather": "Snowy",
        "dangerLevels": "Low",
        "inflationRate": "2.8%",
        "restrictions": "None",
        "dangerousNews": "Occasional wildlife encounters in rural areas",
        "airPollution": "20 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Low",
        "ratings": "4.7/5",
        "expensiveness": "High"
    },
    "United Kingdom": {
        "temperature": "10°C",
        "weather": "Rainy",
        "dangerLevels": "Moderate",
        "inflationRate": "6.7%",
        "restrictions": "None",
        "dangerousNews": "Political protests in London",
        "airPollution": "50 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.3/5",
        "expensiveness": "High"
    },
    "Germany": {
        "temperature": "5°C",
        "weather": "Cloudy",
        "dangerLevels": "Low",
        "inflationRate": "3.0%",
        "restrictions": "None",
        "dangerousNews": "Peaceful protests over energy policies",
        "airPollution": "40 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.6/5",
        "expensiveness": "Medium"
    },
    "Australia": {
        "temperature": "25°C",
        "weather": "Sunny",
        "dangerLevels": "Low",
        "inflationRate": "4.0%",
        "restrictions": "None",
        "dangerousNews": "Bushfire warnings in some regions",
        "airPollution": "30 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Low",
        "ratings": "4.8/5",
        "expensiveness": "High"
    },
    "Japan": {
        "temperature": "12°C",
        "weather": "Clear",
        "dangerLevels": "Low",
        "inflationRate": "1.2%",
        "restrictions": "None",
        "dangerousNews": "Earthquake warnings",
        "airPollution": "40 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Moderate",
        "ratings": "4.9/5",
        "expensiveness": "High"
    },
    "Brazil": {
        "temperature": "28°C",
        "weather": "Hot",
        "dangerLevels": "High",
        "inflationRate": "5.7%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Crime rates high in urban areas",
        "airPollution": "70 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "3.8/5",
        "expensiveness": "Medium"
    },
    "India": {
        "temperature": "30°C",
        "weather": "Hot",
        "dangerLevels": "Moderate",
        "inflationRate": "4.5%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Political tensions in certain areas",
        "airPollution": "150 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "4.0/5",
        "expensiveness": "Low"
    },
    "Russia": {
        "temperature": "-10°C",
        "weather": "Snowy",
        "dangerLevels": "High",
        "inflationRate": "10.5%",
        "restrictions": "Travel restrictions apply",
        "dangerousNews": "Political unrest and economic sanctions",
        "airPollution": "80 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "High",
        "ratings": "3.5/5",
        "expensiveness": "Medium"
    },
    "China": {
        "temperature": "15°C",
        "weather": "Clear",
        "dangerLevels": "Moderate",
        "inflationRate": "2.2%",
        "restrictions": "Travel restrictions apply",
        "dangerousNews": "Strict government regulations",
        "airPollution": "150 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "4.1/5",
        "expensiveness": "Medium"
    },
    "South Africa": {
        "temperature": "20°C",
        "weather": "Sunny",
        "dangerLevels": "High",
        "inflationRate": "5.5%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "High crime rates in urban areas",
        "airPollution": "40 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "3.7/5",
        "expensiveness": "Low"
    },
    "Mexico": {
        "temperature": "25°C",
        "weather": "Sunny",
        "dangerLevels": "High",
        "inflationRate": "4.8%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Crime and drug-related violence",
        "airPollution": "60 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.2/5",
        "expensiveness": "Medium"
    },
    "Italy": {
        "temperature": "18°C",
        "weather": "Sunny",
        "dangerLevels": "Low",
        "inflationRate": "3.5%",
        "restrictions": "None",
        "dangerousNews": "Occasional strikes and protests",
        "airPollution": "50 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.7/5",
        "expensiveness": "High"
    },
    "France": {
        "temperature": "12°C",
        "weather": "Cloudy",
        "dangerLevels": "Moderate",
        "inflationRate": "4.2%",
        "restrictions": "None",
        "dangerousNews": "Recent protests in major cities",
        "airPollution": "55 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.6/5",
        "expensiveness": "High"
    },
    "Egypt": {
        "temperature": "28°C",
        "weather": "Hot",
        "dangerLevels": "High",
        "inflationRate": "7.8%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Political instability and crime",
        "airPollution": "90 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "3.9/5",
        "expensiveness": "Low"
    },
    "South Africa": {
        "temperature": "20°C",
        "weather": "Variable",
        "dangerLevels": "High",
        "inflationRate": "5.1%",
        "restrictions": "Travel advisories in certain areas",
        "dangerousNews": "High crime rates and political unrest",
        "airPollution": "80 µg/m³",
        "landPollution": "High",
        "waterPollution": "Moderate",
        "ratings": "3.7/5",
        "expensiveness": "Medium"
    },
    "India": {
        "temperature": "35°C",
        "weather": "Hot",
        "dangerLevels": "Moderate",
        "inflationRate": "6.5%",
        "restrictions": "Travel advisories in certain regions",
        "dangerousNews": "Political protests and health concerns",
        "airPollution": "120 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "4.1/5",
        "expensiveness": "Low"
    },
    "Australia": {
        "temperature": "25°C",
        "weather": "Mild",
        "dangerLevels": "Low",
        "inflationRate": "2.8%",
        "restrictions": "Minimal travel restrictions",
        "dangerousNews": "Occasional wildfires and health advisories",
        "airPollution": "40 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.6/5",
        "expensiveness": "High"
    },
    "Mexico": {
        "temperature": "30°C",
        "weather": "Warm",
        "dangerLevels": "Moderate",
        "inflationRate": "4.3%",
        "restrictions": "Travel advisories in specific regions",
        "dangerousNews": "Drug-related violence in certain areas",
        "airPollution": "70 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.0/5",
        "expensiveness": "Medium"
    },
    "Nigeria": {
        "temperature": "27°C",
        "weather": "Tropical",
        "dangerLevels": "High",
        "inflationRate": "18.7%",
        "restrictions": "Travel advisories in certain regions",
        "dangerousNews": "Security concerns and political instability",
        "airPollution": "100 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "3.4/5",
        "expensiveness": "Low"
    },
    "Vietnam": {
        "temperature": "26°C",
        "weather": "Tropical",
        "dangerLevels": "Moderate",
        "inflationRate": "3.3%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Occasional flooding and natural disasters",
        "airPollution": "60 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.1/5",
        "expensiveness": "Medium"
    },
    "Turkey": {
        "temperature": "20°C",
        "weather": "Mild",
        "dangerLevels": "Moderate",
        "inflationRate": "14.6%",
        "restrictions": "Travel advisories in certain regions",
        "dangerousNews": "Occasional political tensions",
        "airPollution": "80 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.0/5",
        "expensiveness": "Medium"
    },
    "Malaysia": {
        "temperature": "28°C",
        "weather": "Tropical",
        "dangerLevels": "Low",
        "inflationRate": "2.9%",
        "restrictions": "Minimal travel restrictions",
        "dangerousNews": "Occasional political protests",
        "airPollution": "55 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.3/5",
        "expensiveness": "Medium"
    },
    "New Zealand": {
        "temperature": "14°C",
        "weather": "Cool",
        "dangerLevels": "Low",
        "inflationRate": "2.7%",
        "restrictions": "Minimal travel restrictions",
        "dangerousNews": "Occasional natural disasters",
        "airPollution": "30 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Low",
        "ratings": "4.7/5",
        "expensiveness": "High"
    },
    "Peru": {
        "temperature": "24°C",
        "weather": "Varied",
        "dangerLevels": "Moderate",
        "inflationRate": "3.5%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Occasional political unrest",
        "airPollution": "65 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.0/5",
        "expensiveness": "Medium"
    },
    "Colombia": {
        "temperature": "26°C",
        "weather": "Tropical",
        "dangerLevels": "Moderate",
        "inflationRate": "4.9%",
        "restrictions": "Travel advisories in specific regions",
        "dangerousNews": "Crime in certain areas",
        "airPollution": "80 µg/m³",
        "landPollution": "High",
        "waterPollution": "Moderate",
        "ratings": "3.9/5",
        "expensiveness": "Medium"
    },
    "Singapore": {
        "temperature": "27°C",
        "weather": "Tropical",
        "dangerLevels": "Low",
        "inflationRate": "1.5%",
        "restrictions": "Minimal travel restrictions",
        "dangerousNews": "Occasional public demonstrations",
        "airPollution": "45 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Low",
        "ratings": "4.6/5",
        "expensiveness": "High"
    },
    "Saudi Arabia": {
        "temperature": "35°C",
        "weather": "Hot",
        "dangerLevels": "Moderate",
        "inflationRate": "2.1%",
        "restrictions": "Travel advisories in some areas",
        "dangerousNews": "Political tensions and security issues",
        "airPollution": "95 µg/m³",
        "landPollution": "High",
        "waterPollution": "Low",
        "ratings": "3.7/5",
        "expensiveness": "Medium"
    },
    "Portugal": {
        "temperature": "18°C",
        "weather": "Mild",
        "dangerLevels": "Low",
        "inflationRate": "0.9%",
        "restrictions": "Minimal travel restrictions",
        "dangerousNews": "Occasional political protests",
        "airPollution": "40 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Low",
        "ratings": "4.4/5",
        "expensiveness": "Medium"
    },
    "Argentina": {
    "temperature": "22°C",
    "weather": "Warm",
    "dangerLevels": "Moderate",
    "inflationRate": "25.6%",
    "restrictions": "Some regions have travel advisories",
    "dangerousNews": "Economic instability and protests",
    "airPollution": "70 µg/m³",
    "landPollution": "Moderate",
    "waterPollution": "High",
    "ratings": "4.0/5",
    "expensiveness": "Medium"
    },
    "Indonesia": {
        "temperature": "30°C",
        "weather": "Tropical",
        "dangerLevels": "Moderate",
        "inflationRate": "3.2%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Volcanic activity and natural disasters",
        "airPollution": "85 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "4.2/5",
        "expensiveness": "Low"
    },
    "Thailand": {
        "temperature": "32°C",
        "weather": "Hot",
        "dangerLevels": "Moderate",
        "inflationRate": "2.9%",
        "restrictions": "None",
        "dangerousNews": "Occasional political protests",
        "airPollution": "60 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.4/5",
        "expensiveness": "Low"
    },
    "Kenya": {
        "temperature": "25°C",
        "weather": "Sunny",
        "dangerLevels": "High",
        "inflationRate": "6.3%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Political unrest and crime in urban areas",
        "airPollution": "75 µg/m³",
        "landPollution": "High",
        "waterPollution": "Moderate",
        "ratings": "3.6/5",
        "expensiveness": "Low"
    },
    "Norway": {
        "temperature": "10°C",
        "weather": "Cold",
        "dangerLevels": "Low",
        "inflationRate": "1.8%",
        "restrictions": "None",
        "dangerousNews": "Occasional natural disasters",
        "airPollution": "20 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Low",
        "ratings": "4.9/5",
        "expensiveness": "High"
    },
    "Spain": {
        "temperature": "20°C",
        "weather": "Sunny",
        "dangerLevels": "Low",
        "inflationRate": "3.3%",
        "restrictions": "None",
        "dangerousNews": "Occasional protests",
        "airPollution": "45 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.5/5",
        "expensiveness": "Medium"
    },
    "Greece": {
        "temperature": "24°C",
        "weather": "Mild",
        "dangerLevels": "Moderate",
        "inflationRate": "4.1%",
        "restrictions": "None",
        "dangerousNews": "Occasional strikes and protests",
        "airPollution": "50 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Low",
        "ratings": "4.3/5",
        "expensiveness": "Medium"
    },
    "Chile": {
        "temperature": "18°C",
        "weather": "Mild",
        "dangerLevels": "Moderate",
        "inflationRate": "3.5%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Political unrest and protests",
        "airPollution": "65 µg/m³",
        "landPollution": "Moderate",
        "waterPollution": "Moderate",
        "ratings": "4.0/5",
        "expensiveness": "Medium"
    },
    "Sweden": {
        "temperature": "8°C",
        "weather": "Cold",
        "dangerLevels": "Low",
        "inflationRate": "1.9%",
        "restrictions": "None",
        "dangerousNews": "Occasional natural disasters",
        "airPollution": "25 µg/m³",
        "landPollution": "Low",
        "waterPollution": "Low",
        "ratings": "4.7/5",
        "expensiveness": "High"
    },
    "Philippines": {
        "temperature": "29°C",
        "weather": "Tropical",
        "dangerLevels": "High",
        "inflationRate": "4.1%",
        "restrictions": "Some regions have travel advisories",
        "dangerousNews": "Natural disasters and political unrest",
        "airPollution": "95 µg/m³",
        "landPollution": "High",
        "waterPollution": "High",
        "ratings": "3.5/5",
        "expensiveness": "Low"
    }
}
        


