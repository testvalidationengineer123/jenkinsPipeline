pipeline{

	agent any
	
	stages {
	
		stage ('Compile Stage') {
		
			steps {
			
				withMaven(maven: 'maven_3_6_3') {
					sh 'mvn clean install -DnavigateurUtilise=${navigateur}'
			}
		}
		stage ('Cucumber Reports') {
			
			steps {
				Cucumber buildStatus: "FAILED",
						 fileIncludePattern: "**/CucumberTestReport.json",
						 jsonReportDirectory: 'target/cucumber-reports'
			}
		}
 	}

}