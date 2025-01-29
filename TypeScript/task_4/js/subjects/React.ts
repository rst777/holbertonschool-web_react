/// <reference path="Teacher.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact? : number;
	}

	class React extends Subject {
		getRequirements() : string {
			return "Here is the list of requirements for React"
		}

		getAvailableTeacher() :  string {
			if (this.teacher.experienceTeachingC === undefined)
				return "No available teacher";
			return `Available Teacher: ${this.teacher.firstName}`;
		}

	}
}
