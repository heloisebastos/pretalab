console.log('antes da função')
const pegaDados = async (user) => {
    console.log('antes do fetch')
    const response = await fetch(`https://api.github.com/users/${user}/repos`)
    const dataJson = await response.json()
    console.log(dataJson)
}

pegaDados('heloisebastos')