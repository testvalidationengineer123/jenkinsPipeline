@GoogleSearch
Feature: Google Search

	Background:
	    Given user is on google search page
	
#	    And goes to landing page
	Scenario: Search Senegal on google
	    When user types "Sénégal" and hit enter
	    Then results for Senegal must be displayed
	    
	Scenario: Search France on google
	    When user types "France" and hit enter
	    Then results for France must be displayed