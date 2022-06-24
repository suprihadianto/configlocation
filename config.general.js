const config = {
	hostname: "http://localhost:3000",
	sitename: "sebuahcatatan",
	sitedescription: "",
	author: "SEBUAHCATATAN",
	homepage: {
		website: "https://mifirm.net",
		domain_alias: "",
		element_remove: [],
		element_white_list: ["form"],
		inject_element: "",
		replace_single_words: [],
	},
	sitemap_name: "sitemap.xml",
	remove_comment_html: false,
	element_remove: [
		"script",
		"noscript",
		"meta",
		"iframe",
		"embed",
		"form",
		"ins",
	]
};

module.exports = config;
