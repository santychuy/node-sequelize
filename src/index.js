import '@babel/polyfill';

import app from './app';

(async() => {
    app.listen(app.get('port'));
    console.log('Server on port:',app.get('port'));
})().catch(e => console.error(e));