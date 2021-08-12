AFRAME.registerComponent('my-animation', {
        schema: {
          speedX: { type: 'float', default: 0 },
          totalSizeX: { type: 'float' }
        },
        tick: function ( time, timeDelta ) {
          let position = this.el.object3D.position;
          position.setY( position.y + ( this.data.speedX ) );

          if( position.y >= ( this.data.totalSizeX ) ) {
            position.setY( 0 );
          }
        }
      });