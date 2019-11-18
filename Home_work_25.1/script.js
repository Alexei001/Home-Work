


     async function getPOD(dates, renderComponent) {
        const result = await fetch(`#https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dates}&hd=true`);
        const data = await result.json();
        renderComponent(data)
    }
    
    
    function renderPODComponent(data) {
        const { url, copyright, date,  title} = data;
        const container = document.getElementById('pod-list');

        const titleComponent = document.createElement('h2');
        titleComponent.innerText = `${title} : ${date}`;

        const imageComponent = document.createElement('img');
        imageComponent.src = url;
        imageComponent.style.width = '90%'; 
        imageComponent.style.height = '80%'; 

        const copyrightComponent = document.createElement('p');
        copyrightComponent.innerText = copyright;
        container.append(...[titleComponent,imageComponent, copyrightComponent])
    }
    document.getElementById("prev-Day").onclick = prevDay;
    document.getElementById("next-Day").onclick = nextDay;


    
    function prevDay(){

    }
    function nextDay(){

    }

    ['2019-11-16'].forEach(dates => {
        getPOD(dates, renderPODComponent)
    })
  