#README

##How to run
Install node.js
[node.js download][1]

Install bower
> $ npm install -g bower

Install lib

> $ npm install

> $ bower install

Gulp
> $ gulp serve

## Techniques,frameworks & libs

 - jquery
 - angularjs
 - bootstrap
 - gulp
 - sass
 - fullcalendar
 - mdPickers
 
##system modules
### sign in 
    Sign in to My Note 
![sign in][2]
### login
    login to My Note
![login][3]
### new class
    Add new class
![new class][4]
![date picker][5]
![time picker][6]
### my class
    show the classes & pictures
![my class calendar][7]
![pictures][8]
![modal][9]

## To do
  Because of no APIs could used,all of the data saved in models in fornt end.In the signIn,login,newClass modules,if click the `submit` button , the models will log out in the console.U can send it through `service` easily if the APIs is done.
  In my class moudle,U can get the group detail of the user and use the data to replace the model of newclassCtrl.the class will show in the calendar.
  Once U click the event in the calendar,the datas of the calendar event will log out in the console,incude title or any other datas U want.you can use them to send it to the server through service to get the pictures.
  After that,U can replace the url of pictures in the picture list through the $http call back function in the controller.


  [1]: https://nodejs.org/en/download/
  [2]: https://github.com/dawn-lhy/hello-word/tree/develop/example/sigin.png
  [3]: https://github.com/dawn-lhy/hello-word/tree/develop/example/login.png
  [4]: https://github.com/dawn-lhy/hello-word/tree/develop/example/new_class.png
  [5]: https://github.com/dawn-lhy/hello-word/tree/develop/example/date_picker.png
  [6]: https://github.com/dawn-lhy/hello-word/tree/develop/example/time_picker.png
  [7]: https://github.com/dawn-lhy/hello-word/tree/develop/example/my_class_calendar.png
  [8]: https://github.com/dawn-lhy/hello-word/tree/develop/example/my_class_pics.png
  [9]: https://github.com/dawn-lhy/hello-word/tree/develop/example/my_class_modal.png