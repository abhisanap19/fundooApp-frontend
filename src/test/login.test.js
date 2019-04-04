import React from 'react';
import {
  shallow
} from 'enzyme';
import Login from '../components/loginInput';
import '../testSetup'
/**
 * describe what we are testing
 **/
describe('Login Component', () => {
  /**
   * make our assertion and what we expect to happen 
   **/
  it('should render without throwing an error', () => {
    expect(shallow( < Login / > ).exists()).toBe(true)
  })
  /**
   * within the Login components describe function
   **/
  it('renders a userName input', () => {
    expect(shallow( < Login / > ).find('#userName').length).toEqual(1)
  })
  it('renders a password input', () => {
    expect(shallow( < Login / > ).find('#password').length).toEqual(1)
  })
  /**
   * within the Login components describe function
   **/
  describe('userName input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login / > );
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
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login / > );
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
})