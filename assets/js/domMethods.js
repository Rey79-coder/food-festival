require("bootstrap");
const createEl = require("./domMethods");

const el = document.createElement(htmlString);

const createLoremIpsum = require("./helpers");

            const containerEl1 = createEl("div", {class: "container mt-5"}, 
      createEl("div", {class: "card mb-5"}, 
          createEl("h5", {class: "card-header"}, "Day 1"),
          ...createCards(events.slice(0,3))
      )
      )
  
      const containerEl2 = createEl("div", {class: "container"}, 
      createEl("div", {class: "card mb-5"}, 
          createEl("h5", {class: "card-header"}, "Day 2"),
          ...createCards(events.slice(3,6))
      )
      )
  
      const containerEl3 = createEl("div", {class: "container"}, 
      createEl("div", {class: "card mb-5"}, 
          createEl("h5", {class: "card-header"}, "Day 3"),
          ...createCards(events.slice(6,9))
      )
      )
  
      pageEl.appendChild(containerEl1);
      pageEl.appendChild(containerEl2);
      pageEl.appendChild(containerEl3);
    
  
    if(window.location.href.indexOf("event") > -1) {
      const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
          title: "Title Placeholder",
          subtitle: "",
          description: ""
      };
  
      $(document).ready(function() {
        function createEl(htmlString, attrs, ...children) {
          if (typeof htmlString !== "string") {
            throw Error("Argument 'htmlString' is required and must be a string");
          }
        
        
          if (typeof attrs === "object") {
            for (let key in attrs) {
              if (key.substring(0, 2) === "on") {
                el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
              } else {
                el.setAttribute(key, attrs[key]);
              }
            }
          }
        
          children.forEach(function(child) {
            let node;
        
            if (child.constructor.name.includes("Element")) {
              node = child;
            } else {
              node = document.createTextNode(child);
            }
        
            el.appendChild(node);
          });
        
          return el;
        };


      const pageEl = document.querySelector("#page");
      
      const containerEl = createEl("div", {class: "container"},
        createEl("div", {class: "card mb-3"}, 
          createEl("img", {class: "card-img-top", style: "width: 5px", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
          createEl("div", {class: "card-body"}, 
            createEl("h1", {class: "card-title"}, currentEvent.title || ""),
            createEl("h2", {class: "text-muted"}, currentEvent.subtitle || ""),
            createEl("p", {class: "card-text mt-3"}, currentEvent.description || createLoremIpsum(100)),
            createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
          )
        ),
        
      )
      pageEl.appendChild(containerEl)
    },)

            const start = dateConverter(calEvent.start);
            localStorage.setItem("currentEvent", JSON.stringify({
                title: calEvent.title,
                subtitle: start,
                description: calEvent.description,
                image: calEvent.image
            }))
            
            window.location.href = "events.html"
        
            };



module.exports = createEl;