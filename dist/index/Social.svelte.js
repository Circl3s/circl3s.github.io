import './Social.svelte.css.proxy.js';
/* src/index/Social.svelte generated by Svelte v3.38.3 */
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
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import Button from "../shared/Button.svelte.js";
import Marker from "../shared/Marker.svelte.js";

function create_default_slot_3(ctx) {
	let t;

	return {
		c() {
			t = text("Send an email");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (64:8) <Button color={"blue"}>
function create_default_slot_2(ctx) {
	let t;

	return {
		c() {
			t = text("Send a message");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (67:8) <Button color={"red"}>
function create_default_slot_1(ctx) {
	let t;

	return {
		c() {
			t = text("Send a nude");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (70:8) <Button disabled>
function create_default_slot(ctx) {
	let t;

	return {
		c() {
			t = text("Send a bomb");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let marker;
	let t0;
	let div2;
	let h10;
	let t2;
	let div0;
	let t7;
	let h11;
	let t9;
	let div1;
	let button0;
	let t10;
	let button1;
	let t11;
	let button2;
	let t12;
	let button3;
	let current;
	marker = new Marker({ props: { name: "social" } });

	button0 = new Button({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	button1 = new Button({
			props: {
				color: "blue",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	button2 = new Button({
			props: {
				color: "red",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	button3 = new Button({
			props: {
				disabled: true,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(marker.$$.fragment);
			t0 = space();
			div2 = element("div");
			h10 = element("h1");
			h10.textContent = "You can find me on these platforms:";
			t2 = space();
			div0 = element("div");

			div0.innerHTML = `<img src="img/YouTube.svg" alt="YouTube Logo" class="svelte-k3w4re"/> 
        <img src="img/Spotify.svg" alt="Spotify Logo" class="svelte-k3w4re"/> 
        <img src="img/Bandcamp.svg" alt="Bandcamp Logo" class="svelte-k3w4re"/> 
        <img src="img/iTunes.svg" alt="iTunes Logo" class="svelte-k3w4re"/> 
        <img src="img/Facebook.svg" alt="Facebook Logo" class="svelte-k3w4re"/>`;

			t7 = space();
			h11 = element("h1");
			h11.textContent = "...or contact me directly:";
			t9 = space();
			div1 = element("div");
			create_component(button0.$$.fragment);
			t10 = space();
			create_component(button1.$$.fragment);
			t11 = space();
			create_component(button2.$$.fragment);
			t12 = space();
			create_component(button3.$$.fragment);
			attr(h10, "class", "svelte-k3w4re");
			attr(div0, "class", "container svelte-k3w4re");
			attr(h11, "class", "svelte-k3w4re");
			attr(div1, "class", "container svelte-k3w4re");
			attr(div2, "class", "Social svelte-k3w4re");
		},
		m(target, anchor) {
			mount_component(marker, target, anchor);
			insert(target, t0, anchor);
			insert(target, div2, anchor);
			append(div2, h10);
			append(div2, t2);
			append(div2, div0);
			append(div2, t7);
			append(div2, h11);
			append(div2, t9);
			append(div2, div1);
			mount_component(button0, div1, null);
			append(div1, t10);
			mount_component(button1, div1, null);
			append(div1, t11);
			mount_component(button2, div1, null);
			append(div1, t12);
			mount_component(button3, div1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
			const button3_changes = {};

			if (dirty & /*$$scope*/ 1) {
				button3_changes.$$scope = { dirty, ctx };
			}

			button3.$set(button3_changes);
		},
		i(local) {
			if (current) return;
			transition_in(marker.$$.fragment, local);
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(marker.$$.fragment, local);
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(marker, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(div2);
			destroy_component(button0);
			destroy_component(button1);
			destroy_component(button2);
			destroy_component(button3);
		}
	};
}

class Social extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Social;