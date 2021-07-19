import { mount } from 'enzyme'
import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { HeroScreen } from '../../../components/heroes/HeroScreen'


describe('Pruebas en <HeroScreen/>', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()

    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={history} />
        </MemoryRouter>
    )

    test('debe verificar que el componente redirect exista', () => {

        expect(wrapper.find('Redirect').exists()).toBe(true)

    })

    test('Debe mostrar un heroe si el parámetro existe  y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={HeroScreen}/>
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.row').exists()).toBe(true);

    })

    test('Debe de regresar a la pantalla anterior con PUSH',()=>{
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
    
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                path='/hero/:heroeId' 
                component={()=><HeroScreen history={history}/>}
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/')
        expect(history.goBack).not.toHaveBeenCalled();

    })
    test('Debe de regresar a la pantalla anterior ',()=>{
        const history = {
            length: 10,
            goBack: jest.fn(),
            push: jest.fn()
    
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                path='/hero/:heroeId' 
                component={()=><HeroScreen history={history}/>}
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(history.push).not.toHaveBeenCalledWith('/')
        expect(history.goBack).toHaveBeenCalled();

    })

    test('debe de llamar el redirect si no existe el héroe',()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider15516']}>
                <Route 
                path='/hero/:heroeId' 
                component={()=><HeroScreen history={history}/>}
                />
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe('');
    })
})