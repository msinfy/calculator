var DomUtils=require("../..");exports.name="Get outer HTML",exports.getElements=function(t){return'<tag1 id="asdf"> <script>text</script> <!-- comment --> <tag2> text </tag2></tag1>'},exports.getByFunction=function(t){return DomUtils.getOuterHTML(DomUtils.getElementById("asdf",t,!0))},exports.expected='<tag1 id="asdf"> <script>text</script> <!-- comment --> <tag2> text </tag2></tag1>';