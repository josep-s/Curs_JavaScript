const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let llista_tasques = [];
let tasques = 0;

function afegir_tasca(llista_tasques, descripcio_tasca) {
    llista_tasques.push({fet: false, descripcio: descripcio_tasca});
};

function imprimir_llista_tasques(llista_tasques, tasques) {
    for (let i = 0; i < tasques; i++)
        if (llista_tasques[i].fet)
            console.log((i + 1) + '. [x]', llista_tasques[i].descripcio);
        else
            console.log((i + 1) + '. [ ]', llista_tasques[i].descripcio);
};

function demanar_tasques(llista_tasques, tasques) {
    rl.question('Introdueix una tasca (fi per acabar)', function(descripcio_tasca) {
        switch (descripcio_tasca) {
            case 'fi':
                console.log('Fi de la introducció de tasques');
                marcar_tasques(llista_tasques, tasques);
                break;
            case 'exit':
                rl.close();
                break;
            default:
                afegir_tasca(llista_tasques, descripcio_tasca);
                tasques++;
                console.log('La llista de tasques actual és:');
                imprimir_llista_tasques(llista_tasques, tasques);
                demanar_tasques(llista_tasques, tasques);
        }
    });
};

function marcar_tasca(llista_tasques, nombre_tasca, tasques) {
    if (nombre_tasca >= 0 && nombre_tasca < tasques)
        llista_tasques[nombre_tasca].fet = true;
    else
        console.log('Nombre de tasca incorrecte');
};

function tasques_fetes(llista_tasques) {
    for (let tasca of llista_tasques)
        if (!tasca.fet)
            return false;
    return true;
};

function marcar_tasques(llista_tasques, tasques) {
    imprimir_llista_tasques(llista_tasques, tasques);
    rl.question('Quina tasca has fet (1 - N i fi per acabar)', function(nombre_tasca) {
        switch (nombre_tasca) {
            case 'fi':
            case 'exit':
                console.log('Fins aviat');
                rl.close();
                break;
            default:
                marcar_tasca(llista_tasques, nombre_tasca - 1, tasques);
                if (tasques_fetes(llista_tasques)) {
                    console.log('Enhorabona! Has fet totes les tasques!');
                    rl.close();
                }
                else
                    marcar_tasques(llista_tasques, tasques);
                break;
        }
    });
};

demanar_tasques(llista_tasques, tasques);
