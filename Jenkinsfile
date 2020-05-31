pipeline {
	
	agent any

/*	
	tools {
		maven "${env.MAVEN_HOME}"
		jdk "${env.JAVA_HOME}"
	}	
*/
	
	stages {	
	
		stage("Build") {	
				
			steps {
				bat 'echo This is the build stage//////////////////////////////////////////////////////////////'
			}
		}
		
		stage("Test") {
			
			steps {
				bat 'echo off This is the test stage//////////////////////////////////////////////////////////////'
			}
		}
		
		stage("Cucumber Reports") {
			
			steps {
				bat 'echo This is the report stage//////////////////////////////////////////////////////////////'
			}
		}				
	
	}
}
