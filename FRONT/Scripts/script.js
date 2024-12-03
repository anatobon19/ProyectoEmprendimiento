
const baseURL = "http://127.0.0.1:8000";
window.onload = () => {
    const form = document.querySelector("#formulario");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const data = {
            motivacionEmprender: document.querySelector("#motivacionEmprender").value,
            describenActitud: document.querySelector("#describenActitud").value,
            experienciaPrevia: document.querySelector("#experienciaPrevia").value,
            conocerMercado: document.querySelector("#conocerMercado").value,
            valorInnovacion: document.querySelector("#valorInnovacion").value,
            capacidadProblemas: document.querySelector("#capacidadProblemas").value,
            redContactos: document.querySelector("#redContactos").value,
            camibiosInesperados: document.querySelector("#camibiosInesperados").value,
            enfoqueNegocio: document.querySelector("#enfoqueNegocio").value,
        }
        let response = await fetch(`${baseURL}/datos/create`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
         
            });
        if(response.ok){
            await alert('datos enviados correctamente');
        }else{
            alert('error al enviar los datos');
        }

    })

}

