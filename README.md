# fatiga - back

Prerequisito instalar TS (por una sola vez)
```
sudo npm i -g typescript
```


Reconstruir modules de node 
```
npm install 
```

Generar el DIST 
```
tsc -w 
```

Correr la aplicacion  
```
nodemon dist/
```

Para con PM2 pueden usar :

pm2 start ecosystem.config.js --env production
## URL: https://pm2.io/docs/runtime/best-practices/environment-variables/
