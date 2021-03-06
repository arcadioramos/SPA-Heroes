import React from 'react'
import { mount } from 'enzyme'
import { SearchScreen } from '../../../components/Search/SearchScreen'
import { MemoryRouter, Route } from 'react-router-dom'

describe('Pruebas en el componente <SearchScreen/>', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path={'/search'} component={SearchScreen} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').exists()).toBe(true)
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    })
    test('debe de mostrar a batman y el input con el valor del querystring', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path={'/search'} component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar un error si no se encuentra el hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path={'/search'} component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-danger').exists()).toBe(true)
    })

    test('debe llamar el push del history', () => {

        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path={'/search'} component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        })
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect(history.push).toHaveBeenCalledWith('?q=batman')
    })
})
