import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Hardware Implementation of an Image Decompressor",
    image: projectOne,
    description: (
      <>
        <p>
        - Processed compressed data for a 320 x 240-pixel image received on an Altera DE2-115 board via UART interface and stored
        in an external SRAM.
        </p>
        <p>
        - Developed a Verilog program using Quartus II to configure the FPGA to read and recover the compressed image to a VGA
        controller for display to a monitor
        </p>
      </>
    ),
    github: "https://github.com",
  },
  2: {
    title: "Embedded 3D Spatial Mapping System",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
  },
  3: {
    title: "Artificial Pacemaker",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
  },
  4: {
    title: "Infrastructure for Self-Driving Vehicles",
    /*CHANGE LATER*/
    image: projectOne,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
  },
};

export default projects;
