import Models from "../models/init-models.js";
const { user, endowment } = Models()

export default class userServices {

    static async getAll (){
        try {
            const dataUser = await user.findAll({
                attributes:{exclude: ['created_at', 'updated_at', 'password', 'administrator']},
                include: [
                    {
                        model: endowment,
                        as: "endowments",
                        attributes: [ 'id', 'type', 'user_id', 'amount' ]
                        
                    }
                ],
            })
            return dataUser
        } catch (error) {
            throw error
        }
    }

    static async getById(id){
        try {
            const userId = await user.findByPk(id,{
                attributes:{exclude: ['created_at', 'updated_at']},
                include: [
                    {
                        model: endowment,
                        as: "endowments",
                        attributes: [ 'id', 'type', 'user_id', 'amount' ]
                        
                    }
                ],
            })
            return userId
        } catch (error) {
            throw error 
        }
    }

    static async insert (obj){
        try {
            const insertUser = await user.create(obj);
            return insertUser;
        }catch (error) {
            const { errors } = error
            if(errors[0].message === 'email must be unique'){
                throw 'El correo ya se encuentra registrado en el Sistema'
            }else if (errors[0].message === 'id must be unique'){
                throw 'El Usuario ya se encuentra registrado en el sistema'
            }
        }
    }

    static async update (id, obj){
        try{
            const userUpdate = await user.update(obj, {where: {id}})
            return userUpdate
        }catch(error){
            const { errors } = error
            if(errors[0].message === 'email must be unique'){
                throw 'El correo ya se encuentra registrado en el Sistema'
            }else if (errors[0].message === 'id must be unique'){
                throw 'El Usuario ya se encuentra registrado'
            }
        }

    }
   
}
