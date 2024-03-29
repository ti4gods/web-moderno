const agendador = require('node-schedule');

// const tarefa1 = agendador.scheduleJob('*/5 * 12 * * 2', function () {
//     console.log('Executando Tarefa 1!', new Date().getSeconds());
// });

const tarefa1 = agendador.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(function () {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!');
}, 20000);

const regra = new agendador.RecurrenceRule()
regra.dayOfWeek = [new agendador.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = agendador.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
});
