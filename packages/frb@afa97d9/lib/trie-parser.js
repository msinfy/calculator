function makeParserFromTrie(r){var e={};return Object.keys(r.children).forEach(function(n){e[n]=makeParserFromTrie(r.children[n])}),function(n,t){return t=t||identity,function(i,u){return e[i]?e[i](n,function(r){return t(r)(i,u)}):n(r.value,t)(i,u)}}}function identity(r){return r}module.exports=makeParserFromTrie;