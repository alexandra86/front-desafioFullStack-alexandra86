import * as yup from "yup";

export const editClientSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, "O nome precisa ter pelo menos 3 caracteres.")
      .max(127, "O nome pode ter no máximo 127 caracteres."),
    email: yup.string().email("É necessário fornecer um email válido."),
    phone: yup.string(),
    image: yup.string(),
    gender: yup.string(),
  })
  .default((_, previousValue) => previousValue);
