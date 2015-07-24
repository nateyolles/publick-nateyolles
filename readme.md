# nateyolles.com using Publick Sling + Sightly blog engine

This project is my personal site and blog using the [Publick Apache Sling + Sightly blog engine](https://github.com/nateyolles/publick-sling-blog).

## Install Publick blog engine

Follow the instructions to install the [Publick Apache Sling + Sightly blog engine](https://github.com/nateyolles/publick-sling-blog).

## Install static asset build tools

  1. Install [NodeJS and NPM](https://nodejs.org/)
  2. Install [Grunt CLI](http://gruntjs.com/getting-started): `npm install -g grunt-cli`
  3. Install Grunt plugins: `npm install`
  4. Run Grunt: `grunt build`

## Build

Build and deploy to a running Sling instance with default values of port *8080*, user *admin* and password *admin*:

    mvn clean install -PautoInstallBundle

## Login

Navigate to [http://localhost:8080/content/index.html](http://localhost:8080/content/index.html) to view the homepage.

Navigate to [http://localhost:8080/content/admin/login.html](http://localhost:8080/content/admin/login.html) to login. The default credentials are *admin*/*admin*. 

## Further information

The following information is not required to run the project.

### Maven Archetype

The following Maven Archetype was used to begin the project:

```
mvn archetype:generate \
    -DarchetypeGroupId=org.apache.sling \
    -DarchetypeArtifactId=sling-initial-content-archetype \
    -DgroupId=com.nateyolles.website \
    -DartifactId=publick-nateyolles \
    -Dversion=1.0.0-SNAPSHOT \
    -Dpackage=com.nateyolles.website \
    -DappsFolderName=publick-nateyolles \
    -DartifactName="publick-nateyolles" \
    -DpackageGroup="publick-nateyolles"
```