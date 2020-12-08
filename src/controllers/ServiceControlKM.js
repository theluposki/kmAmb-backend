const controlKMRepository = require('../repositories/ServiceControlKM')

/** buscar um serviço por id */
exports.findOneId = async (req, res) => {
    try {
        const service = await controlKMRepository.findOneId(req.params.id)
        res.status(200).json({ service })
    } catch (e) {
        res.status(400).json({ error: `erro ao deletar o usuário > [${e}]`})
    }
}

/**CREATE */
exports.create = async (req, res) => {
    try {
       const service = await controlKMRepository.create(req.body)
       res.status(201).json({ service })
    } catch (e) {
        res.status(400).json({
            error: `erro ao criar o serviço > [${e}]`
        })
    }
}
/** READ */
exports.findAll = async (req, res) => {
    try {
       const services = await controlKMRepository.find()
       res.status(200).json({ services })
    } catch (e) {
        res.status(400).json({
            error: `erro ao buscar os Serviços> [${e}]`
        })
    }
}

/** UPDATE */
exports.update = async (req, res) => {
    try {
        const service = await controlKMRepository.update(req.params.id, req.body)

        res.status(200).json({ service })
    } catch (e) {
        res.status(400).json({ error: `Ouve um erro ao atualizar o serviço > [${e}]` })
    }
}

/** DELETE */

exports.delete = async (req, res) => {
    try {
        await controlKMRepository.delete(req.params.id)
        res.status(200).json({ message: 'Deletado com sucesso.' })
    } catch (e) {
        res.status(400).json({ error: `Erro ao deletar serviço.  > [${e}]`})
    }
}