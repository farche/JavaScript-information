
    const content = [
        [
          "React is extremely popular",
          "It makes building complex, interactive UIs a breeze",
          "It's powerful & flexible",
          "It has a very active and versatile ecosystem"
        ],
        [
          "Components, JSX & Props",
          "State",
          "Hooks (e.g., useEffect())",
          "Dynamic rendering"
        ],
        [
          "Official web page (react.dev)",
          "Next.js (Fullstack framework)",
          "React Native (build native mobile apps with React)"
        ],
        [
          "1",
          "2",
          "3"
        ]
      ];
    
    
  
  
  let btnWhyReact = document.getElementById("why-react");
  let btnCoreFeatures = document.getElementById("core-features");
  let btnRelatedResources = document.getElementById("related-resources");
  let tabContent = document.getElementById("tab-content");
  let tab = document.getElementById("addbutton");
  
  
  
  console.log(btnWhyReact);
  console.log(btnCoreFeatures);
  console.log(btnRelatedResources);
  
  btnWhyReact.addEventListener("click", () => funkcija("btnWhyReact"));
  btnCoreFeatures.addEventListener("click", () => funkcija("btnCoreFeatures"));
  btnRelatedResources.addEventListener("click", () =>
    funkcija("btnRelatedResources"));
   tab.addEventListener("click", () =>
    funkcija("addbutton")


  );


  funkcija("btnWhyReact");

  function funkcija(odbranoKopche) {
    if (odbranoKopche == "btnWhyReact") {
      const list = document.createElement("ul");
      tabContent.innerHTML = "";
      //
      let prvDel = content[0];
      let novaPromenliva = "";
  
      for (let i = 0; i < prvDel.length; i++) {
        novaPromenliva += `<li>${prvDel[i]}</li>`;
      }
  
      //
      list.innerHTML = novaPromenliva;
      tabContent.append(list);
    } else if (odbranoKopche == "btnCoreFeatures") {
      const list = document.createElement("ul");
      tabContent.innerHTML = "";
      // list.innerHTML=content[1];
  
      let promenliva = content[1];
      let novString = "";
  
      for (let i = 0; i <= promenliva.length; i++) {
        novString += `<li> ${promenliva[i]} </li>`;
      }
  
      list.innerHTML = novString;
  
      tabContent.append(list);
    } else if (odbranoKopche == "btnRelatedResources") {
      const list = document.createElement("ul");
      tabContent.innerHTML = "";
      // list.innerHTML=content[2];
  
      let tretDel = content[2];
      let novString = "";
      for (let i = 0; i <= tretDel.length; i++) {
        novString += `<li> ${tretDel[i]} </li>`;
      }
  
      list.innerHTML = novString;
  
      tabContent.append(list);
    }
  }
  
  