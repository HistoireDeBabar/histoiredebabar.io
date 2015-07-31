function showHide(e,t,n,i){setTimeout(function(){t.classList.add("hide"),e.classList.remove("hide"),e.classList.add("show"),t.classList.remove("show"),i()},n)}var jsDesc="Javascript is one of the most ubiquitous programming languages in the world.  Appearing on almost every device, from mobile to desktop computers, across browsers and operating systems.  Traditionally javascript has been used in front-end development to provide rich user experiences for web users.  However, Javascript is no longer considered merely a front-end language.  My experiences of using Javascript are extensive.  Through developing front-end	applications using Angular, Knockout and vanilla Javascript I have developed an understanding of fundamental design patterns using Javascript.  Furthermore, by developing applications running in nodeJS and Lambda functions on AWS I have gained experience in writing modular code that runs back-end services.",netDesc="Professionally I work on several .NET solutions.  These solutions are all web based using ASP.NET.  They range from all encompassing MVC projects to Web API projects.  They entail various system architectures from N-Tier to CQRS.  These solutions also use various Datastorage technologies, from SQL to NoSQL.  Building full stack web applications in .NET also provides experience in system architecture to front-end UX.  Furthermore, developing on a wide range of solutions provide an understanding and appreciation for both monolithic and microservice based applications. The primary .NET project I work upon is a scalable, cloud based solution which provides a remarketing solution for clients.  This project records hundreds of thousands impressions from various clients websites and retargets there clients with products they have abandoned.",iOSDesc="For hobby projects I have developed multiple iOS applications.  From simple applications that merely interact with REST APIs to display information, or trigger events (such as a home automation system).  To a larger project that requires full stack development, including a REST API as well as an iOS client. I have developed these applications using Swift and the Apple SDKs. ",pyDesc="I regularly attend Python North East, a Python meetup group.  These meetups allow me to draw upon the experience and knowledge of others to develop my own small projects in Python.  I’ve used various Python frameworks from Django, Flask and with the Google App Enginge.  These projects are usually trivial, for my own pleasure and enjoyment.  Nevertheless, I still have experience and knowledge of writing programs in Python and have taken numerous Pluralsight and Udacity courses based in Python.",model={sections:[{name:"iOS",abr:"iOS",description:iOSDesc},{abr:"Py",name:"Python",description:pyDesc},{name:".NET",abr:".NET",description:netDesc},{abr:"JS",name:"JavaScript",description:jsDesc}],contact:{twitter:{username:"@HistoireDeBabar",url:"https://twitter.com/histoiredebabar"}}},controller={init:function(){},getSections:function(){return model.sections},clicked:function(e,t){return function(){var n=e.classList.toggle("animate"),i=e.childNodes[0],o=e.childNodes[1];n?showHide(o,i,1500,function(){e.appendChild(t)}):showHide(i,o,1500,function(){e.removeChild(t)})}},getTwitter:function(){return model.contact.twitter}},sections_view={sections:void 0,init:function(){this.sections=document.createElement("div"),document.body.appendChild(this.sections),this.render()},render:function(){for(var e=controller.getSections(),t=e.length-1;t>=0;t--){var n=document.createElement("div"),i=document.createElement("h3"),o=document.createElement("span"),s=document.createElement("span");s.innerHTML=e[t].name,s.classList.add("visuallyHiden"),s.classList.add("hide"),o.innerHTML=e[t].abr,o.classList.add("shown"),i.appendChild(o),i.appendChild(s),n.classList.add("section"),t%2===0?n.classList.add("even"):n.classList.add("odd");var a=document.createElement("p");a.innerHTML=e[t].description,i.addEventListener("click",controller.clicked(i,a)),n.appendChild(i),this.sections.appendChild(n)}}},footer_view={foot:void 0,init:function(){this.foot=document.createElement("footer"),document.body.appendChild(this.foot),this.render()},render:function(){var e=controller.getTwitter(),t=document.createElement("a"),n=document.createElement("span");n.classList.add("ico"),n.classList.add("tweet"),t.setAttribute("href",e.url),t.appendChild(n),this.foot.appendChild(t)}};!function(){sections_view.init(),footer_view.init()}();