/* src/toolbox/Toolbox.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import Footer from "../shared/Footer.svelte.js";
import Navbar from "../shared/Navbar.svelte.js";
import About from "./About.svelte.js";

function create_fragment(ctx) {
	let div;
	let navbar;
	let t0;
	let about;
	let t1;
	let footer;
	let current;
	navbar = new Navbar({});
	about = new About({});
	footer = new Footer({});

	return {
		c() {
			div = element("div");
			create_component(navbar.$$.fragment);
			t0 = space();
			create_component(about.$$.fragment);
			t1 = space();
			create_component(footer.$$.fragment);
			attr(div, "class", "Toolbox");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(navbar, div, null);
			append(div, t0);
			mount_component(about, div, null);
			append(div, t1);
			mount_component(footer, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(about.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(about.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(navbar);
			destroy_component(about);
			destroy_component(footer);
		}
	};
}

class Toolbox extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Toolbox;