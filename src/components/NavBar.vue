<template>
  <div>
    <router-link to="/generarToken">Generar Token</router-link>
    <router-link to="/ingresar">Guardar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div a{

    color: #353b2f;
    margin: 0px 20px ;
    font-weight: bold;
    border: 1px black solid;
    padding: 0px 10px;
    border-radius: 5px;
    background: rgb(156, 203, 214);
}
.router-link-active  {
    background: rgb(172, 49, 49);

}
</style>