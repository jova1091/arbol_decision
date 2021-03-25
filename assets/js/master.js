$(document).ready(() => {
    let dataJson        = "";
    const requestURL    = 'data.json';
    const request       = new XMLHttpRequest();
    
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        dataJson = request.response;
        showScreens(dataJson, '');
    }
});

function sendOption(data) {
    let dataJson        = "";
    const requestURL    = 'data.json';
    const request       = new XMLHttpRequest();
    
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        dataJson = request.response;
        $.each(dataJson.pantallas,(i, item)=>{
            if( item.id == data ) {
                let newDataJson = item;
                showScreens(newDataJson, data);
            }
        })
    }
}

function showScreens(jsonObj, term) {

    const tituloGeneralItem     = $("#txtGeneral h3");
    const parrafoGeneralItem    = $("#txtGeneral p");
    const headerOpcionesItem    = $("#header-options");
    const opcionesItem          = $("#options div");

    let tituloGen       = "";
    let parrafoGen      = "";
    let headerOpc       = "";
    let headerOpcClass  = "";
    let opciones        = "";
    let opcionesData    = "";
    
    if(term == '' || term == null){
        tituloGen       = jsonObj.pantallas.pantalla1.titulo;
        parrafoGen      = jsonObj.pantallas.pantalla1.txtGeneral;
        headerOpc       = jsonObj.pantallas.pantalla1.opcContainer.header.content;
        headerOpcClass  = jsonObj.pantallas.pantalla1.opcContainer.header.class;
        opciones        = jsonObj.pantallas.pantalla1.opcContainer.opciones;
    } else {
        tituloGen       = jsonObj.titulo;
        parrafoGen      = jsonObj.txtGeneral;
        headerOpc       = jsonObj.opcContainer.header.content;
        headerOpcClass  = jsonObj.opcContainer.header.class;
        opciones        = jsonObj.opcContainer.opciones;
    }
    
    $.each(opciones,(i, item) => {
        if( item.tipo == "respuesta" ) {
            let opcTemplate = `
            <div class="form-check d-flex flex-column justify-content-start col-md-6 col-sm-12 py-3">
                <label class="form-check-label d-flex flex-column justify-content-start ${item.tipo} ${item.class}" data-option="${item.id}" for="flexRadioDefault${i}">
                    <span class="badge ${item.class}">${item.texto}</span>
                    <img src="${item.imagen}" alt="Imagen ${item.texto}" class="mt-3">
                    <p class="cita">${item.cita}</p>
                </label>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${i}" onclick="sendOption('${item.id}')">
            </div>
            `;
            opcionesData += opcTemplate;
        } else {
            let opcTemplate = `
            <div class="form-check d-flex flex-column justify-content-start col-md-12 col-sm-12 ${item.class}">
                <img src="${item.imagen}" alt="Imagen ${item.texto}">
                <p class="cita ${item.class}">${item.cita}</p>
            </div>
            `;
            opcionesData += opcTemplate;
        }
    })

    tituloGeneralItem.html(tituloGen);
    parrafoGeneralItem.html(parrafoGen);
    headerOpcionesItem.attr('class', "").addClass(headerOpcClass + ' mb-4');
    headerOpcionesItem.html(headerOpc);
    opcionesItem.html(opcionesData);
}