import { object, string, mixed } from "yup";

let userSchema = object({
    fullname: string().required("Debes ingresar un nombre"),
    phone: mixed().required("debes ingresar un telefono"),
    email: string().email().required("debes ingresar un email")
})

const validateForm = async (dataForm) => {

    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", message: error.message }
    }

}

export default validateForm