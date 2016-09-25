import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';

import Checkbox from '../../src/js/components/sidebar/Checkbox';

describe("(Component) Checkbox", function() {

  it('renders without exploding', () => {
    const wrapper = shallow(<Checkbox value={false} title={''}/>);
    
    expect(wrapper).to.have.length(1);
  });

  it('renders with a title', () => {
    const wrapper = mount(<Checkbox value={false} title={'new title'} />);

    expect(wrapper.props().title).to.equal('new title');
  });

  it('simulates click events', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Checkbox value={false} title={''} onChange={spy} />);

    wrapper.find('input').simulate('change');
    expect(spy.calledOnce).to.be.true;
  });

});
