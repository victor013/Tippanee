//Dashboard
$.templates("dashDOM", '<div id="weaver-dash" class="weaver-dash-max wd-opa"><div id="warrow" class="ww ww-angle-right" aria-hidden="true" title="Toggle Dashboard"></div><div id="weaver-toolbar"><div id="wlogin" class="ww ww-user wbutton wdark" aria-hidden="true" title="Sign Up / Log In" style="float:right!important"></div><div id="wwebodata" class="ww ww-cubes wbutton wdark" aria-hidden="true" title="Visualize" style="float:right!important"></div><div id="wsearch" class="ww ww-search wbutton wdark" aria-hidden="true" title="Search" style="float:right!important"></div><textarea id="weaverSrcBar" placeholder="Search" style="float:right!important"></textarea><div id="wtarget" class="ww ww-crosshairs wbutton wdark" aria-hidden="true" title="Annotate" style="float:right!important"></div></div><div id="weaver-frame"><div class="wdashtabs"><button class="wtablinks" style="width:50%!important;border-radius:4px 0 0 4px!important" id="wanchTab" title="Annotations"><div class="ww ww-square-o"></div></button> <button class="wtablinks" style="width:50%!important;border-radius:0 4px 4px 0!important" id="wbrowTab" title="Archive"><div class="ww ww-clone"></div></button></div><div id="wanchs" class="wtabcontents" style="text-align:center"></div><div id="wbrows" class="wtabcontents" style="text-align:center"></div></div></div>');

//Annotation
$.templates("weaverNote", '<div class="weaver-container"><div class="weaver-header">{{:addedon}}</div><div class="weaver-anno">{{:selectedtext}}</div><div class="weaver-old-comments"></div><textarea class="weaver-new-comments" placeholder="Add a note..."></textarea><div class="weaver-options"><div id="deleter" class="weaver-button ww ww-trash" title="Delete note"></div><div id="descriptor" class="weaver-button ww ww-info-circle" title="Describe anchor"></div><div id="transcludor" class="weaver-button ww ww-code" title="Transclude note"></div><div id="linker" class="weaver-button ww ww-link" title="Link note"></div><div id="reconstructor" class="weaver-button ww ww-cogs" title="Recontruct anchor"></div></div></div>');

//Orphans
$.templates("o-weaverNote", '<div class="weaver-container"> <div class="weaver-header">{{:addedon}}</div> <div class="o-weaver-anno">{{:selectedtext}}</div> <div class="weaver-old-comments"></div> <textarea class="weaver-new-comments" placeholder="Add a note..."></textarea> <div class="weaver-options"><div id="deleter" class="weaver-button ww ww-trash" title="Delete note"></div><div id="descriptor" class="weaver-button ww ww-info-circle" title="Describe anchor"></div><div id="linker" class="weaver-button ww ww-link" title="Link note"></div><div id="reconstructor" class="weaver-button ww ww-cogs" title="Recontruct anchor"></div></div> </div>');

//Semantic Description
$.templates("descriptorContainer", '<div class="descriptor-container"> <div class="weaver-header">Describe Anchor</div> <textarea class="old-description" readonly></textarea> <select class="descriptor-dropdown" name="schemaThingsdd" id="schemathingsdd"> <option value="">What is the annotation about?</option> <option value="crwO">CreativeWork</option> <option value="eveN">Event</option> <option value="orgA">Organization</option> <option value="perS">Person</option> <option value="plaC">Place</option> <option value="proD">Product</option> </select> <form id="descriptionInput"> </form> </div>');

//Linker
$.templates("weaverLink", '<div class="linker-anno">{{:selectedtext}}</div> <div class="weaver-options"></div> <div class="linker-header" title="{{:urlProtocol}}//{{:urlHost}}{{:urlPathname}}">{{:urlProtocol}}//{{:urlHost}}{{:urlPathname}}</div>');

//Browse Annotation
$.templates("browserNote", '<div class="browser-header">{{:addedon}}</div> <div class="browser-anno">{{:selectedtext}}</div> <div class="browser-old-comments"></div>  <div class="browser-header" title="{{:urlProtocol}}//{{:urlHost}}{{:urlPathname}}">{{:urlProtocol}}//{{:urlHost}}{{:urlPathname}}</div>');

