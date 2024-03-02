import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [

    {
        path: '/generarToken',
        component: () => import('../pages/TokenPage')
    },

    {
        path: '/ingresar',
        component: () => import('../pages/EstudiantePage')
    }
  

   
]

const router = createRouter({history: createWebHashHistory(),routes } ) 

export default router 