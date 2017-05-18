import React from 'react';
// import sinon from 'sinon'
import {expect} from 'chai';
import {shallow} from 'enzyme';
// import sinon from 'sinon';

import SignUpForm from 'containers/SignUpForm';

// import FormState from 'lib/FormState';

describe('<SignUpForm />', () => {
  describe('raw rendering', () => {
    it('test Sign Up Success Form ', () => {
      // fake sign up form
      const item = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};
      // const formState = new FormState();
      const wrapper = shallow(<SignUpForm item={item} />);
      expect(wrapper.find('TextField').length).to.equal(5);
    });

    it('test submit function', () => {
      // fake sign up form
      const item = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};
      // const formState = new FormState();
      const wrapper = shallow(<SignUpForm item={item} />);
      // const component = wrapper.instance();
      // let handleSubmit = sinon.stub(component, 'submit', () => { });

      expect(wrapper.find('TextField').length).to.equal(5);
    });
  });
});

