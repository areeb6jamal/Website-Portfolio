import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
  1: {
    title: "Hardware Implementation of an Image Decompressor",
    image: projectOne,
    description: (
      <>
        <p>
        <b>Sept. 2023 - Dec. 2023</b>
        </p>
        <p>
        <b>-</b> Processed compressed data for a 320 x 240-pixel image received on an Altera DE2-115 board via UART interface and stored
        in an external SRAM.<br /> 
        <b>-</b> Wrote a Verilog program using Quartus II to configure the FPGA to read and recover the compressed image to a VGA
        controller for display to a monitor.
        </p>
      </>
    ),
    github: "https://github.com/areeb6jamal",
  },
  2: {
    title: "Embedded 3D Spatial Mapping System",
    image: projectTwo,
    description: (
      <>
        <p>
        <b>Jan. 2023 - Apr. 2023</b>
        </p>
        <p>
        <b>-</b> Integrated a 28BYJ-48 stepper motor with a VL53L1X time-of-flight sensor using infrared laser light to obtain 
        360-degree distance measurements.<br /> 
        <b>-</b> Implemented a C++ program using Kiel to configure digital I/O pins on an MSP 430 microcontroller for reading
         LiDAR sensor data through I2C serial communication.<br /> 
        <b>-</b> Developed a Python script to visualize time-of-flight sensor measurement data collected through UART 
        communication from the MSP 430 in a 3D graphical representation using the comprehensive matplotlib library.
        </p>
      </>
    ),
    github: "https://github.com/areeb6jamal/Embedded-3D-Spatial-Mapping-System",
  },
  3: {
    title: "Artificial Pacemaker",
    image: projectThree,
    description: (
      <>
        <p>
        <b>Sept. 2022 - Dec. 2022</b>
        </p>
        <p>
        <b>-</b> Created a pacemaker model using Simulink to implement 8 different modes of autonomous heartbeat functionality for regulating 4
        heart chambers on an NXP FRDM-K64F microcontroller.<br /> 
        <b>-</b> Designed a GUI using JavaScript that acted as a DCM for a user to control the pacemaker Simulink parameters as well as monitor the heart 
        chambers through an e-gram display which was serially communicated through UART by the board.
        </p>
      </>
    ),
    github: "https://github.com/areeb6jamal/Artificial_Pacemaker",
  },
  4: {
    title: "Infrastructure for Self-Driving Vehicles",
    /*CHANGE LATER*/
    image: projectFour,
    description: (
      <>
        <p>
        <b>Jan. 2022 - Apr. 2022</b>
        </p>
        <p>
        <b>-</b> Guided a multidisciplinary team to design and simulate a highway infrastructure using Python which allows self-driven vehicles and 
        human-driven vehicles to efficiently integrate at different percentages of autonomous vehicles.
        </p>
      </>
    ),
    github: "https://github.com/areeb6jamal/Infrastructure-For-Self-Driving-Vehicles",
  },
};

export default projects;
