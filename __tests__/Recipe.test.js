import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../components/Recipe';

describe('Recipe', () => {
    it('exists', () => {
        const wrapper = shallow(<Recipe title="Yummy in my Tummy"/>);
        expect(wrapper.exists()).toBe(true);
    })
})