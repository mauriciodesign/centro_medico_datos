// titulo
document.getElementById("title").innerHTML = ('Estadisticas Centro Medico Ñuñoa');

var radiologia = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    },
];

var traumatologia = [
    {
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    },
];

var dental = [
    {
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    },
];

//Agregar código para el desafio 2 aquí


// Se agrega con push nuevos datos en traumatologia

traumatologia.push(
{
    hora: '09:00',
    especialista: 'RENÉ POBLETE',
    paciente: 'ANA GELLONA ',
    rut: '13123329-7',
    prevision: 'ISAPRE'
}, 
{
    hora: '09:30',
    especialista: 'MARIA SOLAR',
    paciente: 'RAMIRO ANDRADE',
    rut: '12221451-K',
    prevision: 'FONASA'
}, 
{
    hora: '10:00',
    especialista: 'RAUL LOYOLA',
    paciente: 'CARMEN ISLA',
    rut: '10112348-3',
    prevision: 'ISAPRE'
}, 
{
    hora: '10:30',
    especialista: 'ANTONIO LARENAS',
    paciente: 'PABLO LOAYZA',
    rut: '13453234-1',
    prevision: 'ISAPRE'
}, 
{
    hora: '12:00',
    especialista: 'MATIAS ARAVENA ',
    paciente: 'SUSANA POBLETE',
    rut: '14345656-6',
    prevision: 'FONASA'
}
);
// visualizar cambios de traumatologia
console.log(traumatologia);


// Se elimina el primer y último elemento del arreglo de Radiología
radiologia.shift();
radiologia.pop();

// visualizar cambios de radiologia
console.log(radiologia);


// consultas médicas de Dental
var dent = [];
var ArrayDent = [];
for (var x = 0; x < dental.length; x++) {
    ArrayDent[0] = dental[x].hora;
    ArrayDent[1] = dental[x].paciente;
    ArrayDent[2] = dental[x].rut;
    ArrayDent[3] = dental[x].especialista;
    ArrayDent[4] = dental[x].prevision;
    dent.push(ArrayDent);
    ArrayDent = [];
}

for (var u = 0; u < dent.length; u++) {
    document.getElementById('dental_consultas').innerHTML += '<p>' + dent[u].join(' - ') + '</p>';
}



//  listado total de todos los pacientes

var nuevaArray = radiologia.concat(traumatologia, dental);

nuevaArray.forEach(nuevaArray => {
    let pacientes = nuevaArray.paciente;

    document.getElementById('listado_pacientes').innerHTML += "<p> " + pacientes + "<p> ";
});



// Se cambia la prevision en Dental, aquellas que indican ser FONASA se cambia por ISAPRE y viceversa

var fonasa = 'FONASA'
var isapre = 'ISAPRE'

dental.map(function (dato) {
    if (dato.prevision === fonasa) {
        dato.prevision = isapre;
    } else if (dato.prevision === isapre) {
        dato.prevision = fonasa;
    }
      return dato;
});

var prev = [];
var ArrayPrev = [];
for (let x = 0; x < dental.length; x++) {
    ArrayPrev[0] = dental[x].prevision;
    ArrayPrev[1] = dental[x].paciente;
    ArrayPrev[2] = dental[x].rut;
    prev.push(ArrayPrev);
    ArrayPrev = [];
}

for (let u = 0; u < prev.length; u++) {
    document.getElementById('prevision_dental').innerHTML += '<p>' + prev[u].join(' ; ') + '</p>';
}








//Agregar código para el desafio 2 aquí

// document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
// document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
// document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


// document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);