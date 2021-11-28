import './Card.svelte.css.proxy.js';
/* src/shared/Card.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	space,
	transition_in,
	transition_out,
	update_slot
} from "../../_snowpack/pkg/svelte/internal.js";

const get_content_slot_changes = dirty => ({});
const get_content_slot_context = ctx => ({});
const get_title_slot_changes = dirty => ({});
const get_title_slot_context = ctx => ({});

function create_fragment(ctx) {
	let div1;
	let div0;
	let t;
	let div1_class_value;
	let current;
	const title_slot_template = /*#slots*/ ctx[2].title;
	const title_slot = create_slot(title_slot_template, ctx, /*$$scope*/ ctx[1], get_title_slot_context);
	const content_slot_template = /*#slots*/ ctx[2].content;
	const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[1], get_content_slot_context);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			if (title_slot) title_slot.c();
			t = space();
			if (content_slot) content_slot.c();
			attr(div0, "class", "text-2xl font-semibold mb-4");
			attr(div1, "class", div1_class_value = "Card max-w-" + /*size*/ ctx[0] + " svelte-575rmt");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);

			if (title_slot) {
				title_slot.m(div0, null);
			}

			append(div1, t);

			if (content_slot) {
				content_slot.m(div1, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (title_slot) {
				if (title_slot.p && (!current || dirty & /*$$scope*/ 2)) {
					update_slot(title_slot, title_slot_template, ctx, /*$$scope*/ ctx[1], !current ? -1 : dirty, get_title_slot_changes, get_title_slot_context);
				}
			}

			if (content_slot) {
				if (content_slot.p && (!current || dirty & /*$$scope*/ 2)) {
					update_slot(content_slot, content_slot_template, ctx, /*$$scope*/ ctx[1], !current ? -1 : dirty, get_content_slot_changes, get_content_slot_context);
				}
			}

			if (!current || dirty & /*size*/ 1 && div1_class_value !== (div1_class_value = "Card max-w-" + /*size*/ ctx[0] + " svelte-575rmt")) {
				attr(div1, "class", div1_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(title_slot, local);
			transition_in(content_slot, local);
			current = true;
		},
		o(local) {
			transition_out(title_slot, local);
			transition_out(content_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (title_slot) title_slot.d(detaching);
			if (content_slot) content_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { size = "xl" } = $$props;

	$$self.$$set = $$props => {
		if ("size" in $$props) $$invalidate(0, size = $$props.size);
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	return [size, $$scope, slots];
}

class Card extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { size: 0 });
	}
}

export default Card;