/*
Initial Setup :
1. go to console.firebase.google.com
2. create a new firebase project
3. visit doc (go to docs) : build > authentication> web> getting started
4. register web app > firebase project home>click web> write name and register
5. install firebase for your project
6. DANGEROUS : get firebase config and put it in firebase.init.js
7. do not share your secret firebase config for public access
8. export app from firebase.init.js 
-------------------
Setup Auth Provider
-------------------
9. create auth using getAuth from firebase by using app from firebase.init.js
10. create a google auth provider
11. go to firebase build>authentication> sign in method
12. enable google sign in method 
13. create a button for google sign in with a click handler
14.inside event handler call signInWithPopUp with auth and provider
15. after signInWithPopup then result , error 
16. once you have given permission for access the popup wont show 
--------------
 display data
-------------

----------------------------------
add a new sign in method (git hub)
----------------------------------
1. enable the sign in method
2.create github twitter fb etc.app create
3.get clientId and secret
4.




*/