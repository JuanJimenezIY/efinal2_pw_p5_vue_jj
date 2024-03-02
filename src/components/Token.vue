<template>

  <h1>Token</h1>

  <div class="form">
      <p type="Semilla: ">
        <input v-model="semilla" type="text" placeholder="Semilla"/>
      </p>
     

      <p type="Tiempo de vigencia:">
        <input v-model="vigencia" type="text" placeholder="Tiempo" />
      </p>
      <p type="Token:">
        <input v-model="token" type="text" placeholder="Token"/>
      </p>
  
     <button @click="generarToken">Generar</button>


   
    </div> 


</template>

<script>
export default {
data(){

return{
    estudiante:{


    }
}

},
methods:{

    async generarToken(){
        
    }
}
}
</script>

<style>
p:before {
  content: attr(type);
  display: block;
  text-align: left;
  margin: 3px 2px;
  font-size: 16px;
  color: #5a5a5a;
}

p {
  display: grid;
  justify-content: center;
}
</style>