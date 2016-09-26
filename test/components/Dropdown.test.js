import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Dropdown from '../../src/js/components/sidebar/Dropdown';

describe("(Component) Dropdown", function() {

  const dropdownList = [{id: 1, name: 'item', value: 'item'}];

  it('renders without exploding', () => {
    const wrapper = shallow(<Dropdown value={'title'} dropdownList={dropdownList} />);

    expect(wrapper).to.have.length(1);
  });

});
