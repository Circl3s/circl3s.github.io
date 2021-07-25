import './Button.svelte.css.proxy.js';
/* src/shared/Button.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let button;
	let button_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			button = element("button");
			if (default_slot) default_slot.c();
			attr(button, "class", button_class_value = "Button from-" + /*color*/ ctx[0] + "-900 to-" + /*color*/ ctx[0] + "-700" + " svelte-1pnjy1k");
			button.disabled = /*disabled*/ ctx[1];
		},
		m(target, anchor) {
			insert(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*color*/ 1 && button_class_value !== (button_class_value = "Button from-" + /*color*/ ctx[0] + "-900 to-" + /*color*/ ctx[0] + "-700" + " svelte-1pnjy1k")) {
				attr(button, "class", button_class_value);
			}

			if (!current || dirty & /*disabled*/ 2) {
				button.disabled = /*disabled*/ ctx[1];
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { color = "purple" } = $$props;
	let { disabled = false } = $$props;

	$$self.$$set = $$props => {
		if ("color" in $$props) $$invalidate(0, color = $$props.color);
		if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [color, disabled, $$scope, slots];
}

class Button extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { color: 0, disabled: 1 });
	}
}

export default Button;