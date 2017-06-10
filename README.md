```
npm install -g cordova  
npm install -g ionic  
ionic start locus-app --type=ionic-angular  
ionic serve
```

Should think of Ionic as single page Angular2 application

## General Ionic application architecture
`app.ts` is starting point for any Ionic2 application. Initalization code here  
`pages/` code for the screens   
`theme/` can provide styling globally across the application  
`www/` results of compilation are put here  
`config.xml` standard configuration file for cordova applications  
`gulpfile.js` key build task that ionic uses  
`ionic.config.json` basic configuration values for Ionic app  
`package.json` standard Node.js file to configure packages  
`node_modules/` standard Node folder where all the packages will be installed  
`typings.json` TypeScript definition files  
`resources/` contains media for icons, splash screens  
`plugins/` any native device plugins, such as camera or geolocation  
`platforms/` build for specific platform. Normally don't have to modify manually   


 


