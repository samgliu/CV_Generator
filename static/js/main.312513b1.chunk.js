(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{33:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),o=n(9),c=n.n(o),u=n(2),r=n(26),s=n(0),d=function(t){var e=t.status,n=t.info;function i(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{children:["Information",Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingStatus("information")},children:"\u270e"})]}),"Name: ",n.firstname," ",n.lastname," ",Object(s.jsx)("br",{}),"Phone: ",n.phone,Object(s.jsx)("br",{}),"Email: ",n.email]})}return Object(s.jsx)("div",{children:function(n){return e.information?function(e){var n=e.firstname,i=e.lastname,a=e.phone,o=e.email;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{children:["Information",Object(s.jsx)("button",{type:"button",onClick:function(){t.saveInfo(n,i,a,o)},children:"\u2714"})]}),"Name:\xa0",Object(s.jsx)("input",{className:"skillinputbox",type:"text",defaultValue:n,onChange:function(t){n=t.target.value}}),Object(s.jsx)("input",{className:"skillinputbox",type:"text",defaultValue:i,onChange:function(t){i=t.target.value}}),Object(s.jsx)("br",{}),"Phone:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:a,onChange:function(t){a=t.target.value}}),Object(s.jsx)("br",{}),"Email:\xa0\xa0",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:o,onChange:function(t){o=t.target.value}})]})}(n):i()}(n)})},l=n(4),j=n.n(l),b=function(t){var e=t.status,n=t.summary;function i(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{children:["Summary",Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingStatus("summary")},children:"\u270e"})]}),n.text]})}return Object(s.jsx)("div",{children:function(n){return e.summary?function(e){var n=e.text;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{children:["Summary",Object(s.jsx)("button",{type:"button",onClick:function(){t.saveSummary(n)},children:"\u2714"})]}),Object(s.jsx)("textarea",{className:"summaryinputbox",type:"text",rows:"5",defaultValue:n,onChange:function(t){n=t.target.value}})]},j()())}(n):i()}(n)})},m=function(t){var e=t.cars,n=t.status;return Object(s.jsxs)("div",{children:[function(e){return e.career?function(){var e,n,i,a,o=j()();return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Career"}),Object(s.jsxs)("span",{children:["Time:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:e,onChange:function(t){e=t.target.value}}),"Company:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:n,onChange:function(t){n=t.target.value}}),"Position:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:i,onChange:function(t){i=t.target.value}}),Object(s.jsx)("button",{type:"button",onClick:function(){void 0!==n?t.onCarAddClick(o,e,n,i,a):t.dodgeAddingStatus("career")},children:"\u2714"}),Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingStatus("career")},children:"\u2716"}),Object(s.jsx)("br",{}),"Description:",Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{type:"text",className:"summaryinputbox",rows:"5",defaultValue:a,onChange:function(t){a=t.target.value}})]},o)]})}():Object(s.jsxs)("h3",{children:["Career\xa0",Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingStatus("career")},children:"\u271a"})]})}(n),function(e){return e.map((function(e){return e.editing?function(e){var n=e.id,i=e.text.time,a=e.text.companyname,o=e.text.position,c=e.text.description;return Object(s.jsxs)("span",{children:["Time:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:i,onChange:function(t){i=t.target.value}}),"Company:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:a,onChange:function(t){a=t.target.value}}),"Position:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:o,onChange:function(t){o=t.target.value}}),Object(s.jsx)("button",{type:"button",onClick:function(){t.saveCarEdition(n,i,a,o,c)},children:"\u2714"}),Object(s.jsx)("br",{}),"Description:",Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{type:"text",className:"summaryinputbox",rows:"5",defaultValue:c,onChange:function(t){c=t.target.value}})]},n)}(e):(n=e,Object(s.jsxs)("li",{children:[n.text.time,"\xa0 \xa0Company:\xa0",n.text.companyname,"\xa0 \xa0Position:\xa0",n.text.position,Object(s.jsx)("button",{type:"button",onClick:function(){t.onCarEditClick(n.id)},children:"\u270e"}),Object(s.jsx)("button",{type:"button",onClick:function(){t.onCarDelClick(n.id)},children:"\u2716"}),Object(s.jsx)("br",{}),n.text.description]},n.id));var n}))}(e)]})},x=function(t){var e=t.edus,n=t.status;return Object(s.jsxs)("div",{children:[function(e){return e.education?function(){var e,n,i,a=j()();return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Education"}),Object(s.jsxs)("span",{children:["Time:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:e,onChange:function(t){e=t.target.value}}),"School:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:n,onChange:function(t){n=t.target.value}}),"Major:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:i,onChange:function(t){i=t.target.value}}),Object(s.jsx)("button",{type:"button",onClick:function(){void 0!==n?t.onEduAddClick(a,e,n,i):t.dodgeAddingStatus("education")},children:"\u2714"}),Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingStatus("education")},children:"\u2716"})]},a)]})}():Object(s.jsxs)("h3",{children:["Education\xa0",Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingStatus("education")},children:"\u271a"})]})}(n),function(e){return e.map((function(e){return e.editing?function(e){var n=e.id,i=e.text.time,a=e.text.schoolname,o=e.text.major;return Object(s.jsxs)("span",{children:["Time:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:i,onChange:function(t){i=t.target.value}}),"School:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:a,onChange:function(t){a=t.target.value}}),"Major:",Object(s.jsx)("input",{className:"midinputbox",type:"text",defaultValue:o,onChange:function(t){o=t.target.value}}),Object(s.jsx)("button",{type:"button",onClick:function(){t.saveEduEdition(n,i,a,o)},children:"\u2714"})]},n)}(e):function(e){return Object(s.jsxs)("li",{children:[e.text.time,"\xa0\xa0",e.text.schoolname,"\xa0\xa0",e.text.major,Object(s.jsx)("button",{type:"button",onClick:function(){t.onEduEditClick(e.id)},children:"\u270e"}),Object(s.jsx)("button",{type:"button",onClick:function(){t.onEduDelClick(e.id)},children:"\u2716"})]},e.id)}(e)}))}(e)]})},f=function(t){var e=t.skills,n=t.status;return Object(s.jsxs)("div",{children:[function(e){return e.skills?function(){var e,n=j()();return Object(s.jsxs)("h3",{children:["Skill\xa0",Object(s.jsxs)("span",{children:[Object(s.jsx)("input",{className:"skillinputbox",type:"text",defaultValue:e,onChange:function(t){e=t.target.value}}),Object(s.jsx)("button",{type:"button",onClick:function(){void 0!==e?t.onSkillAddClick(n,e):t.dodgeAddingSkill("skills")},children:"\u2714"}),Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingSkill("skills")},children:"\u2716"})]},n)]})}():Object(s.jsxs)("h3",{children:["Skill\xa0",Object(s.jsx)("button",{type:"button",onClick:function(){t.dodgeAddingSkill("skills")},children:"\u271a"})]})}(n),function(e){return e.map((function(e){return e.editing?function(e){var n=e.text;return Object(s.jsxs)("span",{children:[Object(s.jsx)("input",{className:"skillinputbox",type:"text",defaultValue:n,onChange:function(t){n=t.target.value}}),Object(s.jsx)("button",{type:"button",onClick:function(){t.saveSkillEdition(e.id,n)},children:"\u2714"})]},e.id)}(e):function(e){return Object(s.jsxs)("span",{children:[e.text,Object(s.jsx)("button",{type:"button",onClick:function(){t.onSkillEditClick(e.id)},children:"\u270e"}),Object(s.jsx)("button",{type:"button",onClick:function(){t.onSkillDelClick(e.id)},children:"\u2716"}),"\xa0\xa0"]},e.id)}(e)}))}(e)]})},p=(n(33),n(43));function O(){return Object(s.jsx)(p.a,{style:{borderBottomColor:"black",borderBottomWidth:1}})}var h=function(){var t=Object(i.useState)({addingStatus:{information:!1,summary:!1,career:!1,education:!1,skills:!1},information:{firstname:"John",lastname:"Doe",phone:"123-456-7890",email:"email@test.com"},summary:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},career:[{id:j()(),text:{time:"2020-2021",companyname:"Some Company Name",position:"Software Engineer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},editing:!1},{id:j()(),text:{time:"2019-2020",companyname:"Other Company Name",position:"Other Software Engineer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},editing:!1}],education:[{id:j()(),text:{time:"2021-2021",schoolname:"Internet School",major:"Computer Science"},editing:!1},{id:j()(),text:{time:"2020-2020",schoolname:"Reality School",major:"Living"},editing:!1}],skills:[{text:"Coding",id:j()(),editing:!1},{text:"Reading",id:j()(),editing:!1}]}),e=Object(r.a)(t,2),n=e[0],a=e[1],o=function(t){var e=n.career;e.forEach((function(e){e.id===t&&(e.editing?e.editing=!1:e.editing=!0)})),a(Object(u.a)(Object(u.a)({},n),{},{career:e}))},c=function(t){var e=n.education;e.forEach((function(e){e.id===t&&(e.editing?e.editing=!1:e.editing=!0)})),a(Object(u.a)(Object(u.a)({},n),{},{education:e}))},l=function(t){var e=n.skills;e.forEach((function(e){e.id===t&&(e.editing?e.editing=!1:e.editing=!0)})),a(Object(u.a)(Object(u.a)({},n),{},{skills:e}))},p=function(t){var e=n.addingStatus;n.addingStatus[t]?e[t]=!1:e[t]=!0,a(Object(u.a)(Object(u.a)({},n),{},{addingStatus:e}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"CV Generator"}),Object(s.jsx)(O,{}),Object(s.jsx)(d,{info:n.information,status:n.addingStatus,dodgeAddingStatus:function(t){return p(t)},saveInfo:function(t,e,i,o){return function(t,e,i,o){var c=n.information;c.firstname=t,c.lastname=e,c.phone=i,c.email=o,a(Object(u.a)(Object(u.a)({},n),{},{information:c})),p("information")}(t,e,i,o)}}),Object(s.jsx)(O,{}),Object(s.jsx)(b,{summary:n.summary,status:n.addingStatus,dodgeAddingStatus:function(t){return p(t)},saveSummary:function(t){return function(t){var e=n.summary;e.text=t,a(Object(u.a)(Object(u.a)({},n),{},{summary:e})),p("summary")}(t)}}),Object(s.jsx)(O,{}),Object(s.jsx)(m,{cars:n.career,status:n.addingStatus,onCarAddClick:function(t,e,i,o,c){return function(t,e,i,o,c){var r=n.career;r.push({id:t,text:{time:e,companyname:i,position:o,description:c},editing:!1}),a(Object(u.a)(Object(u.a)({},n),{},{career:r}))}(t,e,i,o,c)},onCarEditClick:function(t){o(t)},onCarDelClick:function(t){return function(t){var e=n.career.filter((function(e){return e.id!==t}));a(Object(u.a)(Object(u.a)({},n),{},{career:e}))}(t)},saveCarEdition:function(t,e,i,o,c){return function(t,e,i,o,c){var r=n.career;r.forEach((function(n){n.id===t&&(n.id=t,n.text={time:e,companyname:i,position:o,description:c},n.editing=!1)})),a(Object(u.a)(Object(u.a)({},n),{},{career:r})),l(t)}(t,e,i,o,c)},dodgeAddingStatus:function(t){return p(t)}}),Object(s.jsx)(O,{}),Object(s.jsx)(x,{edus:n.education,status:n.addingStatus,onEduAddClick:function(t,e,i,o){return function(t,e,i,o){var c=n.education;c.push({id:t,text:{time:e,schoolname:i,major:o},editing:!1}),a(Object(u.a)(Object(u.a)({},n),{},{education:c}))}(t,e,i,o)},onEduEditClick:function(t){c(t)},onEduDelClick:function(t){return function(t){var e=n.education.filter((function(e){return e.id!==t}));a(Object(u.a)(Object(u.a)({},n),{},{education:e}))}(t)},saveEduEdition:function(t,e,i,o){return function(t,e,i,o){var c=n.education;c.forEach((function(n){n.id===t&&(n.id=t,n.text={time:e,schoolname:i,major:o},n.editing=!1)})),a(Object(u.a)(Object(u.a)({},n),{},{education:c})),l(t)}(t,e,i,o)},dodgeAddingStatus:function(t){return p(t)}}),Object(s.jsx)(O,{}),Object(s.jsx)(f,{skills:n.skills,status:n.addingStatus,onSkillAddClick:function(t,e){return function(t,e){var i=n.skills;i.push({text:e,id:t,editing:!1}),a(Object(u.a)(Object(u.a)({},n),{},{skills:i}))}(t,e)},onSkillEditClick:function(t){l(t)},onSkillDelClick:function(t){return function(t){var e=n.skills.filter((function(e){return e.id!==t}));a(Object(u.a)(Object(u.a)({},n),{},{skills:e}))}(t)},saveSkillEdition:function(t,e){return function(t,e){var i=n.skills;i.forEach((function(n){n.id===t&&(n.text=e)})),a(Object(u.a)(Object(u.a)({},n),{},{skills:i})),l(t)}(t,e)},dodgeAddingSkill:function(t){return p(t)}})]})};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.312513b1.chunk.js.map