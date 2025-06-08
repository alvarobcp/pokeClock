import React, { useState } from "react";

import * as PokeIcons from "./PokeIcons";

function Dot({count, iconsArray, dotNumber}) {

    const pokBalls = [
      <PokeIcons.SuperBall key="super" />,
      <PokeIcons.HonorBall key="honor" />,
      <PokeIcons.UltraBall key="ultra1" />,
      <PokeIcons.MasterBall key="master1" />,
      <PokeIcons.ClassicBall key="classic" />,
      <PokeIcons.UltraBall key="ultra2" />,
      <PokeIcons.MasterBall key="master2" />,
      <PokeIcons.ClassicBall key="classic2" />,
    ];
  

    return(
      <>
        {Array.from({ length: dotNumber }, (_, index) => ( 
          <div key={`dot-${index}`}> 
            {index < count ? pokBalls[iconsArray[index]] : null}
          </div> 
        ))}
      </>
    )

}

export default Dot;



/* ANOTHER VERSION WITH FLOWERS
import AnimatedFlower from "./AnimatedFlower";

const colors = ["#FFCF81", "#FFD586", "#FFAAAA", "#FF9898", "#9B7EBD","#FF69B4"];

{index < count ? (
  <AnimatedFlower 
    petalColor={colors[index]}
    centerColor="#FFD700"
    petalCount={5 + index}
  />
) : null}

*/