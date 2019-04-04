import React from 'react';
import {
    shallow
} from 'enzyme';
import ResetPassword from '../components/resetPasswordInput';
import '../testSetup'
/**
 * describe what we are testing
 **/
describe('ResetPassword Component', () => {
    /**
     * make our assertion and what we expect to happen 
     **/
    it('should render without throwing an error', () => {
        expect(shallow( < ResetPassword / > )
                .exists())
            .toBe(true)
    })
    /**
     * within the ResetPassword components describe function
     **/
    it('renders a password input', () => {
        expect(shallow( < ResetPassword / > ).find('#password').length).toEqual(1)
    })
    it('renders a newPassword password input', () => {
        expect(shallow( < ResetPassword / > ).find('#newPassword').length).toEqual(1)
    })
    /**
     * within the ResetPassword components describe function
     **/
    describe('Password input', () => {
        it('should respond to change event and change the state of the ResetPassword Component', () => {
            const wrapper = shallow( < ResetPassword / > );
            wrapper.find('#password')
                .simulate('change', {
                    target: {
                        name: 'password',
                        value: '123456789'
                    }
                });
            expect(wrapper.state('password')).toEqual('123456789');
        })
    })
    describe('newPasswordPassword input', () => {
        it('should respond to change event and change the state of the ResetPassword Component', () => {
            const wrapper = shallow( < ResetPassword / > );
            wrapper.find('#newPassword')
                .simulate('change', {
                    target: {
                        name: 'password',
                        value: '123456789'
                    }
                });
            expect(wrapper.state('newPassword')).toEqual('123456789');
        })
    })
})