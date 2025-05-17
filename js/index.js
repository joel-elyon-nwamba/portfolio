new TypeIt("#typed", {
    strings: ["Joel Nwamba"],
    speed: 100,
    breakLines: false,
    afterComplete: function (instance) {
      new TypeIt("#typed-sub", {
        strings: ["Frontend Developer", "JavaScript", "React"],
        speed: 100,
        breakLines: false,
        loop: true,
        deleteSpeed: 50
      }).go();
      return instance.destroy(); // stop after completing the name
    }
  }).go();
  
  

  AOS.init();