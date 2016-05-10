'use strict';

/**
 * @ngdoc service
 * @name todoApp.todoLists
 * @description
 * # todoLists
 * Factory in the todoApp.
 */
angular.module('todoApp')
  // MODEL lists
  .value ('List' ,
    function List(data) {
      this.todos = {}
      this.listData = data;

  })

  .factory ('todoLists' , [ 'List',
    function (List) {
      var map = {}; var lists = [];

      function getOrCreate (data){
        var list = map[data.name];
        if (!list){
          list = new List(data);
          lists.push(list);
          map[data.name] = list;
        }
        return list;
      }

      return {
        map: map,
        lists: lists,
        takeAll: function (lists){
          lists.forEach (function (list){
            getOrCreate(list).listData;
          });

        }
      }


  }]);
