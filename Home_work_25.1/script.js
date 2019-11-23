 
    let today =new Date();
    let year= today.getFullYear(), month = today.getMonth(), Date1 = today.getDate();
    let Day = `${year}-${month+1}-${Date1}`;
    console.log(Day);
    let arrDay = Day.split('-');
    //console.log(arrDay);

    let Render = getPOD(Day, renderPODComponent);
    function prevDay(){
      //delete Render;
      Date1 = --Date1;
      //console.log(Date1);
      Day = `${year}-${month+1}-${Date1}`;
      //console.log(Day);
      getPOD(Day, renderPODComponent);
    }

    function nextDay(){
      //delete Render;
      Date1 = ++Date1;
      //console.log(Date1);
      Day = `${year}-${month+1}-${Date1}`;
      //console.log(Day);
      getPOD(Day, renderPODComponent);
    }
    

    async function getPOD(Day, renderComponent) {
      const result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${Day}`);
      const data = await result.json();
      renderComponent(data)
    }
   
  function renderPODComponent(data) {
      const { url, copyright, title} = data;
      const container = document.getElementById('pod-list');
      const titleComponent = document.createElement('h2');
      titleComponent.innerText = title +':'+Day;
      const imageComponent = document.createElement('img');
      imageComponent.src = url;
      imageComponent.style.width = '200px'; 
      const copyrightComponent = document.createElement('p');
      copyrightComponent.innerText = copyright;
      container.append(...[titleComponent,imageComponent, copyrightComponent])
  }