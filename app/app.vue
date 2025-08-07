 <script setup  >
  
</script>
<template>

        
        <UApp>
      
             <NuxtPage />
         
     </UApp>
    
 
 
</template>
<script setup>
const { loggedIn } = useUserSession()
watch(loggedIn, () => {
  if (!loggedIn.value) {
    navigateTo('/')
  }
})
// const runtimeConfig = useRuntimeConfig();

//var BNET_ID = runtimeConfig.public.BNET_ID
//var BNET_CLIENT_SECRET = runtimeConfig.public.BNET_CLIENT_SECRET;
 
// await callOnce('user', () => store.fetchUser());
//const runtimeConfig = useRuntimeConfig();

// import * as passport from 'passport';
// import {Strategy} from 'passport-bnet';

// var BnetStrategy = passportBnet.Strategy;
/*
var BNET_ID = runtimeConfig.public.BNET_ID
var BNET_CLIENT_SECRET = runtimeConfig.public.BNET_CLIENT_SECRET;

// console.log(Strategy, 'Strategy', runtimeConfig.public.BNET_ID, runtimeConfig.public.BNET_CLIENT_SECRET);
// passport.Passport.init()
console.log(passport, passport.Authenticator, passport.Authenticator.prototype.use, 'passport', BNET_ID, BNET_CLIENT_SECRET);

// const passport = require('passport');
let bnet = {
        authorizationURL: "https://us.battle.net/oauth/authorize",
        // name: 'bnet',
};
// let bnet;

passport.Authenticator.prototype.use(new Strategy('bnet', {
            authorizationURL: "https://us.battle.net/oauth/authorize",
            clientID: BNET_ID,
            clientSecret: BNET_CLIENT_SECRET,
            callbackURL: "https://localhost:3000",
            region: "us",
            
        }, function(accessToken, refreshToken, profile, done) {
            // this.user = profile;
            // this.userToken = accessToken;
            // this.userId = profile.id;
            // this.refreshToken = refreshToken;
            
            console.log("User profile: ", profile);
            return done(null, profile);
        }));
        // console.log(BnetStrategy, 'BnetStrategy', BnetStrategy.Strategy);
// */
// console.log(BnetStrategy.Strategy);
/*
const pp = passport.use(new Strategy({
            clientID: BNET_ID,
            clientSecret: BNET_CLIENT_SECRET,
            callbackURL: "https://localhost:3000",

            region: "us"
        }, function(accessToken, refreshToken, profile, done) {
            // this.user = profile;
            // this.userToken = accessToken;
            // this.userId = profile.id;
            // this.refreshToken = refreshToken;
            
            console.log("User profile: ", profile);
            return done(null, profile);
        }));
      

       // console.log(BnetStrategy.Strategy);
*/
</script>