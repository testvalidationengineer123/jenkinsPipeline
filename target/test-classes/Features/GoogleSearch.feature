@GoogleSearch
Feature: Google Search
	Scenario: Search Senegal on google
	    Given user is on google search page
	    When user types "Sénégal" and hit enter
	    Then results for Senegal must be displayed