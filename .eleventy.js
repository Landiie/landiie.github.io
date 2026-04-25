module.exports = function (eleventyConfig) {
  //adds ids to headers
  const anchors_plugin = require("@orchidjs/eleventy-plugin-ids");
  const { EleventyRenderPlugin } = require("@11ty/eleventy");
  const { DateTime } = require("luxon");

  eleventyConfig.addPlugin(anchors_plugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPassthroughCopy("./src/pfp.png");
  eleventyConfig.addPassthroughCopy("./src/ref.png");
  eleventyConfig.addPassthroughCopy("./src/mods/**");
  eleventyConfig.addPassthroughCopy("./src/signature.png");
  eleventyConfig.addPassthroughCopy("./src/papaparse.min.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/patrons.json");
  eleventyConfig.addPassthroughCopy("./src/shop/sammi-extensions/*.json");
  eleventyConfig.addPassthroughCopy("./src/.well-known/*");

  //filters
  eleventyConfig.addFilter("splitContent", (content, sectionNumber) => {
    const sections = content.split("<!-- more -->");
    return sections[sectionNumber];
  });

  eleventyConfig.addFilter("concat", (value1, value2) => {
    return value1 + value2;
  });

  // eleventyConfig.addFilter("excerpt", content => {
  //   // const tokens = markdownIt.parse(content, {});
  //   // const ptags = tokens
  //   //   .filter(token => token.type === "paragraph_open")
  //   //   .map(token => token.content)
  //   //   .join("\n\n");

  //   // return ptags;

  //   // const paragraphRegex = /<p>(.*?)<\/p>/g;
  //   // const paragraphs = [];
  //   // let match;

  //   // while ((match = paragraphRegex.exec(content))) {
  //   //   paragraphs.push(match[1]);
  //   // }

  //   // return paragraphs.join("\n\n");
  //   return content
  // });

  eleventyConfig.addFilter("excerpt", post => {
    const content = isolateParagraphs(post);
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });

  eleventyConfig.addFilter("humanDate", dateObj => {
    return dateObj.toUTCString().replace(" 00:00:00 GMT", "");
  });

  eleventyConfig.addFilter("readTime", content => {
    content = isolateParagraphs(content);
    const wordsPerMinute = 200; // Average case.
    let result;

    let textLength = content.split(" ").length; // Split by words
    if (textLength > 0) {
      let value = Math.ceil(textLength / wordsPerMinute);
      result = `~${value} min read`;
    }

    return result;
  });

  //shortcodes
  eleventyConfig.addPairedShortcode("alert", function (content, type) {
    let svg = "";
    if (type == "info") {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>`;
    } else {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="32" height="32" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>`;
    }
    return `<div class="alert alert-${type} d-flex flex-row justify-content-center align-items-center text-center">
    ${svg}
    <div>${content}</div>
  </div>`;
  });

  eleventyConfig.addPairedShortcode("img", function (link, alt, caption, w) {
    if (!caption) caption = alt;
    if (!w) w = "";
    return `<div style="
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
">
    <img src="${link}" width="${w}" alt="${alt}">
    <i style="color: gray;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
        </svg> ${caption}
    </i>
    <!--unused atm, for multi-image support-->
    <nav class="d-none util-slideshow-nav">
        <button class="btn btn-secondary util-slideshow-nav-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
        </button>
        <button class="btn btn-secondary util-slideshow-nav-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
        </button>
    </nav>
</div>`;
  });

  //functions
  function isolateParagraphs(text) {
    text = text.replace(/(<([^>]+)>)/gi, "");
    return text;
  }

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
