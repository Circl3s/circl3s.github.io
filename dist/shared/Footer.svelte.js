import './Footer.svelte.css.proxy.js';
/* src/shared/Footer.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let div;
	let p0;
	let t1;
	let p1;
	let t5;
	let p2;

	return {
		c() {
			div = element("div");
			p0 = element("p");
			p0.textContent = "◯ ◯ ◯";
			t1 = space();
			p1 = element("p");
			p1.textContent = `Copyright © ${new Date().getFullYear()} Feliks Maak`;
			t5 = space();
			p2 = element("p");
			p2.textContent = "All trademarks belong to their respective owners.";
			attr(div, "class", "Footer svelte-16hgpng");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, p0);
			append(div, t1);
			append(div, p1);
			append(div, t5);
			append(div, p2);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Footer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Footer;