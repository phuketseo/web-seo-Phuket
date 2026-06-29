import fs from "fs";

const p = "src/app/page.tsx";
let s = fs.readFileSync(p, "utf8");

const reps = [
  [
    '{ label: "SEO Audit", value: "7 \u0e27\u0e31\u0e19", sub: "\u0e2a\u0e48\u0e07\u0e21\u0e2d\u0e1a\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19"',
    '{ label: "Audit \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19", value: "7 \u0e27\u0e31\u0e19", sub: "\u0e2a\u0e48\u0e07\u0e21\u0e2d\u0e1a\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19"',
  ],
  [
    "\u0e42\u0e1f\u0e01\u0e31\u0e2a SEO + \u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e48\u0e07\u0e21\u0e2d\u0e1a\u0e44\u0e14\u0e49\u0e08\u0e23\u0e34\u0e07 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e44\u0e17\u0e22\u0e43\u0e19\u0e20\u0e39\u0e40\u0e01\u0e47\u0e15",
    "\u0e42\u0e1f\u0e01\u0e31\u0e2a\u0e01\u0e32\u0e23\u0e21\u0e2d\u0e07\u0e40\u0e2b\u0e47\u0e19\u0e1a\u0e19 Google + \u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e48\u0e07\u0e21\u0e2d\u0e1a\u0e44\u0e14\u0e49\u0e08\u0e23\u0e34\u0e07 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e44\u0e17\u0e22\u0e43\u0e19\u0e20\u0e39\u0e40\u0e01\u0e47\u0e15",
  ],
  [
    "                  \u0e14\u0e39\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 <ArrowRight size={14} />",
    "                  {s.linkLabel} <ArrowRight size={14} />",
  ],
  [
    "                    \u0e2d\u0e48\u0e32\u0e19 case study <ArrowRight size={14} />",
    "                    \u0e14\u0e39 case study \u0e40\u0e27\u0e47\u0e1a agency <ArrowRight size={14} />",
  ],
  [
    "                \u0e14\u0e39\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 <ArrowRight size={16} />",
    "                \u0e14\u0e39 case studies \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 <ArrowRight size={16} />",
  ],
  [
    "            <p className=\"text-slate-500\">\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08 SEO Lite / Pro / Pro Max \u2014 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e48\u0e32\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22\u0e0b\u0e48\u0e2d\u0e19\u0e40\u0e23\u0e49\u0e19</p>",
    "            <p className=\"text-slate-500\">\u0e41\u0e1e\u0e47\u0e01 Lite / Pro / Pro Max \u2014 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e48\u0e32\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22\u0e0b\u0e48\u0e2d\u0e19\u0e40\u0e23\u0e49\u0e19</p>",
  ],
  [
    "            \u0e14\u0e39\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08\u0e04\u0e23\u0e1a\u0e17\u0e35\u0e48{\" \"}\n            <Link href=\"/pricing\" className=\"text-blue-700 font-semibold hover:underline\">\n              \u0e2b\u0e19\u0e49\u0e32\u0e23\u0e32\u0e04\u0e32\n            </Link>",
    "            <Link href=\"/pricing\" className=\"text-blue-700 font-semibold hover:underline\">\n              \u0e14\u0e39\u0e23\u0e32\u0e04\u0e32\u0e41\u0e1e\u0e47\u0e01 SEO \u0e20\u0e39\u0e40\u0e01\u0e47\u0e15\n            </Link>",
  ],
  [
    "            <h2 className=\"text-4xl font-bold text-slate-900 font-serif mb-4\">\n              \u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e40\u0e23\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\n            </h2>\n          </div>",
    "            <h2 className=\"text-4xl font-bold text-slate-900 font-serif mb-4\">\n              \u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e40\u0e23\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\n            </h2>\n            <p className=\"text-slate-500 text-sm max-w-xl mx-auto\">\n              \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e08\u0e23\u0e34\u0e07 \u2014 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e23\u0e35\u0e27\u0e34\u0e27\u0e17\u0e35\u0e48\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e15\u0e31\u0e27\u0e15\u0e19\n            </p>\n          </div>",
  ],
];

let changed = 0;
for (const [from, to] of reps) {
  if (s.includes(from)) {
    s = s.replace(from, to);
    changed++;
  } else {
    console.warn("MISS:", from.slice(0, 60));
  }
}

fs.writeFileSync(p, s);
console.log(`Applied ${changed}/${reps.length} replacements`);
