import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import TableTabs from '../../src/js/components/table/TableTabs';

describe("(Component) TableTabs", function() {

  it('renders without exploding', () => {
    const wrapper = shallow(<TableTabs tabsList={[]} activeTab={'activeTab'} />);

    expect(wrapper).to.have.length(1);
  });

});
