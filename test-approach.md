# Test Approach

Because of the lacking of requirement, the test approach is a combination of both exploratory testing and coverage-based testing. The feature-under-test has a single flow, with the emphasis on the textbox used to search for city. Hence, most of the test cases will focus on validation check and boundary value analysis.

We assume that the feature backend is written using java.

## Scope
### In scope:
- The header search box
- The find page which displays results from the search box
- API endpoints used to get the city information.
### Out of scope
- The body search box
- The weather detail page

## Test level
<table>
<col width="33%" />
<col width="33%" />
<col width="33%" />
<tbody>
<tr class="odd">
<td align="left"><strong>Testing type</strong></td>
<td align="left"><strong>Definition</strong></td>
<td align="left"><strong>Test tool</strong><br />
</tr>
<tr class="even">
<td align="left">Unit testing</td>
<td align="left">Testing that verifies the implementation of software elements in isolation</td>
<td align="left">Junit, Mocking tools</td>
</tr>
<tr class="odd">
<td align="left">Code analysis (static and dynamic)</td>
<td align="left">Walkthrough and code analysis</td>
<td align="left">1. Static code tool -&gt; Java – Checkstyle, Findbugs, Jtest</tr>
<tr class="even">
<td align="left">Functional and Feature testing</td>
<td align="left">Testing an integrated hardware and software system to verify that the system meets required functionality: <br />
<ul>
<li>100% requirements coverage</li>
<li>100% coverage of the main flows</li>
<li>100% of the highest risks covered</li>
<li>Operational scenarios tested</li>
<li>Operational manuals tested</li>
<li>All failures are reported</li>
</ul></td>
<td align="left">UFT, Selenium WebDriver, Postman</td>
</tr>
<tr class="odd">
<td align="left">System testing</td>
<td align="left">Testing the whole system with end to end flow</td>
<td align="left">Selenium, QTP, TestComplete</td>
</tr>
<tr class="even">
<td align="left">Security testing</td>
<td align="left">Verify secure access, transmission and password/ session security</td>
<td align="left">OSWASP ZAP, Wapiti</td>
</tr>
<tr class="odd">
<td align="left">Performance and Availability testing</td>
<td align="left">Load, scalability and endurance tests</td>
<td align="left">LoadRunner, JMeter</td>
<tr class="even">
<td align="left">Regression testing</td>
<td align="left">Testing all the prior features and re-testing previously closed bugs</td>
<td align="left">QTP, Selenium WebDriver</td>
</tr>
<tr class="odd">
<td align="left">Acceptance testing</td>
<td align="left">Testing based on acceptance criteria to enable the customer to determine whether or not to accept the system</td>
<td align="left">Selenium , Cucumber</td>
</tr>
</tbody>
</table>


## Test Types
- Functional testing, by performing test cases based on business function.
- Usability testing, by testing on multiple browsers and screen size
- API testing, by verifying XHR to make sure data is handled correctly
- Security, by verifying for sql injections by automated penetration tools


## Defect Classification
|**Severity**|**Description**|
|------------|---------------|
|Critical|Defect causes critical loss of business functionality or a complete loss of service.|
|Major|Defect causes major impact to business functionality and there is not an interim workaround available.|
|Minor|Defect causes minor impact to business functionality and there is an interim workaround available.|
|Trivial|Defect is cosmetic only and usability is not impacted.|
