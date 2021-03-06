import React from 'react'
//import { mount } from 'enzyme'
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../routers/PrivateRoute"
import {mount} from 'enzyme'




describe('Pruebas en <PrivateRoute/>', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }
   Storage.prototype.setItem = jest.fn()

    test('debe de mostrar el componente si está autenticado y guardar LocalStorage', () => {

        const wrapper = mount(
        <MemoryRouter>
            <PrivateRoute
                isAuthenticated={true}
                component={() => <span>Listo!!!</span>}
                {...props}
            />
        </MemoryRouter>)



        //console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true)
        expect( localStorage.setItem ).toHaveBeenCalledWith('pathname','/marvel')
        
    })

    test('debe de bloquear el componente si no está autenticado',()=>{
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!!!</span>}
                    {...props}
                />
            </MemoryRouter>)
            expect(wrapper.find('span').exists()).toBe(false)
    })



})