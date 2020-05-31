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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.user_is_on_google_search_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.lahad.stepDefs.GoogleSearch.user_is_on_google_search_page(GoogleSearch.java:23)\r\n\tat ✽.user is on google search page(file:///C:/Users/lahad/eclipse-workspace/jenkinsPipeline/src/test/resources/Features/GoogleSearch.feature:5)\r\n",
  "status": "failed"
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
  "name": "user types \"Sénégal\" and hit enter",
  "keyword": "When "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.user_types_and_hit_enter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results for Senegal must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.results_for_Senegal_must_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.user_is_on_google_search_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.lahad.stepDefs.GoogleSearch.user_is_on_google_search_page(GoogleSearch.java:23)\r\n\tat ✽.user is on google search page(file:///C:/Users/lahad/eclipse-workspace/jenkinsPipeline/src/test/resources/Features/GoogleSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Search France on google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "name": "user types \"France\" and hit enter",
  "keyword": "When "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.user_types_and_hit_enter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results for France must be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});