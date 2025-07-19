"use client";

import React from 'react';
import constHandler from '@/app/constHandler';
import { Label } from './ui/label';


const cD = constHandler();

function handleRedirect(event: any, to: string) {
  if (to == "Discord"){
    console.log(`Directing using to ${cD.discord}`)
    window.location.replace(cD.discord)
  }
  if (to == "Github"){
    console.log(`Directing using to ${cD.github}`)
    window.location.replace(cD.github)
  }
   
}

export default function Glass() {
  return (
    <div className='flex items-center justify-center'>
      
    <div className='fixed top-75 text-center w-[75%] z-50 bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl'>
        
         <div className='flex items-center justify-center p-4'>

                <button
                onClick={(e) => handleRedirect(e, "Github")}
                className='border-2 border-accent-foreground rounded-2xl'
                >
                <img src="/static/icons/github.gif" alt="github" />
                </button>
                

                <button
                onClick={(e) => handleRedirect(e, "Discord")}
                className='border-2 border-accent-foreground rounded-2xl'
                >
                <img src="/static/icons/discord.gif" alt="Discord" />
                </button>
        </div>

      
      </div>
      
    </div>
  );
}