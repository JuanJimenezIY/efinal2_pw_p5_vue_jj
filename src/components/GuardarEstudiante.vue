<template>
  <h1>ESTUDIANTE</h1>
  <div class="form">
      <p type="Token: ">
        <input :token="token" type="text" placeholder="Token"/>
      </p>
    
      <p type="Nombre:">
        <input :nombre="nombre" type="text" placeholder="Nombre" />
      </p>
      <p type="Apellido:">
        <input :apellido="apellido" type="text" placeholder="Apellido"/>
      </p>
    
       <p type="Cedula:">
        <input :cedula="cedula" type="text" placeholder="Cedula"/>
      </p>
  
     


   
    </div> 


</template>

<script>



export default {
  props:{

        token:{
            type: Array,
      default: null,
        },
          nombre:{
            type: Array,
      default: null,
        },
          cedula:{
            type: Array,
      default: null,
        },
          apellido:{
            type: Array,
      default: null,
        },
  },

        data(){
        return{
           
        }
    },


}
</script>

<style>

</style>