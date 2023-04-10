const users = [
    {
        nome: 'Rian',
        idade: 17,
        id: 0
    },

    {
        nome: 'Vitor',
        idade: 18,
        id: 1
    },
]

export function fetchUsers(req, res) {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export function getUser(req, res) {
    try {
        const {id} = req.params
        let existingUser

        users.forEach(element => {
            if (element.id == id) {
                existingUser = element
            }
        })

        if (existingUser) {
            res.status(200).send({ user: existingUser })
        } else {
            res.status(404).send({ message: "Usuário não encontrado!" })
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}