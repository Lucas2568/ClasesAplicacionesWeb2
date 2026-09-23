export {middleClave}
const clave = "1234"
const middleClave = (req, res, next) => {

     if (req.body.clave === clave) {
        next()
     }else {
        console.log("Clave incorrecta")
        res.status(403).json({"Error:": "Clave incorrecta"})
     }
};