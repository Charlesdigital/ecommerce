import React from 'react'

function content() {
    const bikeData = {
        brand: "Trek",
        model: "X-Caliber 7",
        frameSize: 18.5,
        wheelSize: 29,
        color: "Black",
        gears: 22,
        suspension: "Front",
        weight: 12.5,
        price: 1299.99,
        isInStock: true,
        specifications: {
          frame: "Alpha Gold Aluminum",
          fork: "RockShox 30 Silver, coil spring",
          rearShock: "N/A",
          frontDerailleur: "Shimano Deore",
          rearDerailleur: "Shimano Deore XT",
          shifters: "Shimano Deore M4100",
          brakes: "Shimano MT200 hydraulic disc",
          crankset: "Shimano Deore M5100",
          cassette: "Shimano Deore M5100, 10-51, 11-speed",
          chain: "KMC X11",
          tires: "Bontrager XR2 Comp, wire bead, 29x2.20\"",
          saddle: "Bontrager Arvada",
          handlebar: "Bontrager alloy, 31.8mm",
          stem: "Bontrager alloy, 31.8mm, Blendr-compatible",
          grips: "Bontrager XR Endurance Comp",
          pedals: "Wellgo M141, resin body",
        },
        features: [
          "Tubeless ready rims",
          "Internal cable routing",
          "Rack and kickstand mounts",
          "Dropper post compatible",
          "Alpha Gold Aluminum frame",
        ],
        getFullDescription: function () {
          return `${this.brand} ${this.model} - ${this.color}\nFrame Size: ${this.frameSize} inches\nWheel Size: ${this.wheelSize} inches\nGears: ${this.gears}\nWeight: ${this.weight} kg\nPrice: $${this.price}`;
        },
      };
  return (
    <div>content</div>
  )
}

export default content