import axios from "axios";

const guardarEstudiante = async (body) => {
  
 
  const data = await axios
    .post(`http://localhost:8081/API/v1.0/Inscripcion/estudiantes`,body).then((r) => r.data);

     return data;
};

export const guardarEstudianteFachada = async (body) => {
  return await guardarEstudiante(body);
};


export const obtenerTokenFachada = async (user) => {
  return await obtenerToken(user);
}

const obtenerToken = async (user) => {
  const data = axios.post(`http://localhost:8082/API/v1.0/seguridad/autorizaciones/jwt`,user).then(r => r.data);
  return data;
}