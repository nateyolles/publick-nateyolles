# nateyolles.com using Publick Sling + Sightly blog engine

This project is my personal site and blog using the [Publick Apache Sling + Sightly blog engine](https://github.com/nateyolles/publick-sling-blog).

View the project at [nateyolles.com](http://www.nateyolles.com). The project takes advantage of Amazon's AWS free tiers. Apache Sling and Publick is hosted on an EC2 instance with the AMI Linux distrobution. Email is sent through Amazon's Simple Email Service (SES). Traffic is handled with an Apache Web Server and cached with Adobe's Dispatcher module.

Log into the dashboard at [nateyolles.com/admin](http://www.nateyolles.com/admin) using username *demo* and password *demo*.

## Install Publick blog engine

Follow the instructions to install the [Publick Apache Sling + Sightly blog engine](https://github.com/nateyolles/publick-sling-blog).

## Install static asset build tools

  1. Install [NodeJS and NPM](https://nodejs.org/)
  2. Install [Grunt CLI](http://gruntjs.com/getting-started): `npm install -g grunt-cli`
  3. Install Grunt plugins: `npm install`
  4. Optional: Run Grunt: `grunt build`

## Build

Build and deploy to a running Sling instance with default values of port *8080*, user *admin* and password *admin*:

    mvn clean install -PautoInstallBundle

Running this Maven command will trigger the Grunt tasks which compile your SASS as well as concatenate and minify your CSS and JavaScript.

## Login

Navigate to [http://localhost:8080/index.html](http://localhost:8080/index.html) to view the homepage.

Navigate to [http://localhost:8080/admin/login.html](http://localhost:8080/admin/login.html) to login. The default credentials are *admin*/*admin*.

## Setup

Follow instructions per the [Publick instructions](https://github.com/nateyolles/publick-sling-blog#configuration).

## Apache Web Server setup

  1. Serve nateyolles.com on port 80 and proxy to Apache Sling on port 8080.
  2. Redirect paths to remove "/content".
  3. Redirect for extentionless URLs.

```
<VirtualHost *:80>
    ProxyPreserveHost On
    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/
    ServerName www.nateyolles.com
</VirtualHost>
```

```
<IfModule mod_dir.c>
    DirectorySlash Off
</IfModule>

<IfModule mod_rewrite.c>
    RewriteEngine On

    # Always use www
    RewriteCond %{HTTP_HOST} !^www\.
    RewriteRule ^ http://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

    # Step 1: Redirect all paths that end in .html or slash.
    # Redirect to remove index.html and /content. Hopefully
    # you've provided the correct links so that you don't
    # have to do any of these redirects.

    # remove trailing slash
    RewriteRule     ^(.+)/$ $1 [R=301,L,NC,QSA]

    # remove content
    RewriteRule     ^/content/(.*)$ /$1 [R=301,L,NC,QSA]

    # Remove .html
    # Condition needed for a bug in Sling 7. Updating a user group
    # doesn't work when posting to JSON. While fixed in Sling 8, the
    # admin JavaScript UserService#PATH_UPDATE_GROUP would need to be
    # updated as well if you were going to use it. See Publick's readme.md.
    RewriteCond     %{REQUEST_URI} !^/system/userManager/group/.+\.update.html [NC]
    RewriteRule     (.*).html$ $1 [R=301,L,NC,QSA]

    # remove /index
    RewriteRule     (.*)/index $1 [R=301,L,NC,QSA]

    # Step 2: Use a path through to do an internal rewrite rather
    # than a 301 or 302 redirect. Add the .html extension back on
    # so that Sling can resolve the resource with the correct
    # renderer.

    # Ending without a slash or extension, pass through to *.html
    RewriteCond     %{REQUEST_URI} !.*/j_security_check [NC]
    RewriteCond     %{REQUEST_URI} !^/bin [NC]
    RewriteCond     %{REQUEST_URI} !^/etc [NC]
    RewriteCond     %{REQUEST_URI} !^/assets [NC]
    RewriteCond     %{REQUEST_URI} !.*\..*/?$ [NC]
    RewriteCond     %{REQUEST_URI} !.*/$ [NC]
    RewriteRule     (.*)$ $1.html [PT,L,NC,QSA]

    # Ending with slash, pass through to index.html
    RewriteCond     %{REQUEST_URI} .*/$ [NC]
    RewriteRule     (.*)$ $1/index.html [PT,L,NC,QSA]
</IfModule>
```

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