import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App, { Search, Button, Table } from './App';

describe('IS Search Button', () => {

  it('has search button', () => {
    expect(component.contains(Search)).toBe(true)
  });

});