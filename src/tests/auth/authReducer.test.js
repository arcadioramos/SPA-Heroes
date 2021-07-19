import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";


describe('pruebas en authReducer', () => {

    test('debe retornar estado por defecto', () => {

        const state = authReducer({logged:false},{});

        expect(state).toEqual({logged:false});


    })

    test('debe autenticar y colocar el name del usuario', () => {

         const action = {
             type: types.login,
             payload: {
                 name: 'Daniel'
             }
         }
         const state = authReducer({logged:false},action);

         expect(state).toEqual({name: 'Daniel',logged: true})

    })

    test('debe borrar el name del usuario y logged en false',()=>{
        
        const usuario={
            name:'Eusebio',
            logged: true
        }
        const action = {
            type: types.logout
        }
        const state = authReducer(usuario,action)

        expect(state).toEqual({logged:false})
        console.log(state)


    })


})