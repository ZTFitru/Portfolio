
export const getProjects = async ()=> {
    const response = await fetch('http://localhost:3000/api/v1/projects')
    if(!response.ok) {
        throw new Error('Bad Network')
    }
    return await response.json()
}