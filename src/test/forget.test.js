import React from 'react';
import {
    shallow
} from 'enzyme';
import ForgotPassword from '../components/forgotPasswordInput';
import '../testSetup'
/**
 * describe what we are testing
 **/
describe('ForgotPassword Component', () => {
    /**
     * make our assertion and what we expect to happen 
     **/
    it('should render without throwing an error', () => {
        expect(shallow( < ForgotPassword / > ).exists()).toBe(true)
    })
    /**
     * within the ForgotPassword components describe function
     **/
    it('renders a userName input', () => {
        expect(shallow( < ForgotPassword / > ).find('#userName').length).toEqual(1)
    })
    /**
     * within the ForgotPassword components describe function
     **/
    describe('userName input', () => {
        it('should respond to change event and change the state of the ForgotPassword Component', () => {
            const wrapper = shallow( < ForgotPassword / > );
            wrapper.find('#userName').simulate('change', {
                target: {
                    name: 'userName',
                    value: 'aditya@gmail.com'
                }
            });
            expect(wrapper.state('userName')).toEqual('aditya@gmail.com');
        })
    })
})