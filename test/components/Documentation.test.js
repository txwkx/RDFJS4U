import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Documentation from '../../src/js/pages/Documentation';

describe("(Component) Documentation", function() {

  const wrapper = shallow(<Documentation/>);

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });

});
