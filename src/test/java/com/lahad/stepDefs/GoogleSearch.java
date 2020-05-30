package com.lahad.stepDefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import com.lahad.runners.Runner;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class GoogleSearch {

	WebDriver driver = Runner.driver;
	
	@Given("user is on google search page")
	public void user_is_on_google_search_page() {
		driver.get("http://www.google.com");
	}

	@When("user types {string} and hit enter")
	public void user_types_and_hit_enter(String string) {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.name("q")).sendKeys("Sénégal");
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
	}

	@Then("results for Senegal must be displayed")
	public void results_for_Senegal_must_be_displayed() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Assert.assertTrue(driver.getPageSource().contains("Gouvernement du Sénégal"));
	}
}
