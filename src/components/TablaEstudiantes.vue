<template>
  <table >
  <thead>
    <th>Id</th>
    <th>nombre</th>
    <th>Apellido</th>
    <th>Cedula</th>
  </thead>
  <tbody>
    <div v-for="estudiante in lista" :key="estudiante.id">
    <td >{{estudiante.id}}</td>
    <td>{{estudiante.nombre}}</td>
    <td>{{estudiante.apellido}}</td>
    <td>{{estudiante.cedula}}</td>


    </div>
  </tbody>
</table>
</template>

<script>
export default {
data(){
 return{
    lista:this.estu
 };
},
props:{
    estu:{
        type: Array,  
        default:null  
    }
}
}
</script>

<style>
table{
  display: flex;
  align-content: center;
  justify-content: center;
}
th,td{
  border: 1px solid;
}
</style>