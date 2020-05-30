package com.lahad.runners;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/Features",
		glue = "com.lahad.stepDefs",
		tags = "",
		strict = true,
		monochrome = true,
		plugin = {
				"pretty",
				"html:target/cucumber-reports/advanced-reports",
				"json:target/cucumber-reports/CucumberTestReport.json",
				
		}
	)
public class Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() {
		String navigateur = System.getProperty("navigateurTest");
//		if("chrome".equals(navigateur)) {		
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\lahad\\Desktop\\tools\\webdrivers\\chromedriver_83.0.4103.39\\chromedriver.exe");
			driver = new ChromeDriver();
//		}
	}
	
	@AfterClass
	public static void tearDown() {
		if(driver != null) {
			driver.close();
			driver.quit();
		}
	}
}

