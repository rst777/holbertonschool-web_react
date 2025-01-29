import { CppSubject } from './subjects/Cpp'; // Assurez-vous que vous importez la classe renommée
// Créer un objet Teacher
var teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 5 // Facultatif
};
// Créer une instance de Cpp avec l'enseignant
var cpp = new CppSubject(teacher); // Utilisation de CppSubject
// Exemple d'utilisation des méthodes
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
//# sourceMappingURL=main.js.map