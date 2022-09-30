const url = 'http://localhost:8000'

export const httpRequest = async (endpoint:string, data: object) => {
  const response = await fetch(`${url}/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  return response.json()
}

export const httpGetRequest = async (endpoint:string) => {
  const response = await fetch(`${url}/${endpoint}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  return response.json()
}
