import React from 'react';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';
import Locales from '../Locales';

describe('<Locale />', () => {
  it('renders', () => {
    const locales = [
      {
        key: 'en',
        text: 'English',
      },
      {
        key: 'zh_HK',
        text: 'Chinese (T)',
      },
      {
        key: 'zh_CN',
        text: 'Chinese (S)',
      },
    ];

    renderer.create(
      <Locales locales={locales} currentLocale="en" onChange={() => {}} />
    );
  });
});
