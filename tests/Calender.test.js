import {mount} from "@vue/test-utils";
import App from "../src/App";
import Calender from "../src/components/Calender/Calender";



describe("Calender render functionality", () => {
	const wrapper = mount(App);
	console.log(wrapper);
	const calender = wrapper.get(Calender);
	
	it("Calender has a header", () => {
		console.log(calender);
		expect(calender).toContain('CalenderHeader');
	});
	
	it("Calender renders exact number of days", () => {
		// TODO
	});
	
	it("Calender starts with the correct day in the month", () => {
		// TODO
	});
});
