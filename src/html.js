const textSymbols = [
  {
    open: "##",
    close: "##",
    htmlOpen: '<span class="white">',
    htmlClose: "</span>",
  },
  {
    open: "[[",
    close: "]]",
    htmlOpen: '<span class="yellow">',
    htmlClose: "</span>",
  },
  {
    open: "==",
    close: "==",
    htmlOpen: '<span class="red">',
    htmlClose: "</span>",
  },
  {
    open: "++",
    close: "++",
    htmlOpen: '<span class="glow">',
    htmlClose: "</span>",
  },
  {
    open: "$$",
    close: "$$",
    htmlOpen: '<span class="color-change">',
    htmlClose: "</span>",
  },
  {
    open: "**",
    close: "**",
    htmlOpen: '<span class="italic">',
    htmlClose: "</span>",
  },
  {
    open: "__",
    close: "__",
    htmlOpen: '<span class="underline">',
    htmlClose: "</span>",
  },
  {
    open: "->",
    close: "<-",
    htmlOpen: '<span class="arrow">',
    htmlClose: "</span>",
  },
  {
    open: "<<",
    close: ">>",
    htmlOpen: '<span class="double-arrow">',
    htmlClose: "</span>",
  },
  {
    open: "//",
    close: "//",
    htmlOpen: '<span class="bracket">',
    htmlClose: "</span>",
  },
  {
    open: "((",
    close: "))",
    htmlOpen: '<span class="wide">',
    htmlClose: "</span>",
  },
];

const lineSymbols = {
  "---": '<hr class="dotted" />',
  "===": '<hr class="dotted-double" />',
  "|||": '<hr class="tall" />',
  "|--|": '<hr class="top" />',
  "|__|": '<hr class="bottom" />',
};

const listSymbols = {
  "--": "li",
};

export const escapeRegExp = (regexString) => {
  // eslint-disable-next-line no-useless-escape
  return regexString.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

export const wrapListItems = (htmlString) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, "text/html");

  const listItems = html.querySelectorAll("li");

  listItems.forEach((listItem) => {
    const hasParentUL = listItem.closest("ul");

    if (!hasParentUL) {
      var parent = listItem.parentNode;
      var wrapper = html.createElement("ul");

      // set the wrapper as child (instead of the element)
      parent.replaceChild(wrapper, listItem);
      // set element as child of wrapper
      wrapper.appendChild(listItem);
    }
  });

  return html.body.innerHTML;
};

export const textToHtml = (text) => {
  let html = text;
  textSymbols.forEach((symbol) => {
    const pattern = `${escapeRegExp(symbol.open)}(.*?)${escapeRegExp(
      symbol.close
    )}`;
    const regex = new RegExp(pattern, "gim");

    html = html.replace(regex, (original, match) => {
      if (match.trim().length === 0) {
        return original;
      }
      return `${symbol.htmlOpen}${match.trim()}${symbol.htmlClose}`;
    });
  });

  Object.keys(lineSymbols).forEach((symbol) => {
    const pattern = escapeRegExp(symbol);
    const regex = new RegExp(pattern, "gim");

    html = html.replace(regex, lineSymbols[symbol]);
  });

  Object.keys(listSymbols).forEach((symbol) => {
    const pattern = `${escapeRegExp(symbol)}(.*?)$`;
    const regex = new RegExp(pattern, "gm");
    html = html.replace(regex, (original, match) => {
      if (match.trim().length === 0) {
        return original;
      }

      return `<${listSymbols[symbol]}>${match.trim()}</${listSymbols[symbol]}>`;
    });
  });

  // Paragraphs
  html = html.replace(/^(?![#>\-*\d ])((?![#>\-*\d ]).+\n?)+/gm, (match) => {
    if (match.trim().startsWith("<hr")) {
      return match;
    }
    return `<p>${match.trim()}</p>`;
  });

  html = wrapListItems(html);

  return html;
};
