import stockServices from '../Services/stock.services.js'

export const getStock = async (req, res, next)=>{
    try {
        const dataStock = await stockServices.getAll()
        res.status(200).json({
            data: dataStock
        })
    } catch (error) {
        next(error)  
        throw error 
    }
}


export const createStock = async (req, res, next)=>{
    
    const {stock, type, created_at} = req.body

    try {
        const obj = {
            stock,
            available: stock,
            type,
            created_at
        }
        const newRegister = await stockServices.insert(obj)
        res.status(201).json('Sucessfull')
    } catch (error) {
        console.log(error)
        throw error
    }

}
