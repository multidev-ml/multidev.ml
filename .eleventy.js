module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("assets")

    

    eleventyConfig.addFilter("makeUppercase", function(s) { 
        if ( typeof s !== 'string') return ''
        let finalString = "" 
        s.split( " " ).forEach((e,k,a) => {
            if ( typeof e === 'string') {
                finalString += k == 0 ? "" : " "
                finalString +=  e[0].toUpperCase() + e.slice(1)
            }})
            

        return finalString;
     });
      eleventyConfig.addFilter( 'keys', obj => Object.keys( obj ) );

      eleventyConfig.addFilter( 'except', ( arr=[] ) => {
          return arr.filter( function( value ) {
              return value != 'all';
          } ).sort();
      } );

      eleventyConfig.addCollection("tagList", collection => {
        const tagsSet = new Set();
        collection.getAll().forEach(item => {
          if (!item.data.tags) return;
          item.data.tags
            .filter(tag => !['post', 'all',"main", "top","policy"].includes(tag))
            .forEach(tag => tagsSet.add(tag));
        });
        return Array.from(tagsSet).sort();
      });

    return {
        passthroughFileCopy : true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir : {
            input: "src",
            output: "_site",
            include: "includes",
            layouts: "includes"

        }
    }
}