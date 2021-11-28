import './App.svelte.css.proxy.js';
/* src/index/App.svelte generated by Svelte v3.38.3 */
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

import About from "./About.svelte.js";
import Greeter from "./Greeter.svelte.js";
import Hobbies from "./Hobbies.svelte.js";
import Navbar from "../shared/Navbar.svelte.js";
import News from "./News.svelte.js";
import Toolbox from "./Toolbox.svelte.js";
import Social from "./Social.svelte.js";
import Footer from "../shared/Footer.svelte.js";
import { waitLocale } from "../../_snowpack/pkg/svelte-i18n.js";

function create_fragment(ctx) {
	let div;
	let navbar;
	let t0;
	let greeter;
	let t1;
	let about;
	let t2;
	let hobbies;
	let t3;
	let news;
	let t4;
	let toolbox;
	let t5;
	let social;
	let t6;
	let footer;
	let current;
	navbar = new Navbar({ props: { anchors: /*anchors*/ ctx[0] } });
	greeter = new Greeter({});
	about = new About({});
	hobbies = new Hobbies({});
	news = new News({});
	toolbox = new Toolbox({});
	social = new Social({});
	footer = new Footer({});

	return {
		c() {
			div = element("div");
			create_component(navbar.$$.fragment);
			t0 = space();
			create_component(greeter.$$.fragment);
			t1 = space();
			create_component(about.$$.fragment);
			t2 = space();
			create_component(hobbies.$$.fragment);
			t3 = space();
			create_component(news.$$.fragment);
			t4 = space();
			create_component(toolbox.$$.fragment);
			t5 = space();
			create_component(social.$$.fragment);
			t6 = space();
			create_component(footer.$$.fragment);
			attr(div, "class", "App svelte-apyz42");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(navbar, div, null);
			append(div, t0);
			mount_component(greeter, div, null);
			append(div, t1);
			mount_component(about, div, null);
			append(div, t2);
			mount_component(hobbies, div, null);
			append(div, t3);
			mount_component(news, div, null);
			append(div, t4);
			mount_component(toolbox, div, null);
			append(div, t5);
			mount_component(social, div, null);
			append(div, t6);
			mount_component(footer, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(greeter.$$.fragment, local);
			transition_in(about.$$.fragment, local);
			transition_in(hobbies.$$.fragment, local);
			transition_in(news.$$.fragment, local);
			transition_in(toolbox.$$.fragment, local);
			transition_in(social.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(greeter.$$.fragment, local);
			transition_out(about.$$.fragment, local);
			transition_out(hobbies.$$.fragment, local);
			transition_out(news.$$.fragment, local);
			transition_out(toolbox.$$.fragment, local);
			transition_out(social.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(navbar);
			destroy_component(greeter);
			destroy_component(about);
			destroy_component(hobbies);
			destroy_component(news);
			destroy_component(toolbox);
			destroy_component(social);
			destroy_component(footer);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let anchors = ["About", "Hobbies", "News", "Toolbox", "Social"];

	async function preload() {
		return waitLocale();
	}

	return [anchors, preload];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { preload: 1 });
	}

	get preload() {
		return this.$$.ctx[1];
	}
}

export default App;