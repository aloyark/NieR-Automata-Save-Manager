const remote = require('electron').remote;
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const swal = require('sweetalert2');

process.chdir("Saves");

let fog = new Fog();

const homePath = process.env['USERPROFILE'];
const NieRSavePath = `${homePath}/Documents/My Games/NieR_Automata/`;



function ListSaves() {
  let pattern = "*.dat";
  let saves = [];
  // let shit = path.dirname('src/Saves');
  // let foo = __dirname;
  let selectedSave = null; //rip brr
  let saveSlotNum = 0;
  let path = "";

  this.thing = function() {
    return "save-list";
  }



  function isEmpty(id) {
    return document.getElementById(id).innerHTML.trim() == "";
  }

  function createList() {
    //This need to be here because you need to clear the saves array when you create a new list dumbass
    saves = [];
    // Get all the files in the stupid fucking saves array
    glob(pattern, function(er, files) { //figure out why i was trying to use glob.sync();
      for (let i = 0; i < files.length; i++) {
        // console.log(files[i]);
        fix = files[i].slice(0, -4);
        saves.push(fix);
      }

      for (let i = 0; i < saves.length; i++) {
        console.log("testing");
        let li = document.createElement('li');
        test = saves[i];
        li.setAttribute("id", test);
        li.setAttribute("class", "save-element");

        // let selectedSave = li.id;

        // li.setAttribute("onClick", '() => {console.log("'+ li.id +'");}');

        li.addEventListener('click', function() {
          li.setAttribute("style", "color: rgb(200, 200, 200); background: #B01437");
          let ree = selectedSave;

          selectedSave = li.id;
          try {
            if (ree !== selectedSave) {
              document.getElementById(ree).setAttribute("style", "");
            }
          } catch (e) {
            console.log("poopy dumb bitch error");
          }

          console.log(selectedSave);
        });

        li.innerHTML = test;
        document.getElementById("save-list").appendChild(li);
      }

      // let select = document.getElementById('save-list');
      // select.setAttribute('size', "${saves.length}");
    });
  }

  // let slot0 = document.getElementById("slot-0");
  // let slot1 = document.getElementById("slot-1");
  // let slot2 = document.getElementById("slot-2");
  //
  // let slotBtn = document.getElementById("slot-btn");
  //
  // slot0.addEventListener('click', function() {
  //   slotBtn.innerHTML = "Slot 0";
  //   saveSlotNum = 0;
  // });
  //
  // slot1.addEventListener('click', function() {
  //   slotBtn.innerHTML = "Slot 1";
  //   saveSlotNum = 1;
  // });
  //
  // slot2.addEventListener('click', function() {
  //   slotBtn.innerHTML = "Slot 2";
  //   saveSlotNum = 2;
  // });

  this.slot0 = function() {
    saveSlotNum = 0;
  }

  this.slot1 = function() {
    saveSlotNum = 1;
  }

  this.slot2 = function() {
    saveSlotNum = 2;
  }

  this.logSaveNum = function() {
    console.log(saveSlotNum);
  }


  function switchOutsave() {
    if (selectedSave !== null) {
      //Move Save from NieR save directory to backup folder
       try {
           // console.log(`${NieRSavePath}SlotData_${saveSlotNum}.dat`);
           // console.log(`Backup/SlotData_${saveSlotNum}.dat`);
           fs.renameSync(`${NieRSavePath}SlotData_${saveSlotNum}.dat`, `Backup/SlotData_${saveSlotNum}.dat`);
       } catch (err) {
           console.log("fuck off error");
           // throw err
       }

       //check if save file ends with _fog. and use fogs tool if it does
       if (selectedSave.endsWith("_fog")) {
           path = "ImportBuffer";
           saveRename(selectedSave, saveSlotNum, path);

           fog.saveImport(saveSlotNum);

           fs.renameSync(`${path}/SlotData_${saveSlotNum}.dat`, `${NieRSavePath}SlotData_${saveSlotNum}.dat`);
       } else {
           path = "Buffer";
           saveRename(selectedSave, saveSlotNum, path);
           fs.renameSync(`${path}/Buffer.dat`, `${NieRSavePath}SlotData_${saveSlotNum}.dat`);
           console.log("is this shit even working");
       }

       // console.log("done importing");

       var x = document.getElementById("snackbar");
       x.className = "show";
       setTimeout(function(){
         x.className = x.className.replace("show", "");
       }, 2000);

    } else {
      // alert("You didn't select anything silly");

      var x = document.getElementById("snackbar2");
      x.className = "show";
      setTimeout(function(){
        x.className = x.className.replace("show", "");
      }, 3000);

    }
  }

  function saveRename(save, num, path) {
      // fs.copyFileSync(save + ".dat", "Buffer/SlotData_" + num + ".dat");
      fs.copyFileSync(`${save}.dat`, `${path}/Buffer.dat`);
  }

  this.yup = function() {
    switchOutsave();
  }

  this.cl = function() {
    createList();
  };

  this.refreshList = function() {
    let list = document.getElementById("save-list");

    if (!isEmpty("save-list")) {
      while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
      createList();
      selectedSave = null;
      console.log(selectedSave);
    }

    // console.log(Object.keys(saves));
  };

  this.fuck = function() {
    return saves;
  }


  this.import = function() {
    switchSaves();
  }

  const noop = (noop) => {
    //noop
  }
}
