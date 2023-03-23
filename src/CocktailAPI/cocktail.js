import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

async function cocktailAPI(method, payload, endpointURL) {
    if (method === "POST" || method === "PUT" || method === "PATCH") {
        const response = await fetch(`${API_URL}/${endpointURL}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("access_token"),
            },
            body: JSON.stringify(payload),
        });
        return response;
    } else if (method === "GET" || method === "DELETE") {
        const response = await fetch(`${API_URL}/${endpointURL}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }
}

export async function getCategories() {
    const url = `list.php?a=list`
    const drinkCategoriesResponse = await cocktailAPI('GET', null, url)
    const drinkCategories = await drinkCategoriesResponse.json()
    return drinkCategories
}

export async function getDrinksByFilter(drinkType) {
    const url = `filter.php?a=${drinkType}`
    const drinksResponse = await cocktailAPI('GET', null, url)
    const drinks = await drinksResponse.json()
    return drinks
}

export async function getDrinkDetails(drinkId) {
    const url = `lookup.php?i=${drinkId}`
    const drinkDetailsResponse = await cocktailAPI('GET', null, url)
    const drinkDetails = await drinkDetailsResponse.json()
    return drinkDetails
}

export async function getDrinksBySearch(searchTerm) {
    const url = `search.php?s=${searchTerm}`
    const drinksResponse = await cocktailAPI('GET', null, url)
    const drinks = await drinksResponse.json()
    return drinks
}

export async function getRandomDrinks(n) {
    const url = `random.php`
    const randomDrinks = []
    for (let i = 0; i < n; i++) {
        const drinksRsponse = await cocktailAPI('GET', null, url)
        const drinks = await drinksRsponse.json()
        randomDrinks.push(drinks)
    }
    return randomDrinks
}


export async function getAllDrinks() {
    const url = `search.php?s=`
    const drinksResponse = await cocktailAPI('GET', null, url)
    const drinks = await drinksResponse.json()
    return drinks
}