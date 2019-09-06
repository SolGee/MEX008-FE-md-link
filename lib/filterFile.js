const getMarkdownIt = require('markdown-it');
const md = getMarkdownIt();

const filterFile = (data, endPath) => {
    const markdownContent = md.parseInline(data, {});
    const tokens = markdownContent[0].children;
    const filterTokens = [];
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i].type === 'link_open'){
            filterTokens.push({
                href : tokens[i].attrs[0][1],
                text : tokens[i+1].content,
                path : endPath
            });
        }
    }
    return filterTokens;

};

module.exports = filterFile;
