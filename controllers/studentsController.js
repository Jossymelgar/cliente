var student = require('../schemas/student');

exports.getStudents = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var students = student.find({});
    reply(students);
  }
}

exports.createStudent = {
  auth: {
    mode:'required',
    strategy:'session',
  },
  handler: function(request, reply){
    console.log("Resultado es: "+request.payload);

    var newStudent = new student({
      name: request.payload.name,
      account: request.payload.account,
      peso: request.payload.peso,
      destino: request.payload.destino,
      estado: request.payload.estado
    });
    newStudent.save();
    console.log('student saved');
    return reply('ok');
  }
}
