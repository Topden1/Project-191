AFRAME.registerComponent("movements", {
    init: function () {
      var camera = this.el.geAttribute("camera")
      if (this.camera == "play") {
        this.camera()
      }
    },
    
    camera: function () {
      window.addEventListener("keydown", (e) => {
        var cameraRig = document.querySelector("#camera-rig")
        var cameraRotation = cameraRig.getAttribute("rotation")
        var cameraPosition = cameraRig.getAttribute("position")
        var cameraMoveControl = cameraRig.getAttribute("movement-controls")

        console.log(cameraMoveControl.speed)
        cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
         console.log(cameraMoveControl.speed)

         var cameraDirection = new THREE.Vector3();

         if (e.code == "ArrowRight") {
             cameraRotation.y -= 5
             cameraRig.setAttribute("rotation", {x: 0, y: cameraRotation.y, z: 0 })
             cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
         }
         if (e.code == "ArrowLeft") {
             cameraRotation.y += 5
             cameraRig.setAttribute("rotation", {x:0, y: cameraRotation.y, z: 0 })
             cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})

         }
         if (e.code == "ArrowUp") {
             multiply += 0.5

             if (multiply <= 200 && cameraPosition.z > -500) {
               cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
               var acceleratorCar = document.querySelector("#speed")
               carSpeed.setAttribute("text", {value: multiply });
             }
         }
         if (e.code == "Space") {
           cameraRig.setAttribute("movement-controls", {"speed": 100})
           var stopCar = document.querySelector("#control-break")
           stopCar.setAttribute("material", "color", "red")
         }
        
        });