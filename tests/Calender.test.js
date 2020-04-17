import {mount} from "@vue/test-utils";
import App from "../src/App";
import Calender from "../src/components/Calender/Calender";



describe("Calender render functionality", () => {
	const wrapper = mount(App);
	const calender = wrapper.get(Calender);
	
	it("Calender has a header", () => {
		expect(calender.selector.components).toHaveProperty('CalenderHeader');
	});
	
	it("Calender renders exact number of days", () => {
		calender.get('')
	});
	
	it("Calender starts with the correct day in the month", () => {
		// TODO
	});
});
