import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import About from '../../src/js/pages/About';

describe("(Component) About", function() {

  const shallowed = shallow(<About/>);

  it('renders without exploding', () => {
    expect(shallowed).to.have.length(1);
  });

});
