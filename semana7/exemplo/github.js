// const url = 'https://api.github.com/users/heloisebastos/repos'

// const response = fetch(url).then(res => console.log(res))

const pegaDados = (user) => {
    fetch(`https://api.github.com/users/${user}/repos`)
        .then((res) => {
            return res.json()
            //console.log(res)
        })
        .then(repos => console.log(repos))
}

pegaDados('heloisebastos')