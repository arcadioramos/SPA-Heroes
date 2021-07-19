import React from 'react'
import { mount } from "enzyme"
import { DashBoardRoutes } from "../../routers/DashBoardRoutes"
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <DashboardRoutes/>', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Arcadio'
        }
    }


    test('Debe mostrarse correctamente ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Arcadio')
    })

})