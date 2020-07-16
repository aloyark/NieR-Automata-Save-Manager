let timer = document.getElementById('timer');
let sstBtn = document.getElementById('sst-btn');
let sstBtnText = document.getElementById('sst-btn-text');
let resetBtn = document.getElementById('rest-btn');
let refreshBtn = document.getElementById('rfb');
let importBtn = document.getElementById('import-btn');

// let loadBtn = document.getElementById('load-button'); //fix your fucking naming conventions idiot


let slot0 = document.getElementById("slot-0");
let slot1 = document.getElementById("slot-1");
let slot2 = document.getElementById("slot-2");

let slotBtn = document.getElementById("slot-btn");



let watch = new Stopwatch(timer);
let saveList = new ListSaves();

saveList.cl();

// if (document.getElementsByName('li').hasAttribute("id")) {
//   document.getElementsByName('li').addEventListener('click', function() {
//     this.id;
//   });
// }

// let li = document.getElementsByName('li');

// if(typeof(li) != 'undefined' && li != null){
//   alert('Element exists!');
//
// } else{
//   alert('Element does not exist!');
// }



sstBtn.addEventListener('click', function() {
  if (watch.isOn) {
    watch.stop();
    sstBtnText.textContent = 'Start';
  } else {
    watch.start();
    sstBtnText.textContent = 'Stop';
  }
});

resetBtn.addEventListener('click', function() {
  watch.reset();
});

refreshBtn.addEventListener('click', function() {
  saveList.refreshList();
});
let foo = saveList.fuck();

importBtn.addEventListener('click', function() {
  // saveList.fucking();
  // for (var i = 0; i < foo.length; i++) {
  //   console.log(foo[i]);
  // }
  saveList.yup();
});


slot0.addEventListener('click', function() {
  slotBtn.innerHTML = "Slot 0";
  saveList.slot0();
});

slot1.addEventListener('click', function() {
  slotBtn.innerHTML = "Slot 1";
  saveList.slot1();
});

slot2.addEventListener('click', function() {
  slotBtn.innerHTML = "Slot 2";
  saveList.slot2();
});



// visibleList.addEventListener('click', function() {
//   console.log(saveList.thing);
// });
