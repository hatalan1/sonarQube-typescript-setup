# sonarQube-typescript-setup
Static code analysis with sonarqube tslint

#SonarTS documents

https://docs.sonarqube.org/display/PLUG/SonarTS

#Description

SonarTS detects bugs, vulnerabilities and code smells in TypeScript code.

#Setup


1. Install [node.js](https://nodejs.org/en/)
2. Install [typescript](https://www.npmjs.com/package/typescript)
3. Install SonarQube Server  [see Setup and Upgrade for more details](https://docs.sonarqube.org/latest/setup/overview/)
4. Install [SonarQube Scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) and be sure your can call sonar-scanner from the directory where you have your source code
5. Install [SonarTS](https://docs.sonarqube.org/latest/setup/install-plugin/) (see Installing a Plugin for more details)
6. Run your analysis with the SonarQube Scanner by executing the following command from the root directory of the project:
   ```sonar-scanner -Dsonar.projectKey=xxx -Dsonar.sources=.```
7. [Typescript testexecution and coverage config](https://docs.sonarqube.org/display/PLUG/TypeScript+Test+Execution+and+Coverage+Results+Import)
8. [Tslint configurations](https://github.com/SonarSource/SonarTS#use-in-tslint)

Refer the code base for setting up the project with static analysis tool.


