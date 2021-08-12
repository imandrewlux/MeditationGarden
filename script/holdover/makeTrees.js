let scene = document.querySelector( '.tree-area' ); 
let treeNum = 1;

function crateTree(treeHeight, tPosX, tPosZ){
  let trunk = document.createElement('a-cone');
    trunk.setAttribute('position', `${tPosX} ${treeHeight/2} ${tPosZ}`);
    trunk.setAttribute('height', `${treeHeight}`);
    trunk.setAttribute('radius-bottom', '3');
    trunk.setAttribute('radius-top', '1');
    trunk.setAttribute('shadow', 'cast: true; receive: true');
    trunk.setAttribute( 'material', 'src: texture/bark.jpg;');
    trunk.setAttribute( 'segments-radial', '3');
    scene.appendChild(trunk);
    let branchNum = treeHeight/5;
    let moreBranchNum = branchNum;
    for( let i=0; i<branchNum; i++ ) {
      let y = i*5;
      let dec = moreBranchNum--;
        createBranch(i, y, dec, branchNum, tPosX, tPosZ);
      
    }
}

function createBranch(i, y, dec, branchNum, tPosX, tPosZ) {
  let rote = i * 200/ (Math.PI);
  let randrot = Math.floor(Math.random() * (rote - (rote - 30) + 1) + (rote - 30));
  let decc = dec * .01;
  let donm = decc * (2 - (0.2) + 1) + 0.2;
  let yh = Math.floor(Math.random() * (y - (y-3) + 1) + (y-3));

  let branches = document.createElement( 'a-entity' );
  branches.setAttribute( 'class' , `tree`+i );
  branches.setAttribute( 'scale', `${donm}, ${donm}, ${donm}`);
  branches.setAttribute( 'position' , `${tPosX} ${yh} ${tPosZ}` );
  branches.setAttribute( 'rotation' , `0 ${randrot} 0` );
  branches.innerHTML = `<a-cone material="src: texture/bark.jpg;" rotation="0 0 -90" shadow="cast: true; receive: true" position="12.5 20 0" height="25" radius-bottom="1" radius-top=".8" segments-radial="3"></a-cone><a-cone material="src: texture/bark.jpg;" shadow="cast: true; receive: true" rotation="0 20 -90" position="30.5 20 -2.2" height="13" radius-bottom=".8" radius-top=".5" segments-radial="3"></a-cone><a-cone material="src: texture/bark.jpg;" shadow="cast: true; receive: true" rotation="0 -10 -90" position="39.9 20 -3.7" height="8" radius-bottom=".5" radius-top=".2" segments-radial="3"></a-cone>`;

  // create leaf balls
  for( let m=0; m<(branchNum/2);m++){
    let randoX = Math.random() * (40 - 0 + 1) + 0;
    let randoY = Math.random() * (30 - 10 + 1) + 10;
    let randoZ = Math.random() * (3 - (-3) + 1) + (-3);
    let randoR = Math.random() * (11 - 5 + 1) + 5;
    let randoRote = Math.random() * (360 - 1 +1) + 1;
    let leaves = document.createElement( 'a-sphere' );
    leaves.setAttribute( 'class' , `branch`+i );
    leaves.setAttribute( 'material', 'src: texture/green-leaves.jpg; roughness: 1; side:front');
    leaves.setAttribute( 'position' , `${randoX} ${randoY} ${randoZ}` );
    leaves.setAttribute( 'radius' , `${randoR}` );
    leaves.setAttribute( 'rotation', `${randoRote} ${randoRote} ${randoRote}`);
    leaves.setAttribute( 'shadow' , 'cast: true;' );
    leaves.setAttribute( 'segments-width' , '3');

    branches.appendChild(leaves);
  }
  scene.appendChild( branches );
}


//tress
  for( let t = 0; t < treeNum; t++){
    let Heightz = Math.floor(Math.random() * (300 - (90) + 1) + (90));
    let randArray = letsTryThis();
    //crateTree(Heightz, randArray[0], randArray[1]);
  }