pipeline {
	
	agent any

/*	
	tools {
		maven '${env.MAVEN_HOME}'
		jdk '${env.JAVA_HOME}'
	}	
*/
	parameters {
	
		choice (
			name: "NAVIGATEUR",
			choices: ["chrome", "firefox"],
			description: "Le navigateur sur lequel on veut lancer les tests"
		)
	
	}
	
	stages {	
	
		stage("Build and Test") {	
				
			steps {
				bat "echo This is the build stage//////////////////////////////////////////////////////////////"
				bat "mvn clean install -DnavigateurUtilise=${params.NAVIGATEUR}"
			}
		}

		
		stage("Cucumber Reports") {
			
			steps {
				bat "echo This is the report stage//////////////////////////////////////////////////////////////"
			}
		}				
	
	}
}
