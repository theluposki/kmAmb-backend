const UserRepository = require('../repositories/User.js')

exports.findAll = async (req, res) => {
    try {
       const users = await UserRepository.find()
       res.status(200).json({ users })
    } catch (e) {
        res.status(400).json({
            error: `erro ao buscar os usuários > [${e}]`
        })
    }
}

exports.findOneId = (req, res) => {
    res.status(200).json({ id: req.params.id })
}

exports.register = async (req, res) => {
    
    try {
        const user = await UserRepository.register(req.body)
        res.status(200).json({ user })
    } catch (e) {
       res.status(400).json({
           error: `error ao criar usuário > [${e}]`
       })
    }
}

exports.auth = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserRepository.auth(email,password)
        res.status(200).json({ user })
    } catch (e) {
        res.status(400).send({ 
            error: `Ouve um erro ao se autenticar,
                   verifique se os dados estão corretos,
                   e tente novamente.
                   > [${e}]
                   ` 
        })
    }    
}

exports.update = async (req, res) => {
    try {
        const user = await UserRepository.update(req.params.id, req.body)

        res.status(200).json({ user })
    } catch (e) {
        res.status(400).json({ error: `Ouve um erro ao atualizar usuário > [${e}]` })
    }
}

exports.delete = async (req, res) => {
    try {
        await UserRepository.delete(req.params.id)
        res.status(200).json({ message: 'Deletado com sucesso.' })
    } catch (e) {
        res.status(400).json({ error: `Erro ao deletar usuário.  > [${e}]`})
    }
}
