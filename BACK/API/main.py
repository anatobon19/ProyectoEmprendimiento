from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Form(BaseModel):
    motivacionEmprender: int
    describenActitud : int
    experienciaPrevia : int
    conocerMercado : int
    valorInnovacion : int
    capacidadProblemas : int
    redContactos : int
    cambiosInesperados : int
    enfoqueNegocio : int
    emprendimientoImpacto : int


datos_db = {}

@app.get('/datos/',response_model=list[Form])
async def mostrarDatos():
    return list(datos_db.values())


#@app.post('/datos/create', response_model=Form)
