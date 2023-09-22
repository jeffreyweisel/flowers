export const FlowersInNurseries = async () => {
    const response = await fetch("http://localhost:8088/nurseryFlowers?_expand=flower&_expand=nursery") 
    const nurseryFlowers = await response.json()

    return nurseryFlowers
}

export const nurseries = async () => {
    const fetchResponse = await fetch("http://localhost:8088/nurseries")
    const nurseries =  await fetchResponse.json()

    return nurseries
}

