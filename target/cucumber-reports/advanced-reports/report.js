$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/GoogleSearch.feature");
formatter.feature({
  "name": "Google Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@GoogleSearch"
    }
  ]
});
formatter.scenario({
  "name": "Search Senegal on google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.user_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Sénégal\" and hit enter",
  "keyword": "When "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.user_types_and_hit_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results for Senegal must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.results_for_Senegal_must_be_displayed()"
});
formatter.result({
  "status": "passed"
});
});