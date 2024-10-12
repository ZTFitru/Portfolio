
export const getProjects = async ()=> {
    const response = await fetch('https://portfolio-api-nu.vercel.app/api/v1/projects')
    if(!response.ok) {
        throw new Error('Bad Network')
    }
    return await response.json()
}