import userServices from "../Services/user.services.js";
import { nameAndFirstname } from "../utils/nameAndFirstname.js";
import bcrypt from "bcryptjs"

export const getUsers  = async (req, res, next)=>{
    try {
     const users = await userServices.getAll();
     res.status(200).json({data:
        users});
    } catch (error) {
        throw error
    }
} 

export const createUser = async (req, res, next)=>{
    try {
        let {id, firstname, surname, email, password, costcenter } = req.body
        const responseNames = await nameAndFirstname(firstname)
        const responseSurnames = await nameAndFirstname(surname)
        const responseCostcenter = await nameAndFirstname(costcenter)
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);


        const  registerUser = await userServices.insert({
            id,
            firstname: responseNames.split(' ')[0],
            secondname: responseNames.split(' ')[1],
            surname: responseSurnames.split(' ')[0],
            secondsurname: responseSurnames.split(' ')[1],
            email, 
            password: hashPassword,
            costcenter: responseCostcenter
        })
        res.status(201).json("Sucessfull")
    } catch (error) {
        res.status(208).json(error)
        next(error)
    }
}

export const userId = async (req, res, next)=>{
    try {
        let { id } = req.params
        id = parseInt(id, 10)
        const searchUserId = await userServices.getById(id)
        searchUserId === null ? res.json({message: 'User does not exist'}):res.status(200).json(searchUserId)
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next)=>{

    const { id } = req.params
    const idNumber =  parseInt(id, 10)
    const searchUserId = await userServices.getById(idNumber)
    const { newPassword, email } = req.body


    searchUserId != undefined
        ?
            bcrypt.compare(req.body.currentPassword, searchUserId.password, async function(err, response){
        
                if(response && newPassword){
                        const salt = bcrypt.genSaltSync(10);
                        const hashPassword = bcrypt.hashSync(newPassword, salt);
                    
                        const obj = {
                            email,
                            password: hashPassword,
                        }
                        try {
                            const user = await userServices.update(idNumber, obj);
                            res.status(200).json('update user')
                        } catch (error) {
                            res.status(208).json(error)
                            next(error)
                        }
                        
                }else{
                    res.json('Valide su Contraseña Actual')
                }
            })
        :
        res.json({message: 'User does not exist'})
    
}