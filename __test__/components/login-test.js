import React from 'react';
// import sinon from 'sinon'
import {expect} from 'chai';
import {shallow} from 'enzyme';

import LoginForm from 'containers/LoginForm';

describe('<LoginForm />', function() {
  it('Raw test with Login Form', function() {
    const item = {username: '', password: ''};
    const wrapper = shallow(<LoginForm item={item} />);
    expect(wrapper.find('TextField').length).to.equal(2);
  });
});
