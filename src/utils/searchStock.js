export const searchRegisterSotck = async (register, date, type) => {
    let obj = {}
    await register.filter((e)=>{
        if( e.created_at === date  && e.type === type ){
            return obj = e
        }
    })
    return obj
}
