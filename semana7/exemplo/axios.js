import axios from 'axios'

async function getRepositories(user) {

    try {
        const response = await axios.get(`https://api.github.com/users/${user}/repos`)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

getRepositories('heloisebastos28')