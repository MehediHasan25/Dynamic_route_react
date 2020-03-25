import React from 'react';
import Home from './Home';
import HomeName from './HomeName';
import HomePc from './HomePc';
import Offices from './Offices';
import OfficePc from './OfficePc';
import Designation from './Designation';
import Ekyc from './Ekyc';


export const RouteName = [
    {
        "id": 1,
        "featureName" : "Home",
        "path": "/",
        "exact": true,
        "component": <Home/>
    },

    {
        "id": 2,
        "featureName" : "HomePc",
        "path": "/homepc",
        "exact": true,
        "component": <HomePc/>
    },

    {
        "id": 3,
        "featureName" : "HomeName",
        "path": "/homename",
        "exact": true,
        "component": <HomeName/>
    },

    {
        "id": 4,
        "featureName" : "Offices",
        "path": "/office",
        "exact": true,
        "component": <Offices/>
    },

    {
        "id": 5,
        "featureName" : "OfficePc",
        "path": "/officepc",
        "exact": true,
        "component": <OfficePc/>
    },

    {
        "id": 6,
        "featureName" : "Designation",
        "path": "/designation",
        "exact": true,
        "component": <Designation/>
    },

    {
        "id": 7,
        "featureName" : "Ekyc",
        "path": "/Ekyc",
        "exact": true,
        "component": <Ekyc/>
    }

];

const featureArray = ["Designation", "HomePc","Home"];


 export const routes = [];


// for(let j = 0; j< featureArray.length; j++){
// for(let i =0; i<RouteName.length; i++ ){
//   if(RouteName[i].featureName === featureArray[j]){
//     routes.push(RouteName[i]);
//   }
// }
// }

featureArray.map((val1, i) =>{
    return RouteName.map((val2, index)=>{
        if(RouteName[index].featureName === featureArray[i]){
           return routes.push(RouteName[index]);
        }
    })
})


