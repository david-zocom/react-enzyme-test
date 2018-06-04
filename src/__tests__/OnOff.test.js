import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import OnOff from '../OnOff.js';

// <div> <button onClick=?>Turn on</button> </div>
// initialState: { on: false }
// klickfunktion, state
describe('OnOff component test suite', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<OnOff />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('shallow smoke test', () => {
		let wrapper = shallow(<OnOff />);
	})

	// initial state == false
	test('initial state should be false', () => {
		let wrapper = shallow(<OnOff />);
		expect( wrapper.state('on') ).toBe( false );
	})

	// state ändras från false till true när man klickar
	// state ändras från true till false när man klickar


})
