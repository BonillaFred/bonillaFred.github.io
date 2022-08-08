import{o as f,c as b,r as g,e as y,n as x,f as u,b as e,d,w as c,u as p,s as v}from"./index.5acbd0a9.js";var m={name:"Divider",props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},computed:{containerClass(){return["p-divider p-component","p-divider-"+this.layout,"p-divider-"+this.type,{"p-divider-left":this.layout==="horizontal"&&(!this.align||this.align==="left")},{"p-divider-center":this.layout==="horizontal"&&this.align==="center"},{"p-divider-right":this.layout==="horizontal"&&this.align==="right"},{"p-divider-top":this.layout==="vertical"&&this.align==="top"},{"p-divider-center":this.layout==="vertical"&&(!this.align||this.align==="center")},{"p-divider-bottom":this.layout==="vertical"&&this.align==="bottom"}]}}};const k={key:0,class:"p-divider-content"};function _(a,l,o,s,i,r){return f(),b("div",{class:x(r.containerClass),role:"separator"},[a.$slots.default?(f(),b("div",k,[g(a.$slots,"default")])):y("",!0)],2)}function w(a,l){l===void 0&&(l={});var o=l.insertAt;if(!(!a||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",o==="top"&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=a:i.appendChild(document.createTextNode(a))}}var z=`
.p-divider-horizontal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    position: relative;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
}
.p-divider-horizontal.p-divider-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-divider-horizontal.p-divider-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-divider-horizontal.p-divider-center {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-divider-content {
    z-index: 1;
}
.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
}
.p-divider-vertical.p-divider-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-divider-vertical.p-divider-center {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-divider-vertical.p-divider-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}
.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}
.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}
.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-left-style: dotted;
}
`;w(z);m.render=_;const C={class:"text-light mt-4 text-start"},D=e("h5",null,"Details of my Work Experience",-1),E=e("div",{class:"container"}," This is where I describe the work experience that I have. As you will soon notice most of my work is as a developer because it is one of the things I find most interesting. ",-1),$=e("b",null,"Developer AltLabs(Ualberta Internship)",-1),I=e("p",null,"DevOps | Developer | Scrum Master",-1),L={class:""},S={class:"bg-dark"},j={class:"container text-center"},T={class:"row"},M=e("div",{class:"col-md text-left d-flex justify-content-center"}," As scrum master I led my time in communicating with already established internal team to add new functionality to web based applications. My team worked on adding visual and logic updates; also paying off technical debt accumulated over time. ",-1),W={class:"col-md text-left d-flex justify-content-center"},A={class:"btn-group-vertical"},N=e("p",null,[e("ul",{class:"list-group list-group-flush"},[e("li",{class:""}," Lead team sprints and organized and maintained project velocity."),e("li",{class:""},"Organized meetings with clients to better develop story points and assign them accordingly.")])],-1),O=e("p",null,[e("ul",{class:"list-group list-group-flush"},[e("li",{class:""},"Introduced the React/Redux framework into current tech stack."),e("li",{class:""},"Introduced RESTful calls to an older back-end tech-stack."),e("li",{class:""},"Introduced react-query to help with continuous data look up from their back-end systems.")])],-1),U=e("p",null,[e("ul",{class:"list-group list-group-flush"},[e("li",null," Managed a temporary test server using nginx to help manage requests. "),e("li",null," Managed support tickets on the server, making sure it was live and active when needed. "),e("li",null," Wrote server launch instructions to re-deploy on other systems. "),e("li",null," Managed and constructed developer backups for what systems would fail. "),e("li",null," Added security stops to prevent attackers from hurting mission critical systems. ")])],-1),B=e("p",null,[e("ul",{class:"list-group list-group-flush"},[e("li",null," Performed automated testing with cypress for UI testing. "),e("li",null," Performed automated ract tests on components. ")])],-1),V=e("b",null,"Math Tutor",-1),R=e("p",null,[e("ul",{class:"list-group list-group-flush"},[e("li",null," Managed my student(s) time to give them a chance to absorb the material. "),e("li",null," Showed leadership when my student(s) became demotivated with their understanding of the material by giving them encouragement and related stories to the material. ")])],-1),P={__name:"WorkExpView",setup(a){const l=u(!1),o=u(!1),s=u(!1),i=u(!1);function r(h){switch(h){case 1:l.value=!0;break;case 2:o.value=!0;break;case 3:s.value=!0;break;case 4:console.log("Name = "+h),i.value=!0;break}}return(h,t)=>(f(),b("div",C,[e("div",null,[D,E,d(p(m),{align:"left",type:"dashed"},{default:c(()=>[$,I]),_:1}),e("div",L,[e("div",S,[e("div",j,[e("div",T,[M,e("div",W,[e("div",A,[e("a",{class:"btn btn-outline-danger",onClick:t[0]||(t[0]=n=>r(1))},"Leadership"),d(p(v),{position:"center",visible:l.value,"onUpdate:visible":t[1]||(t[1]=n=>l.value=n),header:"Leadership"},{default:c(()=>[N]),_:1},8,["visible"]),e("a",{class:"btn btn-outline-danger",onClick:t[2]||(t[2]=n=>r(2))},"Web Development"),d(p(v),{position:"center",visible:o.value,"onUpdate:visible":t[3]||(t[3]=n=>o.value=n),header:"Web Dev Work Exp"},{default:c(()=>[O]),_:1},8,["visible"]),e("a",{class:"btn btn-outline-danger",onClick:t[4]||(t[4]=n=>r(3))},"DevOps"),d(p(v),{position:"center",visible:s.value,"onUpdate:visible":t[5]||(t[5]=n=>s.value=n),header:"DevOps"},{default:c(()=>[U]),_:1},8,["visible"]),e("a",{class:"btn btn-outline-danger",onClick:t[6]||(t[6]=n=>r(4))},"Testing"),d(p(v),{position:"center",visible:i.value,"onUpdate:visible":t[7]||(t[7]=n=>i.value=n),header:"DevOps"},{default:c(()=>[B]),_:1},8,["visible"])])])])])])]),d(p(m),{align:"center",type:"dashed"},{default:c(()=>[V]),_:1}),R])]))}};export{P as default};
