import React from 'react';
import {
    shallow,mount,render
} from 'enzyme';
import Registration from '../components/registerInput';
import '../testSetup'
/**
 * describe what we are testing
 **/
describe('Registration Component', () => {
    /**
     * make our assertion and what we expect to happen 
     **/
    it('should render without throwing an error', () => {
        expect(shallow( < Registration / > )
                .exists())
            .toBe(true)
    })
    /**
     * within the Registration components describe function
     **/
    it('renders a firstName input', () => {
        expect(shallow( < Registration / > ).find('#firstName').length).toEqual(1)
    })
    it('renders a lastName input', () => {
        expect(shallow( < Registration / > ).find('#lastName').length).toEqual(1)
    })
    it('renders a userName input', () => {
        expect(shallow( < Registration / > ).find('#userName').length).toEqual(1)
    })
    it('renders a password input', () => {
        expect(shallow( < Registration / > ).find('#password').length).toEqual(1)
    })
    it('renders a confirm password input', () => {
        expect(shallow( < Registration / > ).find('#confirmPassword').length).toEqual(1)
    })
    /**
     * within the Registration components describe function
     **/
    describe('firstName input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Registration / > );
            wrapper.find('#firstName').simulate('change', {
                target: {
                    name: 'firstname',
                    value: 'aditya'
                }
            });
            expect(wrapper.state('firstName')).toEqual('aditya');
        })
    })
    describe('lastName input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Registration / > );
            wrapper.find('#lastName').simulate('change', {
                target: {
                    name: 'lastname',
                    value: 'kumar'
                }
            });
            expect(wrapper.state('lastName')).toEqual('kumar');
        })
    })
    describe('userName input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Registration / > );
            wrapper.find('#userName').simulate('change', {
                target: {
                    name: 'userName',
                    value: 'aditya@gmail.com'
                }
            });
            expect(wrapper.state('userName')).toEqual('aditya@gmail.com');
        })
    })
    describe('Password input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Registration / > );
            wrapper.find('#password')
                .simulate('change', {
                    target: {
                        name: 'password',
                        value: 'aditya@123'
                    }
                });
            expect(wrapper.state('password')).toEqual('aditya@123');
        })
    })
    describe('confirmPassword input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Registration / > );
            wrapper.find('#confirmPassword')
                .simulate('change', {
                    target: {
                        name: 'confirmPassword',
                        value: 'aditya@123'
                    }
                });
            expect(wrapper.state('confirmPassword')).toEqual('aditya@123');
        })
    })
})