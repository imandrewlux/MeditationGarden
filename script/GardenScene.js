function loader(){
  let asssettts = document.getElementById('assets');

  //grass assetts
  let grassObj = document.createElement('a-asset-item');
  grassObj.setAttribute('id', 'grassObj');
  grassObj.setAttribute('src', 'models/grass/grass_low_poly.obj');
  asssettts.appendChild(grassObj);
  let grassColor = document.createElement('a-asset-item');
  grassColor.setAttribute('id', 'grassMtl');
  grassColor.setAttribute('src', 'models/grass/grass_low_poly.mtl');
  asssettts.appendChild(grassColor);
 

  //Marble
  let marbleColor = document.createElement('a-asset-item');
  marbleColor.setAttribute('id', 'marbleColor');
  marbleColor.setAttribute('src' , 'texture/marble/White_Marble_001_COLOR_COLOR.jpg');
  asssettts.appendChild(marbleColor);
  let marbleNormal = document.createElement('a-asset-item');
  marbleNormal.setAttribute('id', 'marbleNormal');
  marbleNormal.setAttribute('src' , 'texture/marble/White_Marble_001_COLOR_NRM.jpg');
  asssettts.appendChild(marbleNormal);

  //multicolumn
  let columnObj = document.createElement('a-asset-item');
  columnObj.setAttribute('id', 'columnObj');
  columnObj.setAttribute('src' , 'models/pillar-set-LR.obj');
  asssettts.appendChild(columnObj);

  //small guy
  let smallGuyObj = document.createElement('a-asset-item');
  smallGuyObj.setAttribute('id' , 'smallGuyObj');
  smallGuyObj.setAttribute('src' , 'models/small/small-LR.obj');
  asssettts.appendChild(smallGuyObj);
  let smallGuyMtl = document.createElement('a-asset-item');
  smallGuyMtl.setAttribute('id', 'smallGuyMtl');
  smallGuyMtl.setAttribute('src' , 'models/small/small-LR.mtl');
  asssettts.appendChild(smallGuyMtl);
}
loader();

let scene = document.querySelector( '.tree-area' ); 
      let grassNum = 50;
      let smllNum = 50;
      let fairyNum = 2;
      let waterNum = 28;

// create grass clumps
function addGrass(randX, randZ) {
  let grass = document.createElement( 'a-entity');
  grass.setAttribute( 'obj-model', 'obj: #grassObj; mtl: #grassMtl');
  grass.setAttribute( 'material', ' side: double;');
  grass.setAttribute( 'position' , `${randX} -3 ${randZ}` );
  grass.setAttribute( 'shadow' , 'cast: false; receive: true;' );
  
  scene.appendChild( grass );
}

// create small guys
function addSmallGuys(randX, randZ) {
  let smll = document.createElement( 'a-entity');
  smll.setAttribute( 'obj-model', 'obj: #smallGuyObj; mtl: #smallGuyMtl');
  smll.setAttribute( 'position' , `${randX} 2 ${randZ}` );
  smll.setAttribute( 'shadow' , 'cast: true; receive: true;' );
  //smll.setAttribute('scale', '.06 .06 .06');
  
  scene.appendChild( smll );
}


function addFairyLights(randX, randZ, fairyNum, randDelay, rayDel1, rayDel2, rayDel3, rayDel3, rayDel4, rayDel5){
  let gLight = document.createElement('a-entity');
  gLight.setAttribute('class', `fairy-${fairyNum}`);
  gLight.setAttribute('position', `${randX} -2 ${randZ}`);
  gLight.setAttribute('scale', `1.${randX} 1.${randZ} 1.${randZ}`);
  gLight.setAttribute('light', 'type:point; color: honeydew; intensity: 0.8; castShadow: true; distance: 300;');
  gLight.setAttribute('animation', `property: position; to: 0 35 0; dur: 20000; loop:true; delay:${randDelay}; dir:alternate;`);

  let fairyL = document.createElement('a-entity');
  fairyL.setAttribute('position', `0 0 0`);
  fairyL.setAttribute('shadow' , 'cast:true; receive:true;');
  fairyL.setAttribute('animation' , `property: rotation; to: 360 360 360; dur: 20000; dir:alternate; loop:true; delay:${randDelay}`);
  fairyL.innerHTML = `<a-cone class="rays" animation="property: height; to: .3; dur:10000; dir:alternate; loop:true; delay:${randDelay}"  position=" 0 0.8 0" height="2.5" radius-bottom="0.2" radius-top="0" segments-radial="3" color="#5788fa" rotation="180 0 0"></a-cone>    <a-cone class="rays" animation="property: height; to: .3; dur:10000; dir:alternate; loop:true; delay:${rayDel1}"  position=" 0 -0.8 0" height="2.5" radius-bottom="0.2" radius-top="0" segments-radial="3" color="#5788fa" rotation="0 0 0"></a-cone>   <a-cone class="rays" animation="property: height; to: .3; dur:10000; dir:alternate; loop:true; delay:${rayDel2}"  position=" -0.8 0 0" height="2.5" radius-bottom="0.2" radius-top="0" segments-radial="3" color="#5788fa" rotation="0 0 -90"></a-cone>  <a-cone class="rays" animation="property: height; to: .3; dur:10000; dir:alternate; loop:true; delay:${rayDel3}"  position="0 0 -0.8" height="2.5" radius-bottom="0.2" radius-top="0" segments-radial="3" color="#5788fa" rotation="90 0 0"></a-cone>  <a-cone class="rays" animation="property: height; to: .3; dur:10000; dir:alternate; loop:true; delay:${rayDel4}"  position="0 0 0.8" height="2.5" radius-bottom="0.2" radius-top="0" segments-radial="3" color="#5788fa" rotation="-90 0 0"></a-cone>  <a-cone class="rays" animation="property: height; to: .3; dur:10000; dir:alternate; loop:true; delay:${rayDel5}"  position="0.8 0 0" height="2.5" radius-bottom="0.2" radius-top="0" segments-radial="3" color="#5788fa" rotation="0 0 90"></a-cone>`; 


  gLight.appendChild(fairyL);


  scene.appendChild(gLight);
}

