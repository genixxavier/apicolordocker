'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Colors', [{
      name:"IndianRed",
      year:2000,
      color:"#CD5C5C",
      pantone_value:"15-4020",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"LightCoral",
      year:2001,
      color:"#F08080",
      pantone_value:"15-4021",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"Salmon",
      year:2001,
      color:"#FA8072",
      pantone_value:"15-4022",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"DarkSalmon",
      year:2002,
      color:"#E9967A",
      pantone_value:"15-4022",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"LightSalmon",
      year:2000,
      color:"#FFA07A",
      pantone_value:"15-4000",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"Crimson",
      year:2010,
      color:"#DC143C",
      pantone_value:"15-4022",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"Red",
      year:2001,
      color:"#FF0000",
      pantone_value:"15-4022",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"FireBrick",
      year:2010,
      color:"#B22222",
      pantone_value:"15-4030",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"DarkRed",
      year:2000,
      color:"#8B0000",
      pantone_value:"15-4020",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"Pink",
      year:1990,
      color:"#FFC0CB",
      pantone_value:"15-4020",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"LightPink",
      year:2010,
      color:"#FFB6C1",
      pantone_value:"15-4020",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"HotPink",
      year:2005,
      color:"#FF69B4",
      pantone_value:"15-4025",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"DeepPink",
      year:2003,
      color:"#FF1493",
      pantone_value:"15-4023",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"MediumVioletRed",
      year:2009,
      color:"#C71585",
      pantone_value:"15-4029",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:"PaleVioletRed",
      year:2012,
      color:"#DB7093",
      pantone_value:"15-4012",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Colors', null, {});
  }
};