<template>
  <GuardarEstudiante :nombre=nombre :apellido=apellido :cedula=cedula :token=token />

    <button @click="guardarEstudiante()">Guardar</button>
   <TablaEstudiantes :estudiantes="lista"/>
   
</template>

<script>
import TablaEstudiantes from '@/components/TablaEstudiantes.vue'

import GuardarEstudiante from '@/components/GuardarEstudiante.vue'

import { guardarEstudianteFachada } from '@/helpers/clienteEstudiante'

export default {

   
components:{
    TablaEstudiantes,
    GuardarEstudiante
},
data(){
    return{
        lista:[],
        nombre:null,
        apellido:null,
        cedula:null,
        token:null
    }
},
methods:{

         async guardarEstudiante(){
            const body={
                nombre:this.nombre,
                apellido:this.apellido,
                cedula:this.cedula
            };
            const estudiante= await guardarEstudianteFachada(body);

            this.lista.push(body)
       
           
    }
}}
</script>

<style>

</style>