function addWater(){

  let waterCon = document.querySelector('.water');
  let fountainCon = document.querySelector('.fountain');
  let mainOcean = document.createElement('a-ocean');
  mainOcean.setAttribute('color' , "#92E2E2");
  mainOcean.setAttribute('opacity' , "0.6");
  mainOcean.setAttribute('position' , "0 4 0");
  mainOcean.setAttribute('width' , "70.5");
  mainOcean.setAttribute('depth' , "70.5");
  mainOcean.setAttribute('density' , "45");
  mainOcean.setAttribute('rotation' , "-90 45 0");

  waterCon.setAttribute('rotation', '0 45 0');
  waterCon.innerHTML = '<a-ocean color="#92E2E2" opacity="0.6" position="0 3.5 40" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="10 3.5 40" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="18 3.5 38" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="25 3.5 35" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="40 3.5 0" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="40 3.5 10" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="38 3.5 18" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="35 3.5 25" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-10 3.5 40" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-18 3.5 38" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-25 3.5 35" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-40 3.5 0" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-40 3.5 10" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-38 3.5 18" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-35 3.5 25" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="0 3.5 -40" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="10 3.5 -40" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="18 3.5 -38" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="25 3.5 -35" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="40 3.5 -10" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="38 3.5 -18" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="35 3.5 -25" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-10 3.5 -40" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-18 3.5 -38" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-25 3.5 -35" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-40 3.5 -10" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-38 3.5 -18" width="10" depth="10" ></a-ocean><a-ocean color="#92E2E2" opacity="0.6" position="-35 3.5 -25" width="10" depth="10" ></a-ocean>'

  fountainCon.appendChild(mainOcean);
}

