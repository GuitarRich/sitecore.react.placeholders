import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Placeholder from '../index';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to have one h1', () => {
        const content = shallow(<div><h1>Test Header</h1></div>);
        const wrapper = shallow(<Placeholder key={'main'} content={content} />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<Placeholder bar='baz' />);
        expect(wrapper.props().bar).to.equal('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).to.equal('foo');
    });

    it('calls componentDidMount', () => {
        sinon.spy(Placeholder.prototype, 'componentDidMount');
        const wrapper = mount(<Placeholder />);
        expect(Placeholder.prototype.componentDidMount.calledOnce).to.be.true;
        Placeholder.prototype.componentDidMount.restore();
    });

});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {

    it('renders three `.icon-test`s', () => {
        const wrapper = render(<Placeholder />);
        expect(wrapper.find('.icon-test').length).to.equal(3);
    });

});