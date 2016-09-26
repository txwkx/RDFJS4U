import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Layout from '../../src/js/pages/Layout';

describe("(Component) Layout", function() {

  const wrapper = shallow(<Layout/>);

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });

});