//Semantic Inputs -- Creative Work
$.templates("crwO", '<input class="wdesinput" type="text" name="wdes" placeholder="description"> <input class="wdesinput" type="text" name="waud" placeholder="audienceType"> <input class="wdesinput" type="text" name="waut" placeholder="author"> <input class="wdesinput" type="text" name="wcit" placeholder="citation"> <input class="wdesinput" type="text" name="wgen" placeholder="genre"> <input class="wdesinput" type="text" name="wlan" placeholder="inLanguage"> <input class="wdesinput" type="text" name="wkey" placeholder="keywords"> <div class="description-options"><div id="desclear" class="weaver-button ww ww-minus-square" title="Clear"></div><div id="desadd" class="weaver-button ww ww-plus-square" title="Add"></div></div>');

//Semantic Inputs -- Event
$.templates("eveN", '<input class="wdesinput" type="text" name="wdes" placeholder="description"> <input class="wdesinput" type="text" name="wdot" placeholder="doorTime"> <input class="wdesinput" type="text" name="wdur" placeholder="duration"> <input class="wdesinput" type="text" name="wsda" placeholder="startDate"> <input class="wdesinput" type="text" name="weda" placeholder="endDate"> <input class="wdesinput" type="text" name="wlan" placeholder="inLanguage"> <input class="wdesinput" type="text" name="wloc" placeholder="location"> <input class="wdesinput" type="text" name="worg" placeholder="organizer"> <input class="wdesinput" type="text" name="wper" placeholder="performer"> <div class="description-options"> <div id="desclear" class="weaver-button ww ww-minus-square" title="Clear"></div><div id="desadd" class="weaver-button ww ww-plus-square" title="Add"></div></div>');

//Semantic Inputs -- Organization
$.templates("orgA", '<input class="wdesinput" type="text" name="wdes" placeholder="description"> <input class="wdesinput" type="text" name="wadd" placeholder="address"> <input class="wdesinput" type="text" name="wbra" placeholder="brand"> <input class="wdesinput" type="text" name="wdep" placeholder="department"> <input class="wdesinput" type="text" name="weml" placeholder="email"> <input class="wdesinput" type="text" name="wloc" placeholder="location"> <input class="wdesinput" type="text" name="wtel" placeholder="telephone"> <div class="description-options"> <div id="desclear" class="weaver-button ww ww-minus-square" title="Clear"></div><div id="desadd" class="weaver-button ww ww-plus-square" title="Add"></div></div>');

//Semantic Inputs -- Person
$.templates("perS", '<input class="wdesinput" type="text" name="wdes" placeholder="description"> <input class="wdesinput" type="text" name="wana" placeholder="alternateName"> <input class="wdesinput" type="text" name="wimg" placeholder="image"> <input class="wdesinput" type="text" name="wsas" placeholder="sameAs"> <div class="description-options"> <div id="desclear" class="weaver-button ww ww-minus-square" title="Clear"></div><div id="desadd" class="weaver-button ww ww-plus-square" title="Add"></div></div>');

//Semantic Inputs -- Place
$.templates("plaC", '<input class="wdesinput" type="text" name="wdes" placeholder="description"> <input class="wdesinput" type="text" name="wadd" placeholder="address"> <input class="wdesinput" type="text" name="wohs" placeholder="openingHoursSpecification"> <input class="wdesinput" type="text" name="wimg" placeholder="image"> <input class="wdesinput" type="text" name="wsas" placeholder="sameAs"> <div class="description-options"> <div id="desclear" class="weaver-button ww ww-minus-square" title="Clear"></div><div id="desadd" class="weaver-button ww ww-plus-square" title="Add"></div></div>');

//Semantic Inputs -- Products
$.templates("proD", '<input class="wdesinput" type="text" name="waud" placeholder="audienceType"> <input class="wdesinput" type="text" name="wbra" placeholder="brand"> <input class="wdesinput" type="text" name="wcat" placeholder="category"> <input class="wdesinput" type="text" name="wman" placeholder="manufacturer"> <input class="wdesinput" type="text" name="wmod" placeholder="model"> <div class="description-options"> <div id="desclear" class="weaver-button ww ww-minus-square" title="Clear"></div><div id="desadd" class="weaver-button ww ww-plus-square" title="Add"></div></div>');