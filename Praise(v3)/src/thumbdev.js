import {Thumb} from "./Thumb";
let btn=new Thumb($(".table"));
axios.get('/index/initdata')
  .then(function (response) {
     console.log(response);
    $(".time").text(response.data);
   })
  .catch(function (error) {
   console.log(error);
  });