function fountain(){
  let fountainDoc = document.querySelector('.fountain')

  let outershell = document.createElement('a-cylinder');
  outershell.setAttribute('open-ended' , "true");
  outershell.setAttribute('height' , "10");
  outershell.setAttribute('radius' , "50");
  outershell.setAttribute('segments-radial' , "20");
  outershell.setAttribute('shadow' , "cast: false; receive: true;");
  outershell.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; repeat: 3 1; offset: 0 .5; roughness: 0; ");

  let innershell = document.createElement('a-cylinder');  
  innershell.setAttribute('open-ended' , "true");
  innershell.setAttribute('height' , "10");
  innershell.setAttribute('radius' , "45");
  innershell.setAttribute('segments-radial' , "20");
  innershell.setAttribute('shadow' , "cast: false; receive: true;");
  innershell.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; repeat: 3 1; offset: 0 .5; side: back; roughness: 0; ");

  let topBit = document.createElement('a-ring');  
  topBit.setAttribute('radius-outer' , "50");
  topBit.setAttribute('position' , "0 5 0");
  topBit.setAttribute('radius-inner' , "45");
  topBit.setAttribute('rotation' , "-90 0 0");
  topBit.setAttribute('segments-theta' , "20");
  topBit.setAttribute('shadow' , "cast: false; receive: true;");
  topBit.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; roughness: 0; ");

  let bottomBit = document.createElement('a-circle');  
  bottomBit.setAttribute('radius' , "50");
  bottomBit.setAttribute('position' , "0 1.5 0");
  bottomBit.setAttribute('rotation' , "-90 0 0");
  bottomBit.setAttribute('segments' , "20");
  bottomBit.setAttribute('shadow' , "cast: false; receive: true;");
  bottomBit.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; roughness: 1; ");

  let celeing = document.createElement('a-ring');  
  celeing.setAttribute('radius-outer' , "57");
  celeing.setAttribute('position' , "0 70 0");
  celeing.setAttribute('radius-inner' , "43");
  celeing.setAttribute('rotation' , "-90 0 0");
  celeing.setAttribute('segments-theta' , "20");
  celeing.setAttribute('shadow' , "cast: false; receive: true;");
  celeing.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; side: back; roughness: 0; ");

  let centerColumn = document.createElement('a-entity');  
  centerColumn.setAttribute('obj-model' , "obj: models/Column_LP.obj");
  centerColumn.setAttribute('scale' , "20 20 20");
  centerColumn.setAttribute('shadow' , "cast: false; receive: true;");
  centerColumn.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; roughness: 0; ");

  let outershelltop = document.createElement('a-cylinder');
  outershelltop.setAttribute('open-ended' , "true");
  outershelltop.setAttribute('height' , "4");
  outershelltop.setAttribute('radius' , "57");
  outershelltop.setAttribute('position' , "0 70 0");
  outershelltop.setAttribute('segments-radial' , "20");
  outershelltop.setAttribute('shadow' , "cast: false; receive: true;");
  outershelltop.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; repeat: 3 1; offset: 0 .9; roughness: 0; ");

  let innsershelltop = document.createElement('a-cylinder');
  innsershelltop.setAttribute('open-ended' , "true");
  innsershelltop.setAttribute('height' , "4");
  innsershelltop.setAttribute('radius' , "43");
  innsershelltop.setAttribute('position' , "0 70 0");
  innsershelltop.setAttribute('segments-radial' , "20");
  innsershelltop.setAttribute('shadow' , "cast: false; receive: true;");
  innsershelltop.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; repeat: 3 1; offset: 0 .9; side:back; roughness: 0; ");


  let deginit = 72;
  for( let c = 0; c < 5; c++){
    
    let columns = document.createElement('a-entity');
    columns.setAttribute('obj-model' , "obj: #columnObj");
    columns.setAttribute('material' , "src: #marbleColor; normalMap: #marbleNormal; roughness: 0;");
    columns.setAttribute('scale' , "1 1 1");
    columns.setAttribute('shadow' , "cast: true; receive: true;");
    columns.setAttribute('position' , `${ Math.round( 50 * Math.sin( deginit *(Math.PI / 180) ) ) } 0 ${ Math.round( 50 * Math.cos( deginit *(Math.PI / 180) ) ) }`);
    
    deginit += 72;

    fountainDoc.appendChild(columns);
  }

  fountainDoc.appendChild(outershell);
  fountainDoc.appendChild(innershell);
  fountainDoc.appendChild(topBit);
  fountainDoc.appendChild(bottomBit);
  fountainDoc.appendChild(celeing);
  fountainDoc.appendChild(centerColumn);

  fountainDoc.appendChild(outershelltop);
  fountainDoc.appendChild(innsershelltop);
}

const letsTryThis = () =>{
  let ang = Math.random() * 2 * Math.PI;
  let hyp = Math.sqrt(Math.random()) * 150;
  let ramodoX  = Math.floor(Math.cos(ang) * hyp);
  let ramodoZ = Math.floor(Math.sin(ang) * hyp);

if( (ramodoX > -50 && ramodoX < 50 ) && (ramodoZ > -50 && ramodoZ < 50 ) ){
  
  while( (ramodoX > -50 && ramodoX < 50 ) ){
    ramodoX = Math.floor(Math.cos(Math.random() * 2 * Math.PI) * Math.sqrt(Math.random()) * 135);
    //console.log("buttx "+ramodoX);
  }
  while( (ramodoZ > -50 && ramodoZ < 50 ) ){
    ramodoZ = Math.floor(Math.sin(Math.random() * 2 * Math.PI) * Math.sqrt(Math.random()) * 135);
    //console.log("buttZ "+ramodoZ);
  }

}

  return [ramodoX, ramodoZ];
}


function addObjects() {
 window.addEventListener('load', (event) => {
  //addlights
  for( let fairy = 0; fairy <= fairyNum; fairy++){
    let randArray = letsTryThis();
    let randDelay = Math.floor(Math.random() * 30000);
    let rayDel1 = Math.floor(Math.random() * 30000);
    let rayDel2 = Math.floor(Math.random() * 30000);
    let rayDel3 = Math.floor(Math.random() * 30000);
    let rayDel4 = Math.floor(Math.random() * 30000);
    let rayDel5 = Math.floor(Math.random() * 30000);
    addFairyLights( randArray[0], randArray[1], fairy, randDelay, rayDel1, rayDel2, rayDel3, rayDel3, rayDel4, rayDel5);
  }
  });
  
  //grass
  for( let g=0; g <= grassNum; g++){
    let randArray = letsTryThis();
    addGrass(randArray[0], randArray[1]);
  }

  //smllguy
  for( let s = 0; s <= smllNum; s++){
    let randArray = letsTryThis();
    addSmallGuys(randArray[0] , randArray[1]);
  }

  //water
  addWater();
  fountain();
}

addObjects();




