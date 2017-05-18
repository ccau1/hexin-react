import React from 'react';
// import sinon from 'sinon'
import {expect} from 'chai';
import {shallow} from 'enzyme';

import SignUpSuccess from 'components/SignUpSuccess';

describe('<SignUpSuccess />', () => {
  it('test Sign Up Success ', () => {
    const wrapper = shallow(<SignUpSuccess />);
    expect(wrapper.find('Link').length).to.equal(1);
  });
